import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distClient = path.resolve(__dirname, "../dist");
const distServer = path.resolve(__dirname, "../dist-server");

const routes = [
  "/",
  "/projects/CorporeSano",
  "/projects/juliantyart",
  "/projects/JobPulse",
  "/projects/WhatsForDinner",
  "/projects/birthday-ping",
  "/projects/PomodoroTimer",
  "/projects/BarbellCV",
];

const template = fs.readFileSync(
  path.resolve(distClient, "index.html"),
  "utf-8"
);

const { render } = await import(
  pathToFileURL(path.resolve(distServer, "entry-server.js")).href
);

for (const route of routes) {
  const { html: rendered, helmetContext } = render(route);
  const { helmet } = helmetContext;

  const extraTags = [helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()]
    .filter(Boolean)
    .join("\n    ");

  const html = template
    .replace(/<title>[^<]*<\/title>/, helmet.title.toString())
    .replace("</head>", `    ${extraTags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);

  const outDir =
    route === "/"
      ? distClient
      : path.resolve(distClient, route.slice(1));

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.resolve(outDir, "index.html"), html);
  console.log(`pre-rendered: ${route}`);
}

fs.rmSync(distServer, { recursive: true, force: true });

const BASE_URL = "https://alexanderjulianty.com";
const today = new Date().toISOString().split("T")[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync(path.resolve(distClient, "sitemap.xml"), sitemap);
console.log("generated: sitemap.xml");
