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
| HTML at build time | ✅ Pre-rendered — `entry-server.tsx` + `scripts/prerender.js` emit a real `index.html` per route. |
| Routing | React Router v7 `BrowserRouter` — 5 hardcoded client-side routes. GitHub Pages serves `index.html` for every path (404 → index.html redirect). |
| Meta tags | ✅ Per-page title, description, and canonical via `react-helmet-async`. |
| Open Graph / Twitter | ✅ Text-only OG + Twitter card tags on all pages (no `og:image` yet — needs a static image in `public/`). |
| Structured data | None. |
| sitemap.xml | ✅ Generated at build time by `scripts/prerender.js`. |
| robots.txt | ✅ `public/robots.txt` — allows all, references sitemap. |
| `<noscript>` | Not present in `index.html`. |
| Rich data source | `src/project-data.tsx` — all project content is already typed and centralized, good SSG input. |

---

### 1. Static Pre-rendering (SSG) ✅

**Implementation:** Custom `src/entry-server.tsx` + `scripts/prerender.js`. The build script renders each route to a static HTML file via `renderToString` with `StaticRouter`, then injects the result into the Vite-built `index.html` template. `main.tsx` uses `hydrateRoot` to hydrate on the client.

**How it works:**
- `src/entry-server.tsx` — exports a `render(url)` function using `renderToString` + `StaticRouter`
- `scripts/prerender.js` — iterates over the routes array, calls `render()`, writes `dist/<route>/index.html`
- Adding a new route requires updating the `routes` array in `prerender.js` and adding the `<Route>` in `app.tsx`

**Output:** `dist/index.html`, `dist/projects/CorporeSano/index.html`, etc. — each with real crawlable HTML.

**Tradeoffs:**
- The Cloudflare Worker chatbox calls `window.*` at runtime — safe because those calls only fire on user interaction, not during SSR.
- GitHub Pages SPA redirect trick (404 → index.html) still needed for direct navigation to pre-rendered routes.

---

### 2. Per-page Meta Tags ✅

**Implementation:** `react-helmet-async`. `HelmetProvider` wraps the app in both `app.tsx` (client) and `entry-server.tsx` (SSR). `prerender.js` extracts the helmet state after each `render()` call and injects title, meta, and link tags into the pre-rendered HTML, replacing the original static `<title>` to avoid duplicates.

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

### 3. Open Graph + Twitter Cards ✅

**Implementation:** Text-only OG and Twitter card tags added to the `<Helmet>` blocks in `home-page.tsx` and `project-page.tsx`. No `og:image` yet — add a static image to `public/og-card.png` (and per-project images to `public/`) when ready, then reference them with absolute URLs.

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

### 5. sitemap.xml + robots.txt ✅

**Implementation:**
- `public/robots.txt` — static file, allows all crawlers, references the sitemap.
- `sitemap.xml` — generated at the end of `scripts/prerender.js` from the same `routes` array used for pre-rendering. Written to `dist/sitemap.xml` on every build. Adding a new route to `prerender.js` automatically includes it in the sitemap.

**Next step:** Submit `https://alexanderjulianty.com/sitemap.xml` to Google Search Console after deploying.

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
| 1 | ✅ SSG (custom `entry-server.tsx` + `prerender.js`) | Medium | Everything — crawlers need real HTML first |
| 2 | ✅ Meta tags (`react-helmet-async`) | Low | OG tags, canonical |
| 3 | ✅ Open Graph + Twitter cards (text-only) | Low | Link previews |
| 4 | ✅ robots.txt | Low | Crawler guidance |
| 5 | ✅ sitemap.xml (generated in `prerender.js`) | Low | Google Search Console submission |
| 6 | JSON-LD structured data | Low | AI/ATS comprehension |
| 7 | `<noscript>` fallback | Low | Belt-and-suspenders |

---

## Content Updates

Pending changes to `src/project-data.tsx` and related copy. These are data-only edits — no component or styling work needed.

### 1. Corpore Sano — rewrite description

**Current:** "A lightweight workout tracking web application" with stack listed as `["React", "Firebase"]`.

**Problem:** Understates the project. It's a cross-platform monorepo with a mobile app, not a simple web app. "Lightweight" signals limited scope to a recruiter or ATS.

**Changes needed:**
- Remove "lightweight" from `description` and `longDescription`
- Update `description` to something like: `"Cross-platform workout tracker — React web app and React Native / Expo mobile app in a shared monorepo"`
- Update `skills` and `technologies` arrays to reflect the actual stack: `["React", "React Native", "Expo", "Redux Toolkit", "TypeScript", "Firebase", "Jest"]`
- Revise `longDescription` to mention the monorepo structure, mobile app, Redux Toolkit state management, and Jest test coverage

### 2. Add birthday-ping as a new project

Add a new entry to the `projectData` array in `src/project-data.tsx`:

| Field | Value |
|---|---|
| `title` | `"birthday-ping"` |
| `description` | `"Full-stack birthday reminder app with automated email digests, Google OAuth, and calendar import/export"` |
| `technologies` | `["Next.js", "MongoDB", "Resend", "GitHub Actions"]` |
| `link.live` | `"https://birthday-ping.vercel.app"` |
| `link.github` | `"https://github.com/julianty/birthday-ping"` |
| `pageLink` | `"birthday-ping"` |

Also add a corresponding `<Route>` in `src/app.tsx` and register the new URL in `scripts/prerender.js` so SSG covers it.

**Note:** No highlight image exists yet — either create/source one or temporarily reuse `projectShowcaseTemplate` until a real screenshot is ready.

### 3. Decide whether juliantyart belongs

**The case for keeping it:** Demonstrates Next.js, PostgreSQL (Prisma), and Stripe integration — meaningful full-stack depth that most bootcamp portfolios lack. Shows ability to ship a real product with payments.

**The case for removing it:** Personal art site may read as a hobby project rather than a professional one. Stack overlaps heavily with Job Pulse and What's for Dinner, so it adds less signal than it appears to.

**Recommendation:** Keep it, but reframe the `description` away from "my personal art website" toward the technical challenge — e.g. `"E-commerce platform for original art with Stripe payments, custom commissions flow, and PostgreSQL inventory"`. The tech is strong; the current framing undersells it.
