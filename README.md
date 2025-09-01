# Angular Project

A modern web application built with [Angular](https://angular.io/).  
This project follows Angular best practices, featuring modular structure, reusable components, and responsive design.

---

## 🚀 Features

- Angular 20+ with TypeScript
- Modular architecture
- Routing and lazy loading
- Reusable components and services
- State management (RxJS/Signals)
- SCSS for styling
- API integration with HttpClient
- Responsive layout with Flexbox/Grid

---

## 📦 Installation

Make sure you have **Node.js (LTS)** and **Angular CLI** installed globally.

```bash
# Clone the repository
git clone https://github.com/Richugan/tpa-front.git
cd tpa-front

# Install dependencies
npm install
```

## ▶️ Running the Application

```bash
# Start development server
ng serve

# Open in browser
http://localhost:4200/
```

- Landing Page
- Dynamic Page with posts from WP getted by REST API

## 🧪 Running Tests

```bash
# Unit tests
ng test
```

- I wrote a few unit tests to validate core interactions. FAQ items expand/collapse on toggle, and product tabs update their content when clicked. These tests keep our UI reliable and give confidence as the project grows.

## 🏗️ Build for Production

```bash
ng build --configuration production
```

- The output will be in the dist/ folder.

## 🧾 Assumptions & Extra Features

Assumptions

- Some block are missed due it's just static information, I was focused more on various functionalities to show all the possibilities

- The project will be run with Node.js LTS and the latest Angular CLI installed globally.

- A modern browser environment (Chrome/Edge/Firefox/Safari) is assumed for running and testing the app.

- API endpoints are available and return data in the expected JSON format.

- The design system uses SCSS variables for theming (colors, spacing, typography).

Extra Features

- Responsive image handling using object-fit: cover for consistent scaling inside cards.

- Dynamic card layout with aspect-ratio instead of fixed height for more flexible design.

- Range helper for easily looping numbers (0..n) in Angular templates.

- Lazy loading of images (loading="lazy") to improve performance.

- Skeleton render for loading states: implemented lightweight skeleton components for cards and images to indicate loading while data is being fetched.

- Box-shadow and hover effects for improved UI interactivity.

- Reusable architecture with services, models, and components for maintainability and scalability.
