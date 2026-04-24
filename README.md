# Handoff: Yeheng Liang – Personal Portfolio Site

## Overview
A high-fidelity personal portfolio webpage for Yeheng Liang (yehengliang.github.io). The design is a dark luxury data-aesthetic single-page site with animated particle background, scroll-reveal sections, animated skill bars, and interactive elements. The goal is to deploy this directly to GitHub Pages by replacing `index.html` in the repo root.

## About the Design Files
The files in this bundle are **production-ready HTML** — this is not a prototype. The single `index.html` file is self-contained (no build step, no framework dependencies) and can be deployed directly to GitHub Pages. Simply replace the existing `index.html` at the root of the `yehengliang/yehengliang.github.io` repository with this file, and push.

## Fidelity
**High-fidelity** — pixel-perfect final design with all colors, typography, spacing, animations, and interactions fully implemented. No further styling decisions are needed.

---

## Deployment Instructions

### GitHub Pages (Primary Target)
1. Clone or open the repo: `yehengliang/yehengliang.github.io`
2. Replace `index.html` at the repo root with the `index.html` from this package
3. Copy the `uploads/` folder (containing `Yeheng02.jpeg`) to the repo root
4. Commit and push to `main` branch
5. GitHub Pages will deploy automatically at `https://yehengliang.github.io`

```bash
cp design_handoff_personal_site/index.html ./index.html
cp -r design_handoff_personal_site/uploads ./uploads
git add index.html uploads/
git commit -m "Update personal portfolio site"
git push origin main
```

---

## Page Structure & Sections

The site is a single-page layout with smooth scroll navigation. Sections in order:

| # | ID | Label | Background |
|---|-----|-------|-----------|
| 1 | `#home` | Hero | `--bg` dark |
| 2 | `#about` | About Me | `--bg2` slightly lighter |
| 3 | `#experience` | Work Experience | `--bg` |
| 4 | `#education` | Education | `--bg2` |
| 5 | `#publications` | Publications | `--bg` |
| 6 | `#speaking` | Speaking | `--bg3` |
| 7 | `#honors` | Honors & Awards | `--bg2` |
| 8 | `#organizations` | Organizations | `--bg` |
| 9 | `#reading` | Book Recommendation | `--bg` |
| 10 | `#game` | Stats Game | `--bg2` |
| 11 | `#contact` | Contact | `--bg` |

---

## Design Tokens

### Colors (CSS custom properties)
```css
--bg:      oklch(11% 0.015 260)   /* near-black navy */
--bg2:     oklch(14% 0.018 260)   /* slightly lighter */
--bg3:     oklch(17% 0.02 260)    /* section accent bg */
--surface: oklch(16% 0.02 255)    /* card backgrounds */
--border:  oklch(25% 0.025 260)   /* all borders */
--text:    oklch(88% 0.01 80)     /* primary text, warm white */
--muted:   oklch(55% 0.015 260)   /* secondary text */
--gold:    oklch(76% 0.155 82)    /* accent — approx #d4a843 */
--gold2:   oklch(65% 0.145 82)    /* darker gold for scrollbar */
```

### Typography
```
Display font: 'Cormorant Garamond' (Google Fonts) — weights 300, 400, 600; italic variants
Body font:    'Space Grotesk' (Google Fonts) — weights 300, 400, 500, 600

Section titles:   Cormorant Garamond, 300 weight, clamp(2.5rem, 5vw, 4rem)
Hero name:        Cormorant Garamond, 300 weight, clamp(3.5rem, 7vw, 6.5rem)
Body text:        Space Grotesk, 400 weight, 0.85–1.05rem
Labels/tags:      Space Grotesk, 0.65–0.78rem, letter-spacing 0.1–0.25em, uppercase
```

### Spacing
- Section padding: `7rem 3rem` (desktop), `5rem 1.5rem` (mobile <900px)
- Max content width: `1100px` centered
- Card padding: `2–3rem`

### Easing
```css
--ease-out:   cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out: cubic-bezier(0.45, 0, 0.15, 1)
```

---

## Key Components

### Animated Particle Canvas
- Fixed full-viewport `<canvas id="canvas-bg">` behind all content
- ~70 particles drifting slowly, connected by lines when within 120px
- Gold color, 50% opacity layer
- Tweakable: particle count (20–150), accent color, grid on/off

### Navigation
- Fixed top nav, transparent → solid on scroll
- Logo: "YL" in Cormorant Garamond gold
- Links: 0.78rem Space Grotesk, uppercase, gold underline on hover
- Becomes hamburger menu on mobile (<900px)

### Hero Section
- 2-column grid: left (photo + text), right (data panel)
- Profile photo: 110px circle, gold border, `object-position: center 30%`
- Data panel: 4 rows showing Company (G1001), Graduate School (CU), YOE counter, Publications
- YOE counter animates from 0 on page load (counted from Jan 2023)

### Skill Bars
- 10 animated horizontal bars in the About section
- Animate in via IntersectionObserver when scrolled into view
- Each bar: 3px height, gold gradient fill, staggered 80ms delay per bar
- Ratings: Statistical Modeling 95, R 92, Risk Management 90, Python 90, SQL 90, Power BI 90, Machine Learning 88, Econometrics 88, MATLAB 75, EViews 70

### Scroll Reveal
- All `.reveal` elements animate `opacity: 0 → 1` + `translateY(24px → 0)` on scroll
- IntersectionObserver threshold: 0.12
- Transition: `0.8s cubic-bezier(0.16, 1, 0.3, 1)`

### Stats Game (Interactive)
- Generates 10 random integers 0–100
- User guesses the mean
- Feedback: correct (green) / close ≤3 off (amber) / off (red)
- "New" button regenerates numbers

### Tweaks Panel
- Hidden by default, shown via `window.postMessage({type: '__activate_edit_mode'})`
- Controls: accent color picker, particle density slider, grid toggle
- Persists changes via `__edit_mode_set_keys` postMessage

---

## Animations

| Element | Animation | Duration | Delay |
|---------|-----------|----------|-------|
| Hero greeting | fadeUp | 0.8s | 0.3s |
| Hero name | fadeUp | 0.9s | 0.5s |
| Hero role | fadeUp | 0.8s | 0.7s |
| Hero CTAs | fadeUp | 0.8s | 0.9s |
| Data panel | fadeLeft | 0.9s | 0.9s |
| Scroll hint | fadeUp | 1.0s | 1.4s |
| YOE counter | count up | ~1s | 1.2s |
| Skill bars | width 0→pct | 1.2s | staggered 80ms |
| Section elements | fadeUp | 0.8s | on scroll |

---

## Assets

| File | Usage |
|------|-------|
| `uploads/Yeheng02.jpeg` | Profile headshot in hero circle |

External resources (CDN):
- Google Fonts: Cormorant Garamond + Space Grotesk
- No JS libraries — all vanilla JS

---

## Browser Support
Modern browsers (Chrome, Firefox, Safari, Edge). Uses `oklch()` colors — all modern browsers support this. No IE support needed.

---

## Files in this Package

| File | Description |
|------|-------------|
| `index.html` | Complete production-ready single-page site |
| `uploads/Yeheng02.jpeg` | Profile photo |
| `README.md` | This handoff document |
