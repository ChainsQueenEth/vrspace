# VR Space Website

## Overview

This repository contains the HTML, CSS, and JavaScript code for the VR Space website. VR Space is a virtual reality content creation company, and this website serves as the digital front for showcasing its products, services, and creations. The website is designed to be fully responsive, ensuring a seamless user experience across various devices.

[![Kingdom's Valor](https://github.com/WebDevVenus/vrspace/blob/main/images/desktop/webpage.png)](https://webdevvenus.github.io/vrspace/)

## Features

### Navigation Bar

The website features a sticky navigation bar at the top, providing quick access to different sections of the website. The navigation bar includes links to the Home, About, Services, Creations, and Contact sections.

### Hero Section

The hero section introduces VR Space with a captivating background image, a welcoming message, and a call-to-action button. This section is designed to grab the visitor’s attention and encourage them to explore more.

### About Section

In this section, visitors can learn more about VR Space, its mission, and its values. It includes text content and images arranged in a clean and engaging layout.

### Creations Section

The Creations section highlights the space’s portfolio with a gallery of work. Each creation is presented with an image and a title. The gallery is divided into two containers, each holding four items, ensuring a balanced and aesthetically pleasing layout. The images have hover effects for interactivity, and there are separate images for desktop and mobile views.

### Footer

The footer provides additional navigation options, social media links, and contact information. It includes a logo, menu items, and social media icons, all arranged in a clean and organized manner.

### Responsive Design

The website is built with responsiveness in mind, ensuring that it looks great and functions well on devices of all sizes. Media queries and flexible grid layouts are used to adjust the layout and content based on the screen size.

## Technologies Used

- **HTML5**: For structuring the content of the website.
- **TailwindCSS**: For styling the website and implementing responsive design.
- **JavaScript**: For adding interactivity and manipulating the DOM.

## Development

- Build Tailwind CSS once

```sh
pnpm run build
```

- Watch Tailwind during development

```sh
pnpm run watch
```

Preview locally using a server (ES modules require http):

```sh
# Option A (recommended): pnpm dev
pnpm install
pnpm dev
# opens http://localhost:5173

# Option B: Python built-in
python3 -m http.server 5173

# Option C: npx http-server
npx http-server -p 5173
```

## Testing

This project uses Vitest with the happy-dom environment for self-testing.

1) Install dev dependencies

```sh
pnpm add -D vitest happy-dom
```

2) Run tests once

```sh
pnpm test
```

3) Run tests in watch mode

```sh
pnpm run test:watch
```

## Architecture Notes

- UI rendering is data-driven via small, reusable modules in `js/`:
  - `js/data.js` centralizes nav items, creations, and social icons.
  - `js/dom-utils.js` provides tiny helpers for element creation and DOM ops.
  - `js/render.js` contains pure render functions for menus, creations, and footer.
  - `js/script.js` exposes `setupMenuToggle()` to wire the mobile menu.
  - `js/main.js` bootstraps everything on `DOMContentLoaded`.

- `index.html` now includes empty containers with IDs (e.g., `#desktop-menu`, `#creations-group-1`) that are populated at runtime to eliminate duplicated markup and improve reusability.


## Minimal Project Structure

For running the site in the browser, only these are required:

- `index.html`
- `css/style.css` (built output)
- `js/`
  - `main.js`
  - `render.js`
  - `script.js`
  - `dom-utils.js`
  - `data.js`
- `input.css` (Tailwind source)
- `tailwind.config.js`
- `package.json` (scripts, dev server)

Optional (development/testing only):

- `tests/` and `vitest.config.ts` (for `pnpm test`)
- `.gitignore`, `.gitattributes` (repo hygiene)
- `node_modules/` (installed locally via `pnpm install`, not committed)

