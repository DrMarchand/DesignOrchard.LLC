const SHAPES = new Set(["square", "circle"]);

function requireText(value, label) {
  if (typeof value !== "string" || !value.trim()) {
    throw new TypeError(`${label} must be a non-empty string.`);
  }
  return value.trim();
}

export function createVisualComposition(input = {}) {
  const shape = requireText(input.shape, "Shape");
  if (!SHAPES.has(shape)) throw new TypeError(`Unsupported shape: ${shape}`);

  return Object.freeze({
    shape,
    filled: Boolean(input.filled),
    color: input.color == null ? null : requireText(input.color, "Color"),
    mark: input.mark == null ? null : requireText(input.mark, "Mark")
  });
}

export function resolveVisualComposition(input = {}) {
  const composition = createVisualComposition(input);
  const { shape, filled, color, mark } = composition;

  if (shape === "square" && !filled && color === null && mark === null) {
    return Object.freeze({ composition, glyph: "□" });
  }

  if (shape === "circle" && !filled && color === null && mark === null) {
    return Object.freeze({ composition, glyph: "○" });
  }

  if (shape === "square" && filled && color === "green" && mark === null) {
    return Object.freeze({ composition, glyph: "🟩" });
  }

  if (shape === "circle" && filled && color === "green" && mark === null) {
    return Object.freeze({ composition, glyph: "🟢" });
  }

  if (shape === "square" && mark === "check" && color === null) {
    return Object.freeze({ composition, glyph: "☑️" });
  }

  if (shape === "square" && mark === "check" && color === "green") {
    return Object.freeze({ composition, glyph: "✅" });
  }

  return Object.freeze({
    composition,
    glyph: null
  });
}

export function composeTokens(tokens = []) {
  if (!Array.isArray(tokens) || tokens.length === 0) {
    throw new TypeError("Composition tokens must be a non-empty array.");
  }

  const normalized = new Set(tokens.map((token) => requireText(token, "Composition token")));

  const shape = normalized.has("square") ? "square"
    : normalized.has("circle") ? "circle"
      : null;

  if (!shape) throw new Error("Composition requires a boundary shape.");

  const mark = normalized.has("check") ? "check" : null;
  const color = normalized.has("green") ? "green" : null;
  const filled = color !== null || normalized.has("filled");

  return resolveVisualComposition({
    shape,
    mark,
    color,
    filled
  });
}
