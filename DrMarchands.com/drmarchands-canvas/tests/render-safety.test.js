import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("Home renderer avoids HTML string injection sinks", async () => {
  const source = await readFile(new URL("../src/home.js", import.meta.url), "utf8");
  assert.equal(source.includes("innerHTML"), false);
  assert.equal(source.includes("insertAdjacentHTML"), false);
  assert.match(source, /textContent/);
});

test("responsive token stylesheet includes a small-screen media boundary", async () => {
  const css = await readFile(new URL("../src/tokens.css", import.meta.url), "utf8");
  assert.match(css, /@media \(max-width: 36rem\)/);
  assert.match(css, /grid-template-columns: repeat\(auto-fit/);
});
