# CLAUDE.md — Yeheng Liang Portfolio

This file provides guidance for AI assistants working on this codebase.

## Project Overview

A personal portfolio/resume website for Yeheng Liang (Quantitative Analyst). It is a **pure static site** — no frameworks, no build step, no package manager. It is hosted on GitHub Pages via the `master` branch.

## Repository Structure

```
yehengliang.github.io/
├── index.html    # Single-page portfolio (all sections)
├── styles.css    # All site styles
├── game.js       # "Guess the Mean" interactive game logic
└── CLAUDE.md     # This file
```

## Technology Stack

- **HTML5** — semantic elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- **CSS3** — flexbox layout, gradients, sticky header, box shadows, transitions
- **Vanilla JavaScript (ES6+)** — no libraries, no transpilation

## Page Sections (in order)

| Section ID      | Nav Label       | Description                                  |
|-----------------|-----------------|----------------------------------------------|
| `#home`         | Home            | Welcome heading                              |
| `#about`        | About           | Bio paragraph + skill set list               |
| `#experience`   | Experience      | Current role at RVI Group                    |
| `#education`    | Education       | Columbia MA, Binghamton undergrad            |
| `#projects`     | Projects        | Two ML projects (Genetic Testing, Covid-19)  |
| `#publications` | Publications    | FunFor paper (Scientific Reports, 2021)      |
| `#organizations`| Organizations   | Phi Beta Kappa, Math Problem-solving Group   |
| `#game`         | Stats Game      | "Guess the Mean" interactive game            |
| `#contact`      | Contact         | Email and LinkedIn links                     |

## Key Code Details

### index.html
- Single HTML file; all content sections live here.
- Navigation anchors must match section `id` attributes exactly.
- External links use `target="_blank"`.
- `game.js` is loaded at the bottom of `<body>` (after all DOM elements).

### styles.css
- Body background: `linear-gradient(135deg, #e2e2e2 0%, #c9d6ff 100%)`
- Header: `position: sticky; top: 0; z-index: 1000; background: rgba(0,0,0,0.8)`
- Nav hover color: `#ffd700` (gold), with `transition: color 0.3s`
- Sections: `max-width: 800px; margin: 1rem auto; background: rgba(255,255,255,0.85); border-radius: 8px`
- Buttons: dark (`#333`) with hover lightening to `#555`
- `.numbers-display`: used by the game section to show generated numbers

### game.js
- Wraps all logic in `DOMContentLoaded` listener.
- `newGame()`: generates 10 random integers 0–100, renders them, clears prior state.
- `checkGuess()`: reads `#guess` input, computes mean, shows actual mean and difference.
- Initializes automatically (calls `newGame()` on load).

## Development Workflow

There is **no build process**. To develop:

1. Edit `index.html`, `styles.css`, or `game.js` directly.
2. Open `index.html` in a browser to preview (file:// is fine for this project).
3. No compilation, bundling, or transpilation is needed.
4. No testing framework — test manually in a browser.

## Deployment

- Deployed automatically by **GitHub Pages** from the `master` branch.
- Pushing to `master` is sufficient to deploy.
- No CI/CD pipeline or GitHub Actions workflow.

## Conventions

- **No frameworks** — keep the site dependency-free.
- **No build tooling** — do not introduce npm, webpack, or similar.
- **Semantic HTML** — use appropriate HTML5 elements.
- **camelCase** for JavaScript identifiers.
- **New sections** must be added to both the `<nav>` list and as a `<section id="...">` element; the `href` and `id` must match.
- **External links** should include `target="_blank"`.
- Copyright year in the footer should reflect the current year.

## Contact Information

- Email: yl4829@columbia.edu
- LinkedIn: https://www.linkedin.com/in/yehengliang/
