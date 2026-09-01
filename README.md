# Bidyut Hazra — Portfolio

Personal developer portfolio for Bidyut Hazra, a full-stack web developer. Built with React and Vite, showcasing real projects pulled from [github.com/strengerx](https://github.com/strengerx).

## Tech stack

- **React 19** + **Vite** — build tooling and component runtime
- **Framer Motion** — the hero's entrance sequence and the mobile menu's open/close animation
- **Lucide React** — icons
- Plain modern CSS (custom properties, no framework/utility layer)

## Project structure

```
src/
├── components/       # One component + matching .css file per section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolio.js  # All copy and project data lives here — nothing is
│                      # hardcoded into JSX, so updating a project or skill
│                      # means editing this one file
├── styles/
│   └── index.css      # Design tokens (colors, type, spacing) + global resets
├── App.jsx
└── main.jsx
```

## Development

```bash
npm install
npm run dev       # starts the Vite dev server
```

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally to sanity-check it
```

## Linting

```bash
npm run lint        # oxlint
```

## Deployment

`dist/` is a static site — deploy it as-is to Vercel, Netlify, GitHub Pages, or any static host. No environment variables or server are required.

## Content still to fill in

The data file (`src/data/portfolio.js`) intentionally omits anything that couldn't be verified from the source repos:

- **Live demo links** — none of the four projects has a verified deployment yet. Each project card currently reads "Live demo coming soon" (or, for the browser extension, a note about loading it unpacked). Add a `demo: "https://..."` value to a project in `portfolio.js` once one is deployed.
- **LinkedIn / other social links** — not included, since no URL was provided or could be verified. Add a link in the `profile` object and surface it in `Hero.jsx` / `Footer.jsx` if you'd like one.
- **Project descriptions** — written from what's actually in each repo (package.json, module structure, README where available). Worth a proofread against your own understanding of each project, especially the intent behind `procrastinators-roastmaster` and `ems-server`.
