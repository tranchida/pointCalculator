package main

import (
	"embed"
	"html/template"
	"io"
	"io/fs"
	"math"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

//go:embed views/*
var viewsFS embed.FS

//go:embed public/*
var publicFS embed.FS

// TemplateRenderer is a custom html/template renderer for Echo framework
type TemplateRenderer struct {
	templates *template.Template
}

// Render renders a template document
func (t *TemplateRenderer) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func main() {
	e := echo.New()

	// Static files from embed
	publicDir, err := fs.Sub(publicFS, "public")
	if err != nil {
		e.Logger.Fatal(err)
	}
	e.GET("/static/*", echo.WrapHandler(http.StripPrefix("/static/", http.FileServer(http.FS(publicDir)))))

	// Pre-compile templates from embed
	renderer := &TemplateRenderer{
		templates: template.Must(template.ParseFS(viewsFS, "views/*.html")),
	}
	e.Renderer = renderer

	// Routes
	e.GET("/", func(c echo.Context) error {
		return c.Render(http.StatusOK, "index.html", map[string]interface{}{
			"Poid":   100.0,
			"Points": 0.0,
		})
	})

	e.POST("/calculate", func(c echo.Context) error {
		proteins, _ := strconv.ParseFloat(c.FormValue("proteins"), 64)
		glucides, _ := strconv.ParseFloat(c.FormValue("glucides"), 64)
		lipides, _ := strconv.ParseFloat(c.FormValue("lipides"), 64)
		fibres, _ := strconv.ParseFloat(c.FormValue("fibres"), 64)
		poid, err := strconv.ParseFloat(c.FormValue("poid"), 64)

		if err != nil || poid == 0 {
			poid = 100 // Default value
		}

		// Mathematical logic from original Meteor application
		// Math.round((proteins / 11 + glucides / 9 + lipides / 4 + fibres / 30) * poid) / 100
		rawPoints := (proteins/11 + glucides/9 + lipides/4 + fibres/30) * poid
		points := math.Round(rawPoints) / 100

		return c.Render(http.StatusOK, "result", map[string]interface{}{
			"Poid":   poid,
			"Points": points,
		})
	})

	e.Logger.Fatal(e.Start(":8080"))
}
