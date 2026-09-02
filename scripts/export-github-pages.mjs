import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import worker from "../dist/server/index.js";

const outputDir = new URL("../dist/client/", import.meta.url);
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const renderUrl = new URL("/", siteUrl);

const response = await worker.fetch(
  new Request(renderUrl, { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Static render failed with status ${response.status}`);
}

let html = await response.text();

if (basePath) {
  html = html
    .replaceAll('href="/_next/', `href="${basePath}/_next/`)
    .replaceAll('src="/_next/', `src="${basePath}/_next/`)
    .replaceAll('url(/_next/', `url(${basePath}/_next/`)
    .replaceAll('"/_next/', `"${basePath}/_next/`)
    .replaceAll('href="/junyoung-yang-cv-public.pdf"', `href="${basePath}/junyoung-yang-cv-public.pdf"`);

  const cssDir = new URL("./_next/static/css/", outputDir);
  for (const filename of await readdir(cssDir)) {
    if (!filename.endsWith(".css")) continue;
    const cssPath = join(fileURLToPath(cssDir), filename);
    const css = await readFile(cssPath, "utf8");
    await writeFile(cssPath, css.replaceAll("url(/_next/", `url(${basePath}/_next/`));
  }
}

await mkdir(outputDir, { recursive: true });
await Promise.all([
  writeFile(new URL("index.html", outputDir), html),
  writeFile(new URL("404.html", outputDir), html),
  writeFile(new URL(".nojekyll", outputDir), ""),
]);

console.log(`GitHub Pages bundle created in ${outputDir.pathname}`);
