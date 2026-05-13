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
];

const template = fs.readFileSync(
  path.resolve(distClient, "index.html"),
  "utf-8"
);

const { render } = await import(
  pathToFileURL(path.resolve(distServer, "entry-server.js")).href
);

for (const route of routes) {
  const rendered = render(route);
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${rendered}</div>`
  );

  const outDir =
    route === "/"
      ? distClient
      : path.resolve(distClient, route.slice(1));

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.resolve(outDir, "index.html"), html);
  console.log(`pre-rendered: ${route}`);
}

fs.rmSync(distServer, { recursive: true, force: true });
