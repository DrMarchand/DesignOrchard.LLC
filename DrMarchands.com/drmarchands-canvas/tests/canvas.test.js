import test from "node:test";
import assert from "node:assert/strict";
import { BOUNDARY_TYPES, CANVAS_IDENTITY, CanvasBootstrap, ComponentRegistry, validateBoundary, validateConfig } from "../src/canvas.js";

class FakeNode {
  constructor(name = "node") { this.name = name; this.children = []; this.parent = null; }
  append(...nodes) { for (const node of nodes) { this.children.push(node); node.parent = this; } }
  remove() { if (!this.parent) return; this.parent.children = this.parent.children.filter((node) => node !== this); this.parent = null; }
}

test("canonical Canvas identity preserves Unicode", () => {
  assert.equal(CANVAS_IDENTITY, "DrMarchand’s 🖼️ Canvas");
});

test("all required boundary types are represented", () => {
  for (const required of ["identity", "structure", "geometry", "responsive-layout", "visual-style", "semantics", "data-access", "interaction", "publication-lifecycle"]) {
    assert.ok(BOUNDARY_TYPES.includes(required), required);
  }
});

test("invalid boundary configuration is rejected", () => {
  assert.throws(() => validateBoundary({ id: "x", type: "security" }), /Unknown boundary type/);
  assert.throws(() => validateConfig("bad"), /configuration must be an object/);
});

test("component registry prevents accidental replacement", () => {
  const registry = new ComponentRegistry();
  registry.register("x", () => new FakeNode("x"));
  assert.equal(registry.has("x"), true);
  assert.throws(() => registry.register("x", () => null), /already registered/);
});

test("bootstrap mounts, unmounts, and mounts again cleanly", () => {
  const host = new FakeNode("host");
  const bootstrap = new CanvasBootstrap({ config: { boundaries: [{ id: "root", type: "structure" }] } });
  const renderer = () => new FakeNode("root");

  bootstrap.mount(host, renderer);
  assert.equal(bootstrap.state, "mounted");
  assert.equal(host.children.length, 1);

  bootstrap.unmount();
  assert.equal(bootstrap.state, "unmounted");
  assert.equal(host.children.length, 0);

  bootstrap.mount(host, renderer);
  assert.equal(bootstrap.state, "mounted");
  assert.equal(host.children.length, 1);
});

test("mount rejects invalid host and renderer", () => {
  const bootstrap = new CanvasBootstrap();
  assert.throws(() => bootstrap.mount({}, () => new FakeNode()), /host must support append/);
  assert.throws(() => bootstrap.mount(new FakeNode(), null), /renderer must be a function/);
});

test("boundary containment rejects missing parents and cycles", () => {
  assert.throws(() => validateConfig({ boundaries: [{ id: "child", type: "structure", parent: "missing" }] }), /Unknown parent boundary/);
  assert.throws(() => validateConfig({ boundaries: [
    { id: "a", type: "structure", parent: "b" },
    { id: "b", type: "structure", parent: "a" }
  ] }), /Boundary cycle detected/);
});
