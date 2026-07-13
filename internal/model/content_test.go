package model

import "testing"

func TestContentNormalizeAndValidate(t *testing.T) {
	content := SiteContent{
		Profile:  SiteProfile{Name: LocalizedText{ZH: "周金鑫", EN: "Zhou Jinxin"}, Email: "zhou@example.com"},
		Projects: []Project{{Slug: "embedded-4g-gateway", Title: LocalizedText{ZH: "4G 网关", EN: "4G Gateway"}, Visible: true}},
	}
	content.Normalize()
	if content.Projects[0].Status != "published" {
		t.Fatalf("expected legacy visible field to normalize to published, got %q", content.Projects[0].Status)
	}
	if err := content.Validate(); err != nil {
		t.Fatalf("valid content rejected: %v", err)
	}
}

func TestContentRejectsDuplicateSlug(t *testing.T) {
	content := SiteContent{
		Profile: SiteProfile{Name: LocalizedText{ZH: "周金鑫", EN: "Zhou Jinxin"}, Email: "zhou@example.com"},
		Projects: []Project{
			{Slug: "same", Title: LocalizedText{ZH: "一", EN: "One"}, Status: "draft"},
			{Slug: "same", Title: LocalizedText{ZH: "二", EN: "Two"}, Status: "draft"},
		},
	}
	if err := content.Validate(); err == nil {
		t.Fatal("duplicate slug should be rejected")
	}
}
