# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Type-check (tsc -b) then bundle
npm run lint       # ESLint (flat config, v9)
npm run preview    # Preview the production build locally
npm run test       # Run Jest tests
npm run deploy     # Build + push to gh-pages (custom domain: alexanderjulianty.com)
```

## Architecture

Single-page React 18 + TypeScript + Vite app deployed to GitHub Pages. React Router v7 handles two route patterns:
- `/` — `HomePage`, which stacks all portfolio sections vertically
- `/projects/:projectName` — `ProjectPage`, driven by the data in `src/project-data.tsx`

All project content (title, description, tech stack, features, links) lives in `src/project-data.tsx` as a typed array. `ProjectPage` looks up the matching entry by slug (`projectName` URL param) and renders it. Adding or editing a project means only touching that file.

## Styling

Tailwind CSS v4 via PostCSS (`@tailwindcss/postcss`). Design tokens (colors, typography scale, fonts) are defined as CSS custom properties in `src/index.css` and wired into Tailwind's theme. The `cn()` helper (`src/lib/utils.ts`) wraps `clsx` + `tailwind-merge` — always use it when conditionally composing class names.

UI primitives come from shadcn/ui (New York style, Zinc base) in `src/components/ui/`. These are owned source files, not node_modules — edit them directly.

Fonts: Sora (display/headings), Manrope (body), IBM Plex Mono (code).

## Chatbot Feature

The AI chatbox in `HeroSection` sends messages to a Cloudflare Worker at `https://curly-rain-484c.alexanderjulianty.workers.dev/`. The call is in `src/lib/workers.ts`. Context injected into the system prompt is defined in `src/components/home/chatbox/messageContext.ts`.

## Theme

`ThemeProvider` (Context API, `src/components/theme-provider.tsx`) stores the user's light/dark preference in `localStorage` and applies a `dark` class to the root element. CSS variables in `index.css` handle the actual color switching.

## Path Aliases

`@/` resolves to `src/`. Configured in both `tsconfig.app.json` and `vite.config.ts`, and mapped in `jest.config.mjs` for tests.

## Testing

Only `src/lib/workers.spec.ts` exists so far. Tests run with Jest + ts-jest in a Node environment (`npm run test`).
