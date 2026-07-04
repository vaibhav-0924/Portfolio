# Vaibhav Saini Portfolio

Professional portfolio site for Vaibhav Saini, focused on internship-ready full-stack positioning, featured project storytelling, and clean content maintenance.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Project Structure

```text
portfolio/
├── public/
│   ├── documents/       # Resume and downloadable assets
│   ├── profile/         # Profile image assets
│   ├── projects/        # Project thumbnails
│   └── favicon.png      # Custom generated favicon
├── src/
│   ├── app/             # App Router, Layouts, Pages
│   ├── components/      # UI components and layout
│   │   ├── icons/       # Modular SVG icon components
│   │   └── layout/      # Navbar, theme toggles, etc
│   ├── data/            # Site configuration and content
│   │   ├── portfolio.ts # Centralized content export
│   │   ├── projects.ts  # Featured projects data
│   │   ├── site.ts      # Site metadata and hero content
│   │   └── skills.ts    # Grouped skills configuration
│   └── lib/             # Shared utilities
├── .github/             # GitHub Pages deployment workflow
├── .env.example         # Environment variable template
└── package.json         # Scripts and dependencies
```

## Local Development

```bash
pnpm install
pnpm dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Content Updates

Portfolio content is centrally managed in the `src/data/` directory:

- `site.ts`: Site metadata, hero copy, nav links, and contact info
- `projects.ts`: Featured projects array
- `skills.ts`: Technical skills grouping
- `portfolio.ts`: The aggregated export used across the app

## Environment Setup

The application uses environment variables for routing configuration. A `.env` file has been created for you.

To set up your environment:

1. Duplicate `.env.example` and rename it to `.env` (or just use the created `.env` file).
2. The only variable used is `NEXT_PUBLIC_BASE_PATH`:

```bash
# Leave empty for local development or custom domains
# Set to "/your-repo-name" if deploying to GitHub Pages without a custom domain
NEXT_PUBLIC_BASE_PATH=
```
