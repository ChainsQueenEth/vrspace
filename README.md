# VR Space Website

[![CI](https://github.com/ChainsQueenEth/web3dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/ChainsQueenEth/web3dashboard/actions/workflows/ci.yml)

VR Space Website is a responsive, static site that showcases virtual reality creations. The project emphasizes accessibility, reusable UI rendering, and a modern Tailwind CSS workflow with self-tests.

## Table of Contents

- Overview
- Project Structure
- Tech Stack
- Scripts
- Local Development
- Testing
- Architecture
- Accessibility
- Deployment (GitHub Pages)

## Overview

This repository contains the HTML, CSS, and JavaScript code for the VR Space website. The site is fully responsive and optimized for readability through semantic HTML, ARIA attributes, and a contrast-enhancing hero overlay.

## Project Structure

```
vrspace/
├─ .github/
│  └─ workflows/
│     └─ deploy-pages.yml        # GitHub Pages CI (build + deploy)
├─ css/
│  └─ style.css                  # Tailwind build output
├─ images/                       # Static assets (hero, icons, etc.)
├─ js/
│  ├─ data.js                    # Centralized data for menus, creations, icons
│  ├─ dom-utils.js               # Small DOM helpers (create, empty)
│  ├─ main.js                    # App bootstrap on DOMContentLoaded
│  ├─ render.js                  # Pure render functions for UI pieces
│  └─ script.js                  # Menu toggle + behavior wiring
├─ tests/
│  └─ *.test.js                  # Vitest tests (happy-dom)
├─ index.html                    # Main entry page
├─ input.css                     # Tailwind source (uses @tailwind, @apply)
├─ tailwind.config.js            # Tailwind configuration
├─ package.json                  # Scripts (build, watch, dev, tests)
└─ pnpm-lock.yaml                # Lockfile for deterministic installs
```

## Tech Stack

- HTML5 for structure
- Tailwind CSS for styling (utility-first, component classes via @apply)
- Vanilla JavaScript for rendering and interactions
- Vitest + happy-dom for unit testing DOM behavior
- PNPM for package management

## Scripts

Defined in `package.json`:

- `pnpm run build` — Build Tailwind from `input.css` to `css/style.css`.
- `pnpm run watch` — Watch and rebuild Tailwind on changes.
- `pnpm dev` — Start a static server at http://localhost:5173.
- `pnpm test` — Run tests once with Vitest.
- `pnpm run test:watch` — Run tests in watch mode.

## Local Development

1) Install dependencies
```sh
pnpm install
```

2) Start the dev server (recommended)
```sh
pnpm dev
# opens http://localhost:5173
```

3) Build or watch Tailwind
```sh
pnpm run build   # one-time build
pnpm run watch   # watch mode
```

Alternative local servers (if needed):
```sh
python3 -m http.server 5173
npx http-server -p 5173
```

## Testing

The project uses Vitest with the happy-dom environment.

Install (if not installed yet):
```sh
pnpm add -D vitest happy-dom
```

Run tests:
```sh
pnpm test
pnpm run test:watch
```

## Architecture

- Rendering is data-driven via small, reusable modules in `js/`.
- `index.html` contains minimal markup and semantic containers (e.g., `#desktop-menu`, `#menu`).
- `render.js` and `dom-utils.js` keep the DOM creation pure and composable.

## Accessibility

- The mobile menu button includes `aria-controls`, `aria-expanded`, and `aria-label`.
- The menu panel toggles `aria-hidden` and uses appropriate roles for assistive tech.
- The hero uses a non-interfering overlay to improve text contrast.

## Deployment (GitHub Pages)

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that installs dependencies, builds Tailwind, and deploys to GitHub Pages on pushes to `main`.

One-time setup on GitHub:
1. Push the repository with the workflow file.
2. In the repo: Settings → Pages → Build and deployment → Source: select "GitHub Actions".

Notes:
- Keep asset paths in `index.html` relative (e.g., `css/style.css`, `js/main.js`, `images/...`).
- You may commit `css/style.css` or rely on CI to generate it during deploy.
