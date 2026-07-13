package site

import "embed"

// Files contains the server-rendered templates and the Vite production bundle.
//
//go:embed templates dist
var Files embed.FS
