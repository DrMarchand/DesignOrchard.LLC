import test from "node:test";
import assert from "node:assert/strict";
import {
  SpatialGrid,
  createCell,
  createDot
} from "../src/space.js";

test("cell is an invisible logical coordinate with no required occupant", () => {
  const grid = new SpatialGrid();
  grid.defineCell({ x: 0, y: 0, z: 0 });

  const cell = grid.getCell({ x: 0, y: 0, z: 0 });

  assert.equal(cell.occupied, false);
  assert.equal(cell.occupant, null);
});

test("a defined cell holds at most one dot", () => {
  const grid = new SpatialGrid();
  grid.defineCell({ x: 1, y: 2, z: 3 });

  grid.occupy(
    { x: 1, y: 2, z: 3 },
    { id: "dot:red", color: "#ff0000" }
  );

  assert.throws(() => grid.occupy(
    { x: 1, y: 2, z: 3 },
    { id: "dot:blue", color: "#0000ff" }
  ), /already occupied/);
});

test("dot has exactly one color value at its smallest state", () => {
  const dot = createDot({
    id: "dot:one",
    color: "#44aa88",
    opacity: 0.5,
    radius: 1
  });

  assert.equal(dot.color, "#44aa88");
  assert.equal(dot.opacity, 0.5);
  assert.equal(dot.radius, 1);
  assert.equal("colors" in dot, false);
});

test("cells preserve three-dimensional coordinates", () => {
  const cell = createCell({ x: -2, y: 5, z: 9 });

  assert.deepEqual(cell, { x: -2, y: 5, z: 9 });
});

test("only explicitly defined cells can be occupied", () => {
  const grid = new SpatialGrid();

  assert.throws(() => grid.occupy(
    { x: 4, y: 4, z: 4 },
    { id: "dot:missing-cell", color: "#ffffff" }
  ), /not defined/);
});

test("vacating a cell returns it to genuine emptiness", () => {
  const grid = new SpatialGrid();
  grid.defineCell({ x: 0, y: 1, z: 0 });
  grid.occupy(
    { x: 0, y: 1, z: 0 },
    { id: "dot:temporary", color: "#cccccc" }
  );

  const removed = grid.vacate({ x: 0, y: 1, z: 0 });
  const current = grid.getCell({ x: 0, y: 1, z: 0 });

  assert.equal(removed.id, "dot:temporary");
  assert.equal(current.occupied, false);
  assert.equal(current.occupant, null);
});

test("dynamic grid shape is derived only from occupied cells", () => {
  const grid = new SpatialGrid();

  grid.defineCell({ x: 0, y: 0, z: 0 });
  grid.defineCell({ x: 1, y: 0, z: 0 });
  grid.defineCell({ x: 2, y: 0, z: 0 });

  grid.occupy(
    { x: 1, y: 0, z: 0 },
    { id: "dot:center", color: "#123456", opacity: 0.75 }
  );

  assert.equal(grid.size(), 3);
  assert.equal(grid.occupiedCount(), 1);
  assert.deepEqual(
    grid.occupiedCells().map(({ x, y, z, occupant }) => ({
      x,
      y,
      z,
      id: occupant.id,
      color: occupant.color
    })),
    [{ x: 1, y: 0, z: 0, id: "dot:center", color: "#123456" }]
  );
});

test("dot opacity is bounded independently from occupancy", () => {
  assert.throws(() => createDot({
    id: "dot:bad-opacity",
    color: "#000000",
    opacity: 1.1
  }), /between 0 and 1/);
});
