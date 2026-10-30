function requireFiniteNumber(value, label) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${label} must be a finite number.`);
  }
  return value;
}

function requireCoordinate(value, label) {
  const number = requireFiniteNumber(value, label);
  if (!Number.isInteger(number)) throw new TypeError(`${label} must be an integer.`);
  return number;
}

function requireText(value, label) {
  if (typeof value !== "string" || !value.trim()) {
    throw new TypeError(`${label} must be a non-empty string.`);
  }
  return value.trim();
}

function coordinateKey({ x, y, z }) {
  return `${x}:${y}:${z}`;
}

export function createDot(input = {}) {
  const opacity = input.opacity ?? 1;
  const radius = input.radius ?? 1;

  requireFiniteNumber(opacity, "Dot opacity");
  requireFiniteNumber(radius, "Dot radius");

  if (opacity < 0 || opacity > 1) {
    throw new RangeError("Dot opacity must be between 0 and 1.");
  }
  if (radius <= 0) {
    throw new RangeError("Dot radius must be greater than zero.");
  }

  return Object.freeze({
    id: requireText(input.id, "Dot id"),
    color: requireText(input.color, "Dot color"),
    opacity,
    radius
  });
}

export function createCell(input = {}) {
  return Object.freeze({
    x: requireCoordinate(input.x, "Cell x"),
    y: requireCoordinate(input.y, "Cell y"),
    z: requireCoordinate(input.z, "Cell z")
  });
}

export class SpatialGrid {
  #cells = new Map();

  defineCell(cellInput) {
    const cell = createCell(cellInput);
    const key = coordinateKey(cell);

    if (this.#cells.has(key)) {
      throw new Error(`Cell already defined: ${key}`);
    }

    this.#cells.set(key, {
      cell,
      occupant: null
    });

    return cell;
  }

  hasCell(cellInput) {
    const cell = createCell(cellInput);
    return this.#cells.has(coordinateKey(cell));
  }

  getCell(cellInput) {
    const cell = createCell(cellInput);
    const record = this.#cells.get(coordinateKey(cell));

    if (!record) return null;

    return Object.freeze({
      ...record.cell,
      occupied: record.occupant !== null,
      occupant: record.occupant
    });
  }

  occupy(cellInput, dotInput) {
    const cell = createCell(cellInput);
    const key = coordinateKey(cell);
    const record = this.#cells.get(key);

    if (!record) {
      throw new Error(`Cell is not defined: ${key}`);
    }
    if (record.occupant !== null) {
      throw new Error(`Cell is already occupied: ${key}`);
    }

    const dot = createDot(dotInput);
    record.occupant = dot;
    return dot;
  }

  vacate(cellInput) {
    const cell = createCell(cellInput);
    const key = coordinateKey(cell);
    const record = this.#cells.get(key);

    if (!record) {
      throw new Error(`Cell is not defined: ${key}`);
    }

    const previous = record.occupant;
    record.occupant = null;
    return previous;
  }

  occupiedCells() {
    return Object.freeze(
      [...this.#cells.values()]
        .filter((record) => record.occupant !== null)
        .map((record) => Object.freeze({
          ...record.cell,
          occupant: record.occupant
        }))
    );
  }

  size() {
    return this.#cells.size;
  }

  occupiedCount() {
    let count = 0;
    for (const record of this.#cells.values()) {
      if (record.occupant !== null) count += 1;
    }
    return count;
  }
}
