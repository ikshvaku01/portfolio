# Yash Singh Bajetha — Portfolio

A minimal, fast, dock-style personal portfolio built with React 19, TypeScript, and Tailwind CSS v4. Inspired by macOS-style navigation, it presents experience, projects, and skills through a clean single-page interface with light/dark theming.

**[Live Site →](https://portfolio.ikshvaku01.workers.dev)**

![License](https://img.shields.io/badge/license-MIT-black)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

---

## ✨ Features

- **Dock-based navigation** — a macOS-inspired dock at the bottom for jumping between sections (Experience, Projects, Skills, Profiles) and external links (GitHub, LinkedIn, Resume, Email)
- **Light / dark theme** — persisted to `localStorage`, respects system preference on first visit
- **Smooth view transitions** — lightweight CSS keyframe animations, no animation library overhead
- **Fully responsive** — mobile-first layout that scales cleanly up to desktop
- **SEO-ready** — Open Graph tags, `robots.txt`, `sitemap.xml` (via `vite-plugin-sitemap`), and an `llms.txt` for LLM-based discovery
- **React Compiler enabled** — automatic memoization via Babel's React Compiler plugin, no manual `useMemo`/`useCallback` needed

## 🛠 Tech Stack

| Category         | Tools                                            |
|-------------------|---------------------------------------------------|
| Framework         | React 19, TypeScript 7                            |
| Build tool        | Vite 8 (with Rolldown), `@vitejs/plugin-react`     |
| Styling           | Tailwind CSS v4, `tailwind-merge`, `clsx`          |
| CSS processing    | Lightning CSS                                     |
| Compiler          | Babel React Compiler (`babel-plugin-react-compiler`) |
| Linting/Formatting| Biome, Oxlint (with type-aware rules)              |
| SEO               | `vite-plugin-sitemap`                              |
