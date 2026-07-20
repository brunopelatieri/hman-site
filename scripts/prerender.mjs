/**
 * SSG — pré-renderiza cada rota em HTML estático dentro de dist/client.
 * Roda após `vite build` (client) e `vite build --ssr` (server).
 * Também gera sitemap.xml com lastmod do dia do build.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = join(root, "dist", "client");
const template = readFileSync(join(clientDir, "index.html"), "utf-8");

const { render, PRERENDER_PATHS } = await import(
  pathToFileURL(join(root, "dist", "server", "entry-server.js")).href
);

const SITE_URL = "https://www.local.ia.br";

for (const path of PRERENDER_PATHS) {
  const { appHtml, headHtml } = render(path);
  const html = template
    .replace("<!--app-head-->", headHtml)
    .replace("<!--app-html-->", appHtml);

  const outFile =
    path === "/" ? join(clientDir, "index.html") : join(clientDir, path.slice(1), "index.html");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html, "utf-8");
  console.log(`✓ pré-renderizado: ${path} → ${outFile.replace(root, "")}`);
}

// 404 estático (sem head específico de rota)
const notFound = render("/404-not-found");
writeFileSync(
  join(clientDir, "404.html"),
  template.replace("<!--app-head-->", notFound.headHtml).replace("<!--app-html-->", notFound.appHtml),
  "utf-8",
);
console.log("✓ 404.html gerado");

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = PRERENDER_PATHS.map((p) => {
  const loc = p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`;
  const priority = p === "/" ? "1.0" : "0.8";
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join("\n");

writeFileSync(
  join(clientDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  "utf-8",
);
console.log("✓ sitemap.xml gerado");

// dist/server não precisa ser publicado
const serverDir = join(root, "dist", "server");
if (existsSync(serverDir)) rmSync(serverDir, { recursive: true, force: true });

console.log("\nBuild SSG concluído. Publique o conteúdo de dist/client.");
