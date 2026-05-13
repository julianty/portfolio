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

---

## SEO & Crawlability Roadmap

**Goal:** Make the portfolio readable by web crawlers, ATS systems, and AI indexers that cannot execute JavaScript.

### Assessment (current state)

| Concern | Finding |
|---|---|
| Build tool | Vite 5 + `@vitejs/plugin-react-swc`. No SSG plugin configured. |
| HTML at build time | Single `index.html` shell with `<div id="root"></div>`. No content without JS. |
| Routing | React Router v7 `BrowserRouter` — 5 hardcoded client-side routes. GitHub Pages serves `index.html` for every path (404 → index.html redirect). |
| Meta tags | `<title>Portfolio \| Alexander Julian Ty</title>` only. No `<meta name="description">`, no canonical. |
| Open Graph / Twitter | None. |
| Structured data | None. |
| sitemap.xml | Not present. |
| robots.txt | Not present. |
| `<noscript>` | Not present in `index.html`. |
| Rich data source | `src/project-data.tsx` — all project content is already typed and centralized, good SSG input. |

---

### 1. Static Pre-rendering (SSG)

**Current state:** Vite emits one `index.html` with an empty root div. Crawlers and JS-disabled clients see a blank page.

**Recommended approach:** Add [`vite-plugin-ssg`](https://github.com/antfu/vite-ssg) (Anthony Fu's maintained plugin, ~2 kB overhead, no framework migration needed).

The plugin walks a route list you provide, renders each route to a static HTML file at build time, then hydrates in the browser. The route list maps directly to the 5 routes already in `app.tsx`:

```ts
// vite.config.ts addition
import { ViteSSG } from 'vite-ssg'
// routes fed from the same projectData array
const routes = ['/', '/projects/CorporeSano', '/projects/juliantyart', ...]
```

The main entry point switches from `ReactDOM.createRoot` to `ViteSSG`'s exported `createApp`. Output: `dist/index.html`, `dist/projects/CorporeSano/index.html`, etc. — each with real crawlable text.

**Alternatives considered:**
- `react-snap` — runs a headless Chromium after build; works without touching app code but is slower, heavier (~200 MB Chromium), and less maintained.
- Migrating to Vite + `vite-plugin-ssr` / Vinxi / Astro — full framework switch, high overhead for a 5-page static site.

**Complexity:** Medium. Requires refactoring `main.tsx` entry point and confirming `ThemeProvider` / `BrowserRouter` hydration behaves correctly after SSR. The `localStorage` read in `ThemeProvider` will need a guard for the server context (no `window`).

**Tradeoffs:**
- `BrowserRouter` must be swapped for `StaticRouter` during SSG render; `vite-plugin-ssg` handles this automatically.
- The Cloudflare Worker chatbox calls `window.*` at runtime — those will need `typeof window !== 'undefined'` guards to avoid SSG crashes.
- GitHub Pages SPA redirect trick (404 → index.html) still needed for direct navigation, but pre-rendered routes will also have their own real `index.html` files, so the redirect becomes a fallback rather than the primary path.

---

### 2. Per-page Meta Tags

**Current state:** One static `<title>` in `index.html`. No `<meta name="description">`. No canonical URL. All 5 pages share the same head.

**Recommended approach:** [`react-helmet-async`](https://github.com/staylor/react-helmet-async). It works with SSG (the sync `react-helmet` does not flush correctly during SSR) and is the standard for Vite SSG setups.

Wrap the app in `<HelmetProvider>`. Then in each page component:

```tsx
// home-page.tsx
<Helmet>
  <title>Alexander Julian Ty — Full-Stack Developer</title>
  <meta name="description" content="Portfolio of Alexander Julian Ty, a full-stack developer specializing in React, TypeScript, Next.js, and cloud infrastructure." />
  <link rel="canonical" href="https://alexanderjulianty.com/" />
</Helmet>
```

```tsx
// project-page.tsx — driven by projectData
<Helmet>
  <title>{project.title} — Alexander Julian Ty</title>
  <meta name="description" content={project.description} />
  <link rel="canonical" href={`https://alexanderjulianty.com/projects/${project.pageLink}`} />
</Helmet>
```

**Complexity:** Low. Additive change; no existing code broken.

**Tradeoffs:** `react-helmet-async` is well-maintained but adds ~5 kB to the bundle. Alternative: Vite's `vite-plugin-ssg` exposes a `head` option per route that can inject static tags at build time without a runtime library — viable for the home page and project pages since all metadata is known statically.

---

### 3. Open Graph + Twitter Cards

**Current state:** None. Sharing `alexanderjulianty.com` on LinkedIn, Slack, or iMessage produces no preview card.

**Recommended approach:** Add OG tags inside the same `<Helmet>` blocks from step 2. Per-page OG images are optional (and expensive to generate); using the project highlight images already imported in `project-data.tsx` as `og:image` is the zero-effort path.

Minimum viable tags for the home page:

```tsx
<meta property="og:type" content="website" />
<meta property="og:url" content="https://alexanderjulianty.com/" />
<meta property="og:title" content="Alexander Julian Ty — Full-Stack Developer" />
<meta property="og:description" content="Portfolio of Alexander Julian Ty..." />
<meta property="og:image" content="https://alexanderjulianty.com/og-card.png" />
<meta name="twitter:card" content="summary_large_image" />
```

For project pages, `og:image` can point to the project's highlight image (already in `project-data.tsx`).

**Note:** OG image URLs must be absolute. Vite-imported image assets get hashed filenames at build time. The safest approach is to place a static `og-card.png` and project card images in `public/` so their URLs are predictable (`/og-card.png`).

**Complexity:** Low, once step 2 is done.

**Tradeoffs:** Without a dynamic OG image service, you'll need a hand-crafted static image for the home page. Project images already exist in assets but are hashed — moving them to `public/` or generating absolute URLs at SSG time is needed.

---

### 4. Structured Data (JSON-LD)

**Current state:** None. Search engines and AI crawlers cannot extract structured facts about you.

**Recommended approach:** Inject a `Person` schema JSON-LD block into the home page `<head>`. This tells Google (and AI indexers) your name, job title, skills, and canonical links — the same data already in `messageContext.ts` and `experience.ts`.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alexander Julian Ty",
  "jobTitle": "Full-Stack Developer",
  "url": "https://alexanderjulianty.com",
  "sameAs": [
    "https://github.com/julianty",
    "https://linkedin.com/in/..."
  ],
  "knowsAbout": ["React", "TypeScript", "Next.js", "Node.js", "AWS", "PostgreSQL"]
}
</script>
```

Inject via `<Helmet>`:

```tsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify(personSchema)}
  </script>
</Helmet>
```

For project pages, a `SoftwareApplication` or `CreativeWork` schema would additionally describe each project.

**Complexity:** Low. Pure data addition; no rendering changes.

**Tradeoffs:** Schema.org validation is free via Google's Rich Results Test, but portfolio sites rarely earn rich result treatment — the main benefit here is AI crawler comprehension and LinkedIn/ATS machine-reading, not visual Google enhancements.

---

### 5. sitemap.xml + robots.txt

**Current state:** Neither file exists. Crawlers have no hint about which URLs exist or whether to index the site.

**Recommended approach:**

**`robots.txt`** — Static file, place in `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://alexanderjulianty.com/sitemap.xml
```

**`sitemap.xml`** — Generate at build time from the `projectData` array using a small Vite plugin or a `postbuild` script. The site has 5 known URLs; a build-time script is simpler than a plugin:

```ts
// scripts/generate-sitemap.ts
import { projectData } from '../src/project-data'
const urls = ['/', ...projectData.map(p => `/projects/${p.pageLink}`)]
// write dist/sitemap.xml
```

Add to `package.json`:
```json
"postbuild": "tsx scripts/generate-sitemap.ts"
```

**Complexity:** Low.

**Tradeoffs:** The sitemap must be regenerated on every deploy (already ensured by `postbuild`). If projects are added to `projectData`, the sitemap updates automatically — no manual maintenance. Submit the sitemap URL to Google Search Console after deploying.

---

### 6. Fallback Static HTML (`<noscript>` + shell content)

**Current state:** `index.html` body is `<div id="root"></div>` with no fallback. JS-disabled clients and certain crawlers see nothing.

**Recommended approach:** Two layers:

**Layer 1 — `<noscript>` tag** in `index.html` with a minimal text summary:

```html
<noscript>
  <h1>Alexander Julian Ty — Full-Stack Developer</h1>
  <p>Full-stack developer with experience in React, TypeScript, Next.js, and cloud infrastructure (AWS Certified Cloud Practitioner).</p>
  <p>Projects: Corpore Sano, juliantyart, Job Pulse, What's for Dinner.</p>
  <p>Contact: alexanderjulianty@gmail.com</p>
</noscript>
```

**Layer 2 — SSG (step 1)** is the real solution. Once pre-rendered HTML is emitted per route, the `<noscript>` becomes a minor belt-and-suspenders addition rather than the primary fallback.

**Complexity:** Low (noscript alone) / Medium (depends on SSG completion).

**Tradeoffs:** `<noscript>` content is not indexed separately by Google — it is treated as supplemental. The SSG output is what actually matters for crawlability. Don't treat `<noscript>` as a substitute for SSG.

---

### Implementation Order

| Priority | Item | Complexity | Unblocks |
|---|---|---|---|
| 1 | SSG (`vite-plugin-ssg`) | Medium | Everything — crawlers need real HTML first |
| 2 | Meta tags (`react-helmet-async`) | Low | OG tags, canonical |
| 3 | Open Graph + Twitter cards | Low | Link previews |
| 4 | robots.txt | Low | Crawler guidance |
| 5 | sitemap.xml (build script) | Low | Google Search Console submission |
| 6 | JSON-LD structured data | Low | AI/ATS comprehension |
| 7 | `<noscript>` fallback | Low | Belt-and-suspenders |
