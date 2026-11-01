import test from "node:test";
import assert from "node:assert/strict";
import { toggleLayoutMode } from "../src/home.js";

class AttrNode {
  constructor() { this.attrs = new Map(); this.textContent = ""; }
  getAttribute(name) { return this.attrs.get(name) ?? null; }
  setAttribute(name, value) { this.attrs.set(name, String(value)); }
}

test("layout interaction toggles mode and accessible pressed state", () => {
  const home = new AttrNode();
  const button = new AttrNode();
  home.setAttribute("data-mode", "expanded");
  button.setAttribute("aria-pressed", "false");

  assert.equal(toggleLayoutMode(home, button), "compact");
  assert.equal(button.getAttribute("aria-pressed"), "true");
  assert.equal(button.textContent, "Use expanded layout");

  assert.equal(toggleLayoutMode(home, button), "expanded");
  assert.equal(button.getAttribute("aria-pressed"), "false");
});
