package store

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	_ "modernc.org/sqlite"
)

var ErrVersionConflict = errors.New("内容已被其他会话更新，请刷新后重试")

type Store struct {
	db *sql.DB
}

type AdminUser struct {
	ID           int64  `json:"id"`
	Username     string `json:"username"`
	PasswordHash string `json:"-"`
	MustChange   bool   `json:"mustChangePassword"`
}

type Session struct {
	ID         string
	UserID     int64
	Username   string
	TokenHash  string
	CSRFToken  string
	ExpiresAt  time.Time
	MustChange bool
}

type Revision struct {
	ID        string    `json:"id"`
	Note      string    `json:"note"`
	CreatedAt time.Time `json:"createdAt"`
	Active    bool      `json:"active"`
}

type MediaAsset struct {
	ID           string    `json:"id"`
	Kind         string    `json:"kind"`
	OriginalName string    `json:"originalName"`
	StoredName   string    `json:"storedName"`
	MIMEType     string    `json:"mimeType"`
	Size         int64     `json:"size"`
	Status       string    `json:"status"`
	VariantsJSON string    `json:"variantsJson"`
	CreatedAt    time.Time `json:"createdAt"`
}

type DocumentAsset struct {
	ID           string    `json:"id"`
	OriginalName string    `json:"originalName"`
	StoredName   string    `json:"storedName"`
	MIMEType     string    `json:"mimeType"`
	Size         int64     `json:"size"`
	Active       bool      `json:"active"`
	CreatedAt    time.Time `json:"createdAt"`
}

func Open(path string) (*Store, error) {
	if err := os.MkdirAll(filepath.Dir(path), 0o750); err != nil {
		return nil, err
	}
	dsn := fmt.Sprintf("file:%s?_pragma=busy_timeout(5000)&_pragma=journal_mode(WAL)&_pragma=foreign_keys(ON)", filepath.ToSlash(path))
	db, err := sql.Open("sqlite", dsn)
	if err != nil {
		return nil, err
	}
	db.SetMaxOpenConns(1)
	store := &Store{db: db}
	if err := store.migrate(context.Background()); err != nil {
		db.Close()
		return nil, err
	}
	return store, nil
}

func (s *Store) Close() error { return s.db.Close() }

func (s *Store) migrate(ctx context.Context) error {
	const schema = `
CREATE TABLE IF NOT EXISTS drafts (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  content_json TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS content_revisions (
  id TEXT PRIMARY KEY,
  content_json TEXT NOT NULL,
  note TEXT NOT NULL DEFAULT '',
  is_active INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_revisions_active ON content_revisions(is_active, created_at DESC);
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  must_change INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS admin_sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL UNIQUE,
  csrf_token TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON admin_sessions(token_hash);
CREATE TABLE IF NOT EXISTS media_assets (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL,
  original_name TEXT NOT NULL,
  stored_name TEXT NOT NULL UNIQUE,
  mime_type TEXT NOT NULL,
  size INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'private',
  variants_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_media_created ON media_assets(created_at DESC);
CREATE TABLE IF NOT EXISTS document_assets (
  id TEXT PRIMARY KEY,
  original_name TEXT NOT NULL,
  stored_name TEXT NOT NULL UNIQUE,
  mime_type TEXT NOT NULL,
  size INTEGER NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_documents_active ON document_assets(is_active, created_at DESC);
`
	_, err := s.db.ExecContext(ctx, schema)
	return err
}

func (s *Store) EnsureSeed(ctx context.Context, contentJSON []byte, username, passwordHash string) error {
	if !json.Valid(contentJSON) {
		return errors.New("seed content is not valid JSON")
	}
	now := time.Now().UTC().Format(time.RFC3339Nano)
	tx, err := s.db.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()
	var draftCount int
	if err := tx.QueryRowContext(ctx, `SELECT COUNT(*) FROM drafts`).Scan(&draftCount); err != nil {
		return err
	}
	if draftCount == 0 {
		if _, err := tx.ExecContext(ctx, `INSERT INTO drafts(id, content_json, version, updated_at) VALUES(1, ?, 1, ?)`, string(contentJSON), now); err != nil {
			return err
		}
		revisionID := randomID("rev")
		if _, err := tx.ExecContext(ctx, `INSERT INTO content_revisions(id, content_json, note, is_active, created_at) VALUES(?, ?, ?, 1, ?)`, revisionID, string(contentJSON), "初始简历内容", now); err != nil {
			return err
		}
	}
	var userCount int
	if err := tx.QueryRowContext(ctx, `SELECT COUNT(*) FROM admin_users`).Scan(&userCount); err != nil {
		return err
	}
	if userCount == 0 {
		if strings.TrimSpace(passwordHash) == "" {
			return errors.New("initial administrator password hash is required")
		}
		if _, err := tx.ExecContext(ctx, `INSERT INTO admin_users(username, password_hash, must_change, created_at, updated_at) VALUES(?, ?, 1, ?, ?)`, username, passwordHash, now, now); err != nil {
			return err
		}
	}
	return tx.Commit()
}

func (s *Store) GetDraft(ctx context.Context) ([]byte, int64, error) {
	var raw string
	var version int64
	err := s.db.QueryRowContext(ctx, `SELECT content_json, version FROM drafts WHERE id = 1`).Scan(&raw, &version)
	return []byte(raw), version, err
}

func (s *Store) UpdateDraft(ctx context.Context, contentJSON []byte, expectedVersion int64) (int64, error) {
	now := time.Now().UTC().Format(time.RFC3339Nano)
	result, err := s.db.ExecContext(ctx, `UPDATE drafts SET content_json = ?, version = version + 1, updated_at = ? WHERE id = 1 AND version = ?`, string(contentJSON), now, expectedVersion)
	if err != nil {
		return 0, err
	}
	affected, err := result.RowsAffected()
	if err != nil {
		return 0, err
	}
	if affected != 1 {
		return 0, ErrVersionConflict
	}
	return expectedVersion + 1, nil
}

func (s *Store) ActiveContent(ctx context.Context) ([]byte, error) {
	var raw string
	err := s.db.QueryRowContext(ctx, `SELECT content_json FROM content_revisions WHERE is_active = 1 ORDER BY created_at DESC LIMIT 1`).Scan(&raw)
	return []byte(raw), err
}

func (s *Store) Publish(ctx context.Context, contentJSON []byte, note string, publicMediaIDs []string) (Revision, error) {
	tx, err := s.db.BeginTx(ctx, nil)
	if err != nil {
		return Revision{}, err
	}
	defer tx.Rollback()
	if _, err := tx.ExecContext(ctx, `UPDATE content_revisions SET is_active = 0 WHERE is_active = 1`); err != nil {
		return Revision{}, err
	}
	now := time.Now().UTC()
	revision := Revision{ID: randomID("rev"), Note: strings.TrimSpace(note), CreatedAt: now, Active: true}
	if revision.Note == "" {
		revision.Note = "发布内容更新"
	}
	if _, err := tx.ExecContext(ctx, `INSERT INTO content_revisions(id, content_json, note, is_active, created_at) VALUES(?, ?, ?, 1, ?)`, revision.ID, string(contentJSON), revision.Note, now.Format(time.RFC3339Nano)); err != nil {
		return Revision{}, err
	}
	if _, err := tx.ExecContext(ctx, `UPDATE media_assets SET status = 'private'`); err != nil {
		return Revision{}, err
	}
	for _, id := range publicMediaIDs {
		if _, err := tx.ExecContext(ctx, `UPDATE media_assets SET status = 'published' WHERE id = ?`, id); err != nil {
			return Revision{}, err
		}
	}
	if err := tx.Commit(); err != nil {
		return Revision{}, err
	}
	return revision, nil
}

func (s *Store) ListRevisions(ctx context.Context, limit int) ([]Revision, error) {
	if limit <= 0 || limit > 100 {
		limit = 30
	}
	rows, err := s.db.QueryContext(ctx, `SELECT id, note, created_at, is_active FROM content_revisions ORDER BY created_at DESC LIMIT ?`, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	revisions := make([]Revision, 0)
	for rows.Next() {
		var revision Revision
		var created string
		var active int
		if err := rows.Scan(&revision.ID, &revision.Note, &created, &active); err != nil {
			return nil, err
		}
		revision.CreatedAt, _ = time.Parse(time.RFC3339Nano, created)
		revision.Active = active == 1
		revisions = append(revisions, revision)
	}
	return revisions, rows.Err()
}

func (s *Store) RestoreRevision(ctx context.Context, revisionID string) (int64, error) {
	tx, err := s.db.BeginTx(ctx, nil)
	if err != nil {
		return 0, err
	}
	defer tx.Rollback()
	var raw string
	if err := tx.QueryRowContext(ctx, `SELECT content_json FROM content_revisions WHERE id = ?`, revisionID).Scan(&raw); err != nil {
		return 0, err
	}
	now := time.Now().UTC().Format(time.RFC3339Nano)
	if _, err := tx.ExecContext(ctx, `UPDATE drafts SET content_json = ?, version = version + 1, updated_at = ? WHERE id = 1`, raw, now); err != nil {
		return 0, err
	}
	var version int64
	if err := tx.QueryRowContext(ctx, `SELECT version FROM drafts WHERE id = 1`).Scan(&version); err != nil {
		return 0, err
	}
	return version, tx.Commit()
}

func (s *Store) GetAdminByUsername(ctx context.Context, username string) (AdminUser, error) {
	var user AdminUser
	var mustChange int
	err := s.db.QueryRowContext(ctx, `SELECT id, username, password_hash, must_change FROM admin_users WHERE username = ?`, username).Scan(&user.ID, &user.Username, &user.PasswordHash, &mustChange)
	user.MustChange = mustChange == 1
	return user, err
}

func (s *Store) UpdateAdminPassword(ctx context.Context, userID int64, passwordHash string) error {
	now := time.Now().UTC().Format(time.RFC3339Nano)
	tx, err := s.db.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()
	if _, err := tx.ExecContext(ctx, `UPDATE admin_users SET password_hash = ?, must_change = 0, updated_at = ? WHERE id = ?`, passwordHash, now, userID); err != nil {
		return err
	}
	if _, err := tx.ExecContext(ctx, `DELETE FROM admin_sessions WHERE user_id = ?`, userID); err != nil {
		return err
	}
	return tx.Commit()
}

func (s *Store) CreateSession(ctx context.Context, session Session) error {
	now := time.Now().UTC().Format(time.RFC3339Nano)
	_, err := s.db.ExecContext(ctx, `INSERT INTO admin_sessions(id, user_id, token_hash, csrf_token, expires_at, created_at) VALUES(?, ?, ?, ?, ?, ?)`,
		session.ID, session.UserID, session.TokenHash, session.CSRFToken, session.ExpiresAt.UTC().Format(time.RFC3339Nano), now)
	return err
}

func (s *Store) GetSession(ctx context.Context, tokenHash string) (Session, error) {
	var session Session
	var expires string
	var mustChange int
	err := s.db.QueryRowContext(ctx, `
SELECT s.id, s.user_id, u.username, s.token_hash, s.csrf_token, s.expires_at, u.must_change
FROM admin_sessions s JOIN admin_users u ON u.id = s.user_id
WHERE s.token_hash = ? AND s.expires_at > ?`, tokenHash, time.Now().UTC().Format(time.RFC3339Nano)).
		Scan(&session.ID, &session.UserID, &session.Username, &session.TokenHash, &session.CSRFToken, &expires, &mustChange)
	if err == nil {
		session.ExpiresAt, _ = time.Parse(time.RFC3339Nano, expires)
		session.MustChange = mustChange == 1
	}
	return session, err
}

func (s *Store) DeleteSession(ctx context.Context, tokenHash string) error {
	_, err := s.db.ExecContext(ctx, `DELETE FROM admin_sessions WHERE token_hash = ?`, tokenHash)
	return err
}

func (s *Store) CleanupSessions(ctx context.Context) error {
	_, err := s.db.ExecContext(ctx, `DELETE FROM admin_sessions WHERE expires_at <= ?`, time.Now().UTC().Format(time.RFC3339Nano))
	return err
}

func (s *Store) AddMedia(ctx context.Context, media MediaAsset) error {
	_, err := s.db.ExecContext(ctx, `INSERT INTO media_assets(id, kind, original_name, stored_name, mime_type, size, status, variants_json, created_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		media.ID, media.Kind, media.OriginalName, media.StoredName, media.MIMEType, media.Size, media.Status, media.VariantsJSON, media.CreatedAt.UTC().Format(time.RFC3339Nano))
	return err
}

func (s *Store) GetMedia(ctx context.Context, id string) (MediaAsset, error) {
	var media MediaAsset
	var created string
	err := s.db.QueryRowContext(ctx, `SELECT id, kind, original_name, stored_name, mime_type, size, status, variants_json, created_at FROM media_assets WHERE id = ?`, id).
		Scan(&media.ID, &media.Kind, &media.OriginalName, &media.StoredName, &media.MIMEType, &media.Size, &media.Status, &media.VariantsJSON, &created)
	media.CreatedAt, _ = time.Parse(time.RFC3339Nano, created)
	return media, err
}

func (s *Store) ListMedia(ctx context.Context) ([]MediaAsset, error) {
	rows, err := s.db.QueryContext(ctx, `SELECT id, kind, original_name, stored_name, mime_type, size, status, variants_json, created_at FROM media_assets ORDER BY created_at DESC`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := make([]MediaAsset, 0)
	for rows.Next() {
		var item MediaAsset
		var created string
		if err := rows.Scan(&item.ID, &item.Kind, &item.OriginalName, &item.StoredName, &item.MIMEType, &item.Size, &item.Status, &item.VariantsJSON, &created); err != nil {
			return nil, err
		}
		item.CreatedAt, _ = time.Parse(time.RFC3339Nano, created)
		items = append(items, item)
	}
	return items, rows.Err()
}

func (s *Store) MediaUsage(ctx context.Context) (int64, error) {
	var total sql.NullInt64
	err := s.db.QueryRowContext(ctx, `SELECT SUM(size) FROM media_assets`).Scan(&total)
	return total.Int64, err
}

func (s *Store) MediaReferenced(ctx context.Context, id string) (bool, error) {
	var count int
	err := s.db.QueryRowContext(ctx, `SELECT COUNT(*) FROM content_revisions WHERE content_json LIKE ?`, "%"+id+"%").Scan(&count)
	return count > 0, err
}

func (s *Store) DeleteMedia(ctx context.Context, id string) error {
	_, err := s.db.ExecContext(ctx, `DELETE FROM media_assets WHERE id = ?`, id)
	return err
}

func (s *Store) AddDocument(ctx context.Context, document DocumentAsset) error {
	tx, err := s.db.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()
	if _, err := tx.ExecContext(ctx, `UPDATE document_assets SET is_active = 0 WHERE is_active = 1`); err != nil {
		return err
	}
	if _, err := tx.ExecContext(ctx, `INSERT INTO document_assets(id, original_name, stored_name, mime_type, size, is_active, created_at) VALUES(?, ?, ?, ?, ?, 1, ?)`,
		document.ID, document.OriginalName, document.StoredName, document.MIMEType, document.Size, document.CreatedAt.UTC().Format(time.RFC3339Nano)); err != nil {
		return err
	}
	return tx.Commit()
}

func (s *Store) ActiveDocument(ctx context.Context) (DocumentAsset, error) {
	var document DocumentAsset
	var created string
	var active int
	err := s.db.QueryRowContext(ctx, `SELECT id, original_name, stored_name, mime_type, size, is_active, created_at FROM document_assets WHERE is_active = 1 ORDER BY created_at DESC LIMIT 1`).
		Scan(&document.ID, &document.OriginalName, &document.StoredName, &document.MIMEType, &document.Size, &active, &created)
	document.Active = active == 1
	document.CreatedAt, _ = time.Parse(time.RFC3339Nano, created)
	return document, err
}

func (s *Store) Backup(ctx context.Context, destination string) error {
	if err := os.MkdirAll(filepath.Dir(destination), 0o750); err != nil {
		return err
	}
	clean := filepath.Clean(destination)
	if strings.ContainsRune(clean, '\x00') {
		return errors.New("invalid backup path")
	}
	escaped := strings.ReplaceAll(filepath.ToSlash(clean), "'", "''")
	_, err := s.db.ExecContext(ctx, `VACUUM INTO '`+escaped+`'`)
	return err
}

func randomID(prefix string) string {
	now := time.Now().UTC().UnixNano()
	return fmt.Sprintf("%s_%x", prefix, now)
}
