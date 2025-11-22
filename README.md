# Serge Studios Portfolio - React Version

A modern, animated portfolio website built with React and Vite, featuring smooth scroll animations, parallax effects, and interactive components.

## Features

- ⚛️ Built with React 18
- 🚀 Vite for fast development and building
- 🎨 Smooth scroll animations and transitions
- 📱 Fully responsive design
- 🎯 Interactive components with React hooks
- ✨ Parallax effects and scroll-triggered animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Awards.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useScrollAnimations.js
│   │   ├── useNavbarScroll.js
│   │   ├── useSmoothScroll.js
│   │   ├── useScrollProgress.js
│   │   └── useParallax.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── styles.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- React 18.2.0
- Vite 5.0.8
- CSS3 with animations
- Intersection Observer API

## Components

### Navbar
Fixed navigation bar with mobile hamburger menu

### Hero
Animated hero section with parallax effect

### About
About section with text reveal animations

### Testimonials
Client testimonials with scroll-triggered animations

### Portfolio
Portfolio grid with 3D hover effects

### Awards
Awards showcase section

### Pricing
Pricing tiers for different services

### FAQ
Accordion-style FAQ section

### Contact
Call-to-action section

### Footer
Site footer with navigation links

## Custom Hooks

- `useScrollAnimations` - Handles scroll-triggered animations
- `useNavbarScroll` - Navbar background effects on scroll
- `useSmoothScroll` - Smooth scrolling for anchor links
- `useScrollProgress` - Scroll progress indicator
- `useParallax` - Parallax effect for hero section

## License

This project is a clone/implementation of the Serge Studios website.

