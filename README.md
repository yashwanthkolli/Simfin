# SimFin -- Finance & Accounting Firm Website

A modern, high-performance, fully responsive website built for a finance
and accounting firm using React + Vite.

This project focuses on: - Clean architecture - Accessibility - SEO
optimization - Performance optimization - Production-grade animations -
Strict Content Security Policy - Responsive design across all devices

------------------------------------------------------------------------

## Tech Stack

-   React 18
-   Vite
-   SCSS (Modular Architecture)
-   GSAP (Animations)
-   React Router
-   Lucide Icons
-   Netlify (Deployment)

------------------------------------------------------------------------

## Project Structure

simfin/ │ ├── public/ │ ├── images/ │ ├── icons/ │ ├── sitemap.xml │ ├──
robots.txt │ ├── src/ │ ├── animations/ │ ├── components/ │ ├── context/
│ ├── pages/ │ ├── styles/ │ ├── App.jsx │ ├── main.jsx │ ├──
netlify.toml ├── vite.config.js ├── package.json └── README.md

------------------------------------------------------------------------

## Key Features

### Design & UX

-   Fully responsive (mobile → 4K screens)
-   Modern glassmorphism UI
-   Dialog-based resource viewer
-   Accessible forms
-   Smooth scrolling behavior

### Animation System

-   GSAP-powered animations
-   Scroll-triggered reveal system
-   Parallax landing section
-   Reduced motion support
-   Animation stability across route changes

### Accessibility

-   Semantic HTML
-   Proper ARIA attributes
-   Focus states
-   Keyboard navigation
-   Screen-reader friendly structure

### SEO Optimization

-   Page-level meta tags
-   Open Graph tags
-   Canonical URLs
-   Sitemap.xml
-   Robots.txt
-   Structured data support

------------------------------------------------------------------------

## Installation

Clone repository:

git clone `<repo-url>`{=html} cd simfin

Install dependencies:

npm install

------------------------------------------------------------------------

## Development

npm run dev

------------------------------------------------------------------------

## Production Build

npm run build

Preview locally:

npm run preview

------------------------------------------------------------------------

## Deployment (Netlify)

Recommended (Git-based deployment):

1.  Push project to GitHub.
2.  Connect repository in Netlify.
3.  Set:
    -   Build command: npm run build
    -   Publish directory: dist

Netlify reads netlify.toml automatically.

------------------------------------------------------------------------

## Performance Optimizations

-   Code splitting
-   Asset compression
-   Optimized images
-   Lazy loading
-   Minified build

------------------------------------------------------------------------

## Future Improvements

-   Form backend integration
-   Analytics integration
-   CMS integration
-   Multi-language support

------------------------------------------------------------------------

## License

Private project -- All rights reserved.
