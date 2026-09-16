export const profile = {
  name: "Bidyut Hazra",
  handle: "strengerx",
  role: "Full-Stack Web Developer",
  tagline:
    "I build reliable web applications and backend systems — from authentication and APIs to real-time data and the interfaces that sit on top of them.",
  location: "Kolkata, India",
  email: "bidyut.hrz74@gmail.com",
  github: "https://github.com/strengerx",
  availability: "Open to new opportunities",
};

export const nav = [
  { id: "about", label: "About", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "projects", label: "Projects", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

export const about = {
  paragraphs: [
    "I'm a full-stack developer working across both ends of the stack — Node.js and PHP on the backend, React and TypeScript on the frontend. I focus on building practical products with clear architecture, reliable APIs, and interfaces that are easy to use and maintain.",
    "I'm particularly interested in the engineering decisions behind an application: authentication and authorization, data validation, database design, API security, real-time communication, and maintainability as a system grows. My recent work includes JWT-based authentication services, a rate-limited B2B API with OpenAPI documentation, and a Node.js backend with Socket.IO for real-time employee device and activity tracking.",
  ],
};

export const skills = [
  {
    group: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Laravel", "PHP", "REST APIs"],
  },
  {
    group: "Database",
    items: ["MongoDB", "Mongoose", "MySQL", "SQLite"],
  },
  {
    group: "Tools & Engineering",
    items: [
      "Git",
      "JWT",
      "Zod",
      "Socket.IO",
      "Swagger / OpenAPI",
      "Vitest / Jest",
      "Docker",
    ],
  },
];

export const experience = [
  {
    period: "Current",
    role: "Full-Stack Web Developer",
    description:
      "Building and maintaining web applications across React, Node.js and PHP, with a focus on APIs, authentication, databases, and production-ready frontend interfaces.",
  },
];

export const projects = [
  {
    number: "01",
    name: "B2B MTO",
    category: "Backend / API",
    description:
      "A production-oriented Node.js backend for a B2B ordering platform, structured around authentication, brands, categories, products and users. The codebase uses layered modules, shared error handling, JWT access and refresh tokens, Zod validation, API documentation, security middleware, and automated tests.",
    highlights: [
      "JWT auth with refresh-token rotation",
      "Zod request validation",
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
      "A standalone authentication service designed to integrate with Node.js applications. It provides registration, login, access and refresh tokens, bcrypt password hashing, Zod validation, layered service architecture, centralized error handling, and automated testing.",
    highlights: [
      "JWT access + refresh token flow",
      "bcrypt password hashing",
      "Controller / service / repository layering",
      "Zod validation and rate limiting",
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
      "A Node.js/Express system for employee, device and activity tracking. Separate modules handle employees, departments, devices and activity data, while Socket.IO delivers real-time status and activity updates to connected clients.",
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
      "A Manifest V3 Chrome extension that tracks time spent on distracting websites and escalates from mild to harsh roasts when configured thresholds are crossed. It uses a background service worker, content-script overlays, browser notifications, configurable rules, and local browser storage.",
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
  body: "I'm open to full-stack roles and freelance work. If you're building a product, API, dashboard, or developer-focused tool, let's talk.",
};
