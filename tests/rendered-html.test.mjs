import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Junyoung Yang — AI Systems<\/title>/i);
  assert.match(html, /Building agents that/);
  assert.match(html, /general-purpose agents/);
  assert.match(html, /PROJECT GENIUS/);
  assert.match(html, /KFAC QUANT RESEARCH/);
  assert.match(html, /PC1MDDShieldAlpha/);
  assert.match(html, /Recall@1/);
  assert.match(html, /aiden1108@kaist\.ac\.kr/);
  const bioIndex = html.indexOf("01 / BIO");
  const educationIndex = html.indexOf("02 / EDUCATION");
  const projectsIndex = html.indexOf("03 / PROJECTS");
  assert.ok(bioIndex >= 0 && bioIndex < educationIndex && educationIndex < projectsIndex);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("includes the downloadable CV", async () => {
  await access(new URL("../public/junyoung-yang-cv-public.pdf", import.meta.url));
});
