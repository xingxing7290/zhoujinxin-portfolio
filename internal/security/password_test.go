package security

import "testing"

func TestPasswordHashAndVerify(t *testing.T) {
	password := "Strong-Portfolio-2026!"
	hash, err := HashPassword(password)
	if err != nil {
		t.Fatal(err)
	}
	if hash == password || !VerifyPassword(hash, password) {
		t.Fatal("password hash did not verify")
	}
	if VerifyPassword(hash, password+"x") {
		t.Fatal("wrong password verified")
	}
}

func TestPasswordMinimumLength(t *testing.T) {
	if _, err := HashPassword("too-short"); err == nil {
		t.Fatal("short password should be rejected")
	}
}
