<div align="center">

# vaibhavdev.online

**Full-Stack Developer Portfolio — AI, SaaS & Web Engineering**

[![Live Site](https://img.shields.io/badge/Live-vaibhavdev.online-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://vaibhavdev.online/)
[![GitHub](https://img.shields.io/badge/GitHub-vbhvx-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vbhvx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-vaibhavsaini2-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vaibhavsaini2/)
[![X](https://img.shields.io/badge/X-@vbhvdev-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/vbhvdev)

&nbsp;

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radixui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## Overview

A personal portfolio site designed to showcase 12 production-grade full-stack projects across TypeScript, Python, and Flutter. Built with a data-driven architecture where all content is managed through centralized TypeScript files — no CMS, no database, zero overhead.

The site is optimized for recruiter readability, fast load times, and SEO — serving as the central hub that connects GitHub, LinkedIn, X, and a downloadable resume into a single professional presence.

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **Data-Driven Content** | All projects, skills, and copy managed in `src/data/` — update one file, site rebuilds |
| **Featured + Other Projects** | Two-tier project showcase with detailed descriptions, tech tags, and external links |
| **Dark / Light Mode** | System-aware theme toggle via `next-themes` with smooth transitions |
| **Smooth Animations** | Section reveals, hover effects, and page transitions powered by Framer Motion |
| **Responsive Design** | Mobile-first layout with adaptive navigation and touch-friendly interactions |
| **SEO Optimized** | Dynamic meta tags, Open Graph metadata, semantic HTML, and structured headings |
| **Vercel Analytics** | Built-in `@vercel/analytics` integration for visitor and engagement tracking |
| **Resume Download** | One-click PDF resume download from the navbar and contact section |
| **Accessible UI** | Radix UI primitives (Avatar, Tooltip, Slot) for keyboard navigation and screen readers |
| **Static Export** | Fully static output via `next build` — deployable anywhere (Vercel, GitHub Pages, Cloudflare) |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Static Export) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) primitives |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) + custom SVG icon components |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |
| **Image Optimization** | [Sharp](https://sharp.pixelplumbing.com/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── documents/          # Resume PDF and downloadable assets
│   ├── profile/            # Profile image (avatar)
│   ├── projects/           # Project thumbnail images
│   └── favicon.png         # Site favicon
├── src/
│   ├── app/                # Next.js App Router — layouts, pages, metadata
│   ├── components/
│   │   ├── icons/          # Modular SVG icon components (tech logos, social)
│   │   └── layout/         # Navbar, theme toggle, footer
│   ├── data/               # ← All site content lives here
│   │   ├── portfolio.ts    # Centralized content export (single import)
│   │   ├── projects.ts     # Featured + other projects array
│   │   ├── site.ts         # Site config, hero copy, navigation, social links
│   │   ├── skills.ts       # Grouped technical skills
│   │   └── types.ts        # Shared TypeScript interfaces
│   └── lib/                # Utility functions (cn, etc.)
├── .github/                # GitHub Actions workflow (Pages deployment)
├── .env.example            # Environment variable template
├── tailwind.config.ts      # Extended Tailwind theme
├── next.config.mjs         # Next.js configuration
└── package.json            # Scripts, dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 8 (recommended) — `npm install -g pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/vbhvx/Portfolio.git
cd Portfolio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

### Type Checking & Linting

```bash
pnpm typecheck    # TypeScript type validation
pnpm lint         # ESLint
```

---

## 📝 Content Management

All portfolio content is centralized in `src/data/` — no CMS needed. Edit these files and the site rebuilds automatically:

### `site.ts` — Global Configuration

| Export | What It Controls |
|--------|-----------------|
| `siteConfig` | Name, email, location, avatar, resume URL, meta description |
| `socialLinks` | GitHub, LinkedIn, X, email hrefs |
| `navigation` | Navbar links and anchor targets |
| `heroContent` | Hero section copy (title, subtitle, summary, CTA) |
| `aboutContent` | About section paragraphs and focus description |
| `proofContent` | "How I Build" section — engineering standards with links |
| `contactContent` | Contact section heading, description, action links |

### `projects.ts` — Project Showcase

Each project entry contains:

```typescript
{
  slug: string;           // URL-safe identifier
  name: string;           // Display name
  tagline: string;        // One-line description
  year: string;           // Year built
  description: string;    // Short description (card view)
  longDescription: string; // Expanded description (detail view)
  technologies: string[]; // Tech stack tags
  outcomes: string[];     // Key achievements / bullet points
  image: string;          // Thumbnail path
  links: ActionLink[];    // GitHub, live demo, etc.
}
```

Projects are split into two arrays:
- **`featuredProjects`** — Top 3 showcased prominently (Buildra, Orbit, StackAudit)
- **`otherProjects`** — Supporting projects in a compact grid

### `skills.ts` — Technical Skills

Skills are organized by category (Languages, Frontend, Backend, Databases, Tools) with icon mappings.

---

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vbhvx/Portfolio)

Push to `main` and Vercel handles the rest. No additional configuration needed.

### GitHub Pages

1. Set `NEXT_PUBLIC_BASE_PATH` in `.env` to your repo name:
   ```bash
   NEXT_PUBLIC_BASE_PATH=/Portfolio
   ```
2. The included `.github/workflows/` action builds and deploys the static export automatically on push.

### Other Platforms (Netlify, Cloudflare Pages)

The site exports as fully static HTML — compatible with any static hosting provider. Run `pnpm build` and deploy the `out/` directory.

---

## ⚙️ Environment Variables

| Variable | Required | Default | Description |
|----------|:--------:|---------|-------------|
| `NEXT_PUBLIC_BASE_PATH` | No | `""` | Set to `"/repo-name"` for GitHub Pages subpath deployment. Leave empty for root domain or Vercel. |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 

</div>
