# TPA Frontend (Angular)

This is the frontend for the TPA project, built with Angular. It implements a landing page (hero, product exploration, cards grid, FAQ), a dynamic content page driven by the WordPress REST API, and a shared header/footer with a hoverable navigation submenu.

This document explains the project itself, why Angular was chosen, and how the codebase is organized so newcomers can navigate it quickly.

---

## Why Angular?

Pros

- Batteries included: routing, DI, forms, HTTP, and build tooling in one framework.
- Standalone components and Signals: modern, ergonomic component model (Angular 16+).
- TypeScript-first: strong typing and template checks by the compiler.
- CLI and AOT: fast dev experience and optimized, consistent production builds.

Trade‑offs

- Template/DI concepts and RxJS can have a learning curve for newcomers.
- Slightly larger baseline than micro-libraries; favors convention over minimalism.

---

## Features Implemented

- Landing page with sections: header, explore product, cards grid, FAQ.
- Dynamic page rendering entries from the WordPress REST API.
- Header submenu on hover with example links per top-level item.
- Responsive layout (Flexbox/Grid) and SCSS theming variables.
- Accessible markup where practical (roles for menus, buttons, etc.).
- Unit tests for key components and behaviors.

---

## Getting Started

Requirements: Node.js (LTS) and Angular CLI installed globally.

```bash
# Clone
git clone https://github.com/Richugan/tpa-front.git
cd tpa-front

# Install deps
npm install

# Start dev server
npm start
# then open http://localhost:4200/
```

Build for production

```bash
npm run build
# Output in dist/ folder
```

Run unit tests

```bash
npm test
```

Optional E2E (suggested): Playwright works well here. If needed, we can add a ready-to-run Playwright setup with tests for the header submenu, cards navigation, and FAQ toggling.

---

## Project Structure

- `public/`: static assets served as-is.
- `src/`: application source.
- `src/app/`: Angular app root.
  - `app.ts`, `app.html`, `app.scss`: root component shell.
  - `app.config.ts`, `app.routes.ts`: app configuration and routes.
  - `data/`: services and models (e.g., `wp.service.ts`, `page-cards.service.ts`, interfaces like `rendered-wp-post.ts`).
  - `environments/`: environment configuration (e.g., API URLs for dev/prod).
  - `view/`: all UI components grouped by feature (landing page, dynamic page, shared parts like header/footer).
- `styles.scss`: global styles.

Component folders typically include:

- `*.ts`: component class and metadata (selector, template, styles, inputs/outputs).
- `*.html`: template markup and Angular control flow (`@for`, `@if`, bindings).
- `*.scss`: styles scoped to that component.
- `*.spec.ts`: unit tests for that component (rendering, inputs/outputs, interactions).

---

## Notes on Responsiveness & Images

Cards and hero sections use `object-fit: cover` on images. This makes the image fill its container proportionally without distortion; any overflow is cropped. The result is consistent card layouts even when source images have different aspect ratios.

---

## Assumptions

- Runs with Node.js LTS and the latest Angular CLI.
- Modern browsers (Chrome/Edge/Firefox/Safari) for development and testing.
- The WP API endpoint is reachable and returns expected JSON.
- Theming uses SCSS variables for colors and other tokens.

---

## Next Steps

- Wire up Playwright E2E tests (submenu hover/click, card navigation, FAQ interactions).
- Connect real API endpoints where mock services are used.
- Expand accessibility testing and keyboard interactions.

