---
name: SEO Investigation — Portfolio Discoverability
description: HIGH PRIORITY task to investigate why the portfolio is invisible to AI-powered search (Claude Chat) and fix discoverability
type: project
---

The portfolio at alexanderjulianty.com is not discoverable by AI-powered search tools — Claude Chat was unable to surface any content from it. The root cause is unknown but likely involves missing or misconfigured SEO fundamentals for a client-rendered SPA (no SSR, no static HTML content for crawlers to index).

**Why:** The portfolio's primary purpose is to showcase Alex's work to recruiters and employers. If AI assistants and search engines can't index it, it defeats that purpose.

**How to apply:** When working on this task, investigate in order of likelihood:
1. Missing `<meta>` tags (title, description, Open Graph, Twitter Card) in `index.html` or per-route
2. No `sitemap.xml` or `robots.txt` in `/public`
3. SPA rendering issue — Vite builds a JS-only bundle; crawlers may see a near-empty HTML shell with no content, since React renders client-side only. Pre-rendering or SSG may be needed.
4. No structured data / JSON-LD schema markup
5. Not yet indexed — check Google Search Console and Bing Webmaster Tools
6. `gh-pages` deployment quirks affecting crawlability
