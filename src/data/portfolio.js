export const profile = {
  name: "Bidyut Hazra",
  handle: "strengerx",
  role: "Full-Stack Web Developer",
  tagline:
    "I build backend systems and the interfaces that sit on top of them — authentication, APIs, real-time data — using Node.js, React and PHP.",
  location: "Kolkata, India",
  email: "bidyut.hrz74@gmail.com",
  github: "https://github.com/strengerx",
  availability: "Open to new opportunities",
};

export const nav = [
  { id: "about", label: "About", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "projects", label: "Projects", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
];

export const about = {
  paragraphs: [
    "I'm a full-stack developer working across both ends of the stack — Node.js and PHP on the backend, React and TypeScript on the frontend. Most of what I build starts with a real, working system rather than a static layout: authentication flows, validated APIs, database schemas, and the admin interfaces that sit on top of them.",
    "I'm particularly interested in the engineering decisions behind an application — how auth and sessions are handled, how data is validated and modeled, how a service stays maintainable as it grows — rather than just how a page looks. Recent work includes JWT-based auth services, a rate-limited B2B API with OpenAPI docs, and a Node.js backend with Socket.IO for real-time device and activity tracking.",
  ],
};

export const skills = [
  {
    group: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Laravel", "PHP"],
  },
  {
    group: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    group: "Tools & Engineering",
    items: [
      "Git",
      "REST APIs",
      "JWT",
      "Zod",
      "Socket.IO",
      "Swagger / OpenAPI",
      "Vitest / Jest",
    ],
  },
];

export const projects = [
  {
    number: "01",
    name: "B2B MTO",
    category: "Backend / API",
    description:
      "A production-oriented Node.js backend for a B2B ordering platform, structured around auth, brands, categories, products and users modules. Each module is layered into controller, service, schema and model, sitting on a shared error-handling and response layer. Access is JWT-authenticated with refresh tokens, requests are validated with Zod, and the API is documented with Swagger/OpenAPI and covered by a Vitest and Supertest test suite.",
    highlights: [
      "JWT auth with refresh-token rotation",
      "Zod request validation on every route",
      "Helmet, CORS and rate limiting",
      "Swagger/OpenAPI documentation",
      "Vitest + Supertest test suite",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Zod", "Helmet", "Swagger"],
    github: "https://github.com/strengerx/b2b-mto",
    demo: null,
  },
  {
    number: "02",
    name: "sAuth",
    category: "Backend / Auth Service",
    description:
      "A standalone authentication service built to be dropped into other Node.js projects. Handles registration, login and JWT access/refresh tokens with bcrypt password hashing, following the same controller → service → repository split as the larger backends. Passwords and request bodies are validated with Zod, errors flow through a shared error-handling layer, and the service ships with its own test runner.",
    highlights: [
      "JWT access + refresh token flow",
      "bcrypt password hashing",
      "Controller / service / repository layering",
      "Zod validation, rate limiting middleware",
      "Custom test runner",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "Zod"],
    github: "https://github.com/strengerx/sAuth",
    demo: null,
  },
  {
    number: "03",
    name: "Employee Management System",
    category: "Backend / Real-Time",
    description:
      "A Node.js/Express API for tracking employee devices and activity across departments. Separate modules handle employees, departments, devices, activity logs and events, all behind JWT-authenticated routes with Zod validation. Socket.IO pushes device and activity updates to connected clients in real time, which this API pairs with, so status changes don't rely on polling.",
    highlights: [
      "Real-time updates via Socket.IO",
      "Employee, department, device and activity modules",
      "JWT-authenticated routes",
      "Zod-validated request schemas",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Zod", "Socket.IO", "Helmet"],
    github: "https://github.com/strengerx/ems-server",
    demo: null,
  },
  {
    number: "04",
    name: "Procrastinator's Roastmaster",
    category: "Browser Extension",
    description:
      "A Manifest V3 Chrome extension that tracks time spent on distracting sites — YouTube, Twitter, Reddit, Netflix and others — and escalates from mild to harsh \"roasts\" once you cross your own thresholds. A background service worker tracks time per site, content scripts handle on-page overlays, and a popup shows daily stats. Thresholds, monitored sites and notification behaviour are all configurable, with data kept local to the browser.",
    highlights: [
      "Manifest V3 service worker + content scripts",
      "Configurable thresholds and monitored sites",
      "Browser notifications and on-page overlays",
      "Local-only storage with data export",
    ],
    tech: ["JavaScript", "Chrome Extension APIs", "Manifest V3"],
    github: "https://github.com/strengerx/procrastinators-roastmaster",
    demo: null,
    installNote: "Unpacked extension — load locally via chrome://extensions",
  },
];

export const contact = {
  heading: "Have something worth building?",
  body: "I'm open to full-stack roles and freelance work — reach out by email or take a look at what I've been building on GitHub.",
};
