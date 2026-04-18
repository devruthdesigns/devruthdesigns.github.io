# Ruth Designs Portfolio Website

Static portfolio site for **Ruth Designs**, a graphic design studio. Live at [ruthdesigns.in](https://ruthdesigns.in/).

## Stack
- Pure HTML / CSS / JS — no frameworks, no build step
- Hosted on GitHub Pages with a custom domain (`CNAME: ruthdesigns.in`)

## Structure
| File/Folder | Purpose |
|---|---|
| `index.html` | Page shell — header, filter bar, grid, lightbox, contact modal |
| `styles.css` | All styles |
| `script.js` | All JS logic + portfolio data array (100 items) |
| `public/images/` | Full-resolution portfolio images |
| `public/thumbnails/` | Compressed thumbnails for grid |

## Features
- Category filter (Packaging, Branding, Social Media, Banners)
- Live search by title/category
- Masonry grid with scroll-reveal animations
- Lightbox with keyboard navigation (←/→/Esc)
- Contact modal (WhatsApp + Email)
- Fully responsive down to mobile

## Adding New Portfolio Items
1. Place the full-res image in `public/images/` and a thumbnail in `public/thumbnails/`
2. Add an entry to the `items[]` array in `script.js`:
```js
{ id: 101, title: "Your Title", category: "packaging", file: "Your_Image.jpg" }
```
Categories: `packaging`, `branding`, `social-media`, `banners`

## Deployment
Push to `main` — GitHub Pages deploys automatically.
