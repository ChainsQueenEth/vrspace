# VR Space Website

VR Space is a responsive single-page site showcasing virtual reality experiences and games. It features a full-bleed hero, polished navigation (desktop and mobile), and professional, readable layouts across devices.

## Table of Contents

- Overview
- Demo
- Project Structure
- Tech Stack
- Scripts
- Local Development
- Architecture
- Accessibility
- Deployment

## Overview

VR Space is a static site with no build step. Styling is authored directly in `styles/globals.css` (no Tailwind build tooling). JavaScript is lightweight, focused on rendering UI pieces and controlling the mobile navigation.

Key highlights:
- Hero overlay positioned responsively across breakpoints
- Desktop and mobile menus with consistent styling
- Mobile drawer toggled by hamburger; hidden by default
- Accessible ARIA attributes and focus-visible outlines

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-0a84ff?style=for-the-badge)](https://chainsqueeneth.github.io/vrspace/)

Direct link: https://chainsqueeneth.github.io/vrspace/

## Project Structure

```
vrspace/
├─ images/                       # Static assets (hero, icons, etc.)
├─ js/
│  ├─ data.js                    # Centralized data for menus, creations, icons
│  ├─ dom-utils.js               # Small DOM helpers (create, empty)
│  ├─ main.js                    # App bootstrap on DOMContentLoaded
│  ├─ render.js                  # Pure render functions for UI pieces
│  └─ script.js                  # Menu toggle + behavior wiring
├─ styles/
│  └─ globals.css                # Single source of truth for all styling
├─ tests/                        # Optional: DOM behavior tests (if used)
├─ index.html                    # Main entry page
├─ package.json                  # Scripts (dev/start using a static server)
└─ pnpm-lock.yaml                # Lockfile for deterministic installs
```

## Tech Stack

- HTML5 for structure
- CSS (no build step) in `styles/globals.css`
- Vanilla JavaScript for rendering and interactions
- PNPM for package management

## Scripts

Defined in `package.json`:

- `pnpm dev` — Start a static server at http://localhost:5173
- `pnpm start` — Alias to start the static server

## Local Development

1) (Optional) Install dependencies — not strictly required for a static server, but keeps workflows consistent
```sh
pnpm install
```

2) Start the dev server
```sh
pnpm dev
# opens http://localhost:5173
```

Alternative local servers (if needed):
```sh
python3 -m http.server 5173
npx http-server -p 5173
```

## Architecture

- Rendering is data-driven via small, reusable modules in `js/`.
- `index.html` contains semantic containers (e.g., `#desktop-menu`, `#menu`) and hero markup.
- `render.js` and `dom-utils.js` keep DOM creation pure and composable.

## Accessibility

- The mobile menu button includes `aria-controls`, `aria-expanded`, and `aria-label`.
- The menu panel toggles `aria-hidden` and uses appropriate roles for assistive tech.
- The hero uses a non-interfering overlay to improve text contrast.
 - Visible focus outlines (`:focus-visible`) for header, footer, mobile menu, and hero links.

## Deployment

Any static hosting works (e.g., GitHub Pages, Netlify, Vercel static, S3+CloudFront).

Notes:
- Keep asset paths in `index.html` relative (e.g., `styles/globals.css`, `js/main.js`, `images/...`).
- There is no build step. `styles/globals.css` is the source of truth and is loaded by the browser.
