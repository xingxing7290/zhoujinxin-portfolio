package store

import (
	"context"
	"path/filepath"
	"testing"
)

func TestDraftPublishAndRestore(t *testing.T) {
	dataStore, err := Open(filepath.Join(t.TempDir(), "portfolio.sqlite"))
	if err != nil {
		t.Fatal(err)
	}
	defer dataStore.Close()
	ctx := context.Background()
	seed := []byte(`{"profile":{"name":{"zh":"周金鑫","en":"Zhou"}},"projects":[]}`)
	if err := dataStore.EnsureSeed(ctx, seed, "admin", "hash"); err != nil {
		t.Fatal(err)
	}
	_, version, err := dataStore.GetDraft(ctx)
	if err != nil || version != 1 {
		t.Fatalf("unexpected draft: version=%d err=%v", version, err)
	}
	updated := []byte(`{"profile":{"name":{"zh":"新版本","en":"New"}},"projects":[]}`)
	version, err = dataStore.UpdateDraft(ctx, updated, version)
	if err != nil || version != 2 {
		t.Fatalf("update failed: version=%d err=%v", version, err)
	}
	if _, err := dataStore.UpdateDraft(ctx, updated, 1); err != ErrVersionConflict {
		t.Fatalf("expected version conflict, got %v", err)
	}
	revision, err := dataStore.Publish(ctx, updated, "test publish", nil)
	if err != nil || revision.ID == "" {
		t.Fatalf("publish failed: %v", err)
	}
	active, err := dataStore.ActiveContent(ctx)
	if err != nil || string(active) != string(updated) {
		t.Fatalf("unexpected active content: %s %v", active, err)
	}
	if _, err := dataStore.RestoreRevision(ctx, revision.ID); err != nil {
		t.Fatalf("restore failed: %v", err)
	}
}
