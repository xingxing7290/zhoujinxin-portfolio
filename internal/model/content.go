package model

import (
	"errors"
	"regexp"
	"sort"
	"strings"
	"time"
)

type LocalizedText struct {
	ZH string `json:"zh"`
	EN string `json:"en"`
}

func (t LocalizedText) Value(locale string) string {
	if locale == "en" && strings.TrimSpace(t.EN) != "" {
		return t.EN
	}
	return t.ZH
}

type SiteProfile struct {
	Name         LocalizedText `json:"name"`
	Title        LocalizedText `json:"title"`
	Eyebrow      LocalizedText `json:"eyebrow"`
	Summary      LocalizedText `json:"summary"`
	Availability LocalizedText `json:"availability"`
	Email        string        `json:"email"`
	Location     LocalizedText `json:"location"`
	PortraitURL  string        `json:"portraitUrl"`
}

type HeroStep struct {
	Index  int           `json:"index"`
	Kicker LocalizedText `json:"kicker"`
	Title  LocalizedText `json:"title"`
	Body   LocalizedText `json:"body"`
}

type SkillGroup struct {
	ID    string        `json:"id"`
	Title LocalizedText `json:"title"`
	Items []string      `json:"items"`
	Order int           `json:"order"`
}

type Experience struct {
	ID      string        `json:"id"`
	Company LocalizedText `json:"company"`
	Role    LocalizedText `json:"role"`
	Period  LocalizedText `json:"period"`
	Summary LocalizedText `json:"summary"`
	Bullets LocalizedText `json:"bullets"`
	Order   int           `json:"order"`
}

type Project struct {
	ID         string        `json:"id"`
	Slug       string        `json:"slug"`
	Title      LocalizedText `json:"title"`
	Summary    LocalizedText `json:"summary"`
	Role       LocalizedText `json:"role"`
	Period     LocalizedText `json:"period"`
	Background LocalizedText `json:"background"`
	Actions    LocalizedText `json:"actions"`
	Results    LocalizedText `json:"results"`
	Stack      []string      `json:"stack"`
	MediaIDs   []string      `json:"mediaIds"`
	Featured   bool          `json:"featured"`
	Visible    bool          `json:"visible"`
	Status     string        `json:"status"`
	Order      int           `json:"order"`
}

type Education struct {
	ID      string        `json:"id"`
	School  LocalizedText `json:"school"`
	Degree  LocalizedText `json:"degree"`
	Period  LocalizedText `json:"period"`
	Details LocalizedText `json:"details"`
	Order   int           `json:"order"`
}

type Award struct {
	ID     string        `json:"id"`
	Title  LocalizedText `json:"title"`
	Period string        `json:"period"`
	Order  int           `json:"order"`
}

type SiteContent struct {
	Profile     SiteProfile  `json:"profile"`
	Hero        []HeroStep   `json:"hero"`
	Skills      []SkillGroup `json:"skills"`
	Experiences []Experience `json:"experiences"`
	Projects    []Project    `json:"projects"`
	Education   []Education  `json:"education"`
	Awards      []Award      `json:"awards"`
	UpdatedAt   time.Time    `json:"updatedAt"`
}

var slugPattern = regexp.MustCompile(`^[a-z0-9]+(?:-[a-z0-9]+)*$`)

func (c *SiteContent) Normalize() {
	for index := range c.Projects {
		if c.Projects[index].Status == "" {
			if c.Projects[index].Visible {
				c.Projects[index].Status = "published"
			} else {
				c.Projects[index].Status = "draft"
			}
		}
		c.Projects[index].Visible = c.Projects[index].Status == "published"
	}
	sort.SliceStable(c.Hero, func(i, j int) bool { return c.Hero[i].Index < c.Hero[j].Index })
	sort.SliceStable(c.Skills, func(i, j int) bool { return c.Skills[i].Order < c.Skills[j].Order })
	sort.SliceStable(c.Experiences, func(i, j int) bool { return c.Experiences[i].Order < c.Experiences[j].Order })
	sort.SliceStable(c.Projects, func(i, j int) bool { return c.Projects[i].Order < c.Projects[j].Order })
	sort.SliceStable(c.Education, func(i, j int) bool { return c.Education[i].Order < c.Education[j].Order })
	sort.SliceStable(c.Awards, func(i, j int) bool { return c.Awards[i].Order < c.Awards[j].Order })
	c.UpdatedAt = time.Now().UTC()
}

func (c SiteContent) Validate() error {
	if strings.TrimSpace(c.Profile.Name.ZH) == "" || strings.TrimSpace(c.Profile.Name.EN) == "" {
		return errors.New("中英文姓名不能为空")
	}
	if strings.TrimSpace(c.Profile.Email) == "" || !strings.Contains(c.Profile.Email, "@") {
		return errors.New("邮箱格式无效")
	}
	if len(c.Projects) == 0 {
		return errors.New("至少需要一个项目")
	}
	seen := make(map[string]struct{}, len(c.Projects))
	for _, project := range c.Projects {
		if !slugPattern.MatchString(project.Slug) {
			return errors.New("项目 slug 只能使用小写字母、数字和连字符")
		}
		if _, exists := seen[project.Slug]; exists {
			return errors.New("项目 slug 不能重复")
		}
		seen[project.Slug] = struct{}{}
		if strings.TrimSpace(project.Title.ZH) == "" || strings.TrimSpace(project.Title.EN) == "" {
			return errors.New("项目中英文标题不能为空")
		}
		if project.Status != "draft" && project.Status != "published" {
			return errors.New("项目状态必须是 draft 或 published")
		}
	}
	return nil
}

func (c SiteContent) ProjectBySlug(slug string) (Project, bool) {
	for _, project := range c.Projects {
		if project.Slug == slug && project.Visible {
			return project, true
		}
	}
	return Project{}, false
}

func (c SiteContent) FeaturedProjects() []Project {
	projects := make([]Project, 0)
	for _, project := range c.Projects {
		if project.Visible && project.Featured {
			projects = append(projects, project)
		}
	}
	return projects
}

func (c SiteContent) VisibleProjects() []Project {
	projects := make([]Project, 0)
	for _, project := range c.Projects {
		if project.Visible {
			projects = append(projects, project)
		}
	}
	return projects
}

func (c SiteContent) ReferencedMediaIDs() []string {
	seen := map[string]struct{}{}
	for _, project := range c.Projects {
		if !project.Visible {
			continue
		}
		for _, id := range project.MediaIDs {
			if strings.TrimSpace(id) != "" {
				seen[id] = struct{}{}
			}
		}
	}
	ids := make([]string, 0, len(seen))
	for id := range seen {
		ids = append(ids, id)
	}
	sort.Strings(ids)
	return ids
}
