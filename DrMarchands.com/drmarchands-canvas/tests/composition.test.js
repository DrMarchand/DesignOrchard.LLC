import test from "node:test";
import assert from "node:assert/strict";
import {
  composeTokens,
  createVisualComposition,
  resolveVisualComposition
} from "../src/composition.js";

test("empty square resolves to square boundary glyph", () => {
  assert.equal(resolveVisualComposition({ shape: "square" }).glyph, "□");
});

test("empty circle resolves to circle boundary glyph", () => {
  assert.equal(resolveVisualComposition({ shape: "circle" }).glyph, "○");
});

test("green filled square resolves to green square", () => {
  assert.equal(resolveVisualComposition({
    shape: "square",
    filled: true,
    color: "green"
  }).glyph, "🟩");
});

test("green filled circle resolves to green circle", () => {
  assert.equal(resolveVisualComposition({
    shape: "circle",
    filled: true,
    color: "green"
  }).glyph, "🟢");
});

test("square plus check resolves to checked box", () => {
  assert.equal(composeTokens(["square", "check"]).glyph, "☑️");
});

test("composition order does not change square plus check result", () => {
  assert.equal(
    composeTokens(["check", "square"]).glyph,
    composeTokens(["square", "check"]).glyph
  );
});

test("square plus check plus green resolves to green check", () => {
  assert.equal(composeTokens(["square", "check", "green"]).glyph, "✅");
});

test("composition preserves shape, fill, color, and mark separately", () => {
  const resolved = composeTokens(["green", "check", "square"]);

  assert.deepEqual(resolved.composition, {
    shape: "square",
    filled: true,
    color: "green",
    mark: "check"
  });
  assert.equal(resolved.glyph, "✅");
});

test("unsupported combinations stay structured without inventing a glyph", () => {
  const resolved = resolveVisualComposition({
    shape: "circle",
    filled: true,
    color: "blue",
    mark: "check"
  });

  assert.equal(resolved.glyph, null);
  assert.equal(resolved.composition.shape, "circle");
  assert.equal(resolved.composition.color, "blue");
  assert.equal(resolved.composition.mark, "check");
});

test("visual composition rejects unsupported boundary shapes", () => {
  assert.throws(
    () => createVisualComposition({ shape: "triangle" }),
    /Unsupported shape/
  );
});
