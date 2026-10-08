# Mashhad Estate

A responsive real estate landing page built with HTML, CSS and vanilla JavaScript. This frontend portfolio demo explores property search, reusable listing cards and accessible property previews through a cream and dark-purple design.

**Live Demo:** _Coming soon — add the deployed website URL here._

## Features

- Six sample property listings rendered from a JavaScript array.
- Combined filters for sale/rent, neighborhood and property type.
- Search form with keyboard submission, result counts and an empty-results message.
- Property details dialog with Escape/backdrop dismissal and keyboard focus management.
- Scroll-triggered statistics animation with reduced-motion support.
- Responsive layouts for mobile, tablet and desktop.
- Responsive WebP hero images, lazy-loaded below-the-fold images and locally hosted Inter typography.
- Semantic HTML, labeled form controls, visible focus states and live search-result announcements.

## Technologies

- HTML5
- CSS3: custom properties, Grid, Flexbox and media queries
- Vanilla JavaScript: array methods, DOM rendering, event delegation, IntersectionObserver and requestAnimationFrame
- Inline Lucide SVG icons
- Inter font, distributed with its SIL Open Font License

No framework, package installation or build step is required to run the site.

## Run locally

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Use the Live Server extension to serve `index.html` and open its local URL.

Alternatively, serve this directory with any static HTTP server. If Python is already installed:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Project structure

```text
mashhad-estate/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   ├── favicon.svg
│   ├── fonts/
│   │   ├── inter-latin.woff2
│   │   └── OFL.txt
│   └── images/
│       └── *.webp
├── .gitignore
└── README.md
```

## Demo data and scope

All property listings, prices and business statistics are illustrative. They are not verified advertisements or claims about a real estate business. This demo does not accept enquiries, collect personal information or connect to a backend. The Contact action navigates to the demo contact section.

JavaScript is required for property cards, filtering and dialogs. A notice explains this when JavaScript is disabled.

## GitHub Pages compatibility

The site is static and uses relative paths for styles, scripts, fonts and images, so it supports a repository subdirectory such as `https://USERNAME.github.io/REPOSITORY/`. Publish the directory containing `index.html` as the site root. There is no client-side router or server-side dependency.

Update the Live Demo placeholder after deployment.

## Assets and local backups

The published site uses WebP images. Original PNG files and development backups are retained locally and excluded through `.gitignore`; they are not needed to run the site.

The Inter font license is included at `assets/fonts/OFL.txt`. Font licensing does not grant a license to the rest of the project or its imagery.
