# CLAUDE.md – Ruth Designs Portfolio Site

## Project Overview
Static portfolio website for **Ruth Designs**, a graphic design studio based in India. Deployed at `https://ruthdesigns.in/` via GitHub Pages. No build step — pure HTML/CSS/JS.

## File Structure
```
index.html          – Single-page app shell (header, filter bar, grid, lightbox, contact modal, footer)
styles.css          – All styles; no framework
script.js           – All JS; no framework; data array + render logic
public/
  images/           – Full-resolution portfolio images (served in lightbox)
  thumbnails/       – Compressed thumbnails (served in grid cards)
  ruthdesigns_logo_transparent.png
  ruthdesigns_favicon_transparent.png
CNAME               – ruthdesigns.in (GitHub Pages custom domain)
```

## Key Architecture

### Portfolio Data (`script.js` top)
All 100 portfolio items are defined as a plain JS array `items[]`. Each entry:
```js
{ id: Number, title: String, category: String, file: String }
```
Categories: `"packaging"`, `"branding"`, `"social-media"`, `"banners"`

Images load from:
- Grid thumbnails: `public/thumbnails/<file>`
- Lightbox full-res: `public/images/<file>`

Items are **shuffled on every page load** (Fisher-Yates, lines 122–125).

### Render Pipeline
`render()` → `getFiltered()` → builds DOM cards → attaches `IntersectionObserver` for scroll-reveal animation.

State variables: `activeCategory`, `searchQuery`, `visibleItems[]`, `lightboxIndex`.

### Features
- **Category filter** — dropdown (custom, no library)
- **Live search** — filters by title and category on `input` event
- **Scroll-reveal** — cards animate in with staggered column delay via `IntersectionObserver`
- **Lightbox** — keyboard nav (←/→/Esc), click-outside-to-close
- **Contact modal** — WhatsApp (`+910000000000`) and email (`abcd@gmail.com`)
- **Responsive** — breakpoints at 900px, 768px, 640px, 420px (search hidden below 420px)

## Adding Portfolio Items
1. Add full-res image to `public/images/`
2. Add thumbnail to `public/thumbnails/`
3. Append entry to `items[]` in `script.js` with next sequential `id`

## Contact Details (update in `index.html`)
- WhatsApp: `+910000000000` (line ~105)
- Email: `abcd@gmail.com` (line ~113)

## Deployment
Push to `main` branch → GitHub Pages auto-deploys to `https://ruthdesigns.in/`.
No CI, no build process, no package.json.

## Brand Colors
- Primary dark: `#111` (header bg)
- Accent red: `#a60031` (buttons), `#e84011` (hover/active states)
- Background: `#efefef`
