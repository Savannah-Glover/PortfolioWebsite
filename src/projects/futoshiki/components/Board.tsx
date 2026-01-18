import type { Puzzle } from "../puzzle_solver/types";

import ltUrl from "./svg/horizontal_less_than.svg";
import gtUrl from "./svg/horizontal_greater_than.svg";
import upUrl from "./svg/vertical_greater_than.svg";
import downUrl from "./svg/vertical_less_than.svg";

type Props = { puzzle: Puzzle };

const CELL = 48; // px
const GAP = 18;  // px

type HS = "<" | ">";
type VS = "^" | "v";

function cellKey(r: number, c: number) {
  return `${r},${c}`;
}

function buildGivenMap(puzzle: Puzzle) {
  return new Map(puzzle.givens.map(g => [cellKey(g.r, g.c), g.value]));
}

/**
 * Creates two lookup maps:
 * - hIneq: key "r,cLeft"  => "<" or ">" between (r,cLeft) and (r,cLeft+1)
 * - vIneq: key "rTop,c"   => "^" or "v" between (rTop,c) and (rTop+1,c)
 */
function buildInequalityMaps(puzzle: Puzzle) {
  const hIneq = new Map<string, HS>();
  const vIneq = new Map<string, VS>();

  for (const { from, to, op } of puzzle.inequalities) {
    const dr = to.r - from.r;
    const dc = to.c - from.c;

    // Only adjacent cells (N/S/E/W)
    if (Math.abs(dr) + Math.abs(dc) !== 1) continue;

    // Horizontal neighbors
    if (dr === 0) {
      const r = from.r;
      const cLeft = Math.min(from.c, to.c);

      // Normalize to "left ? right"
      const fromIsLeft = from.c === cLeft;
      const leftGreater = fromIsLeft ? op === ">" : op === "<";
      hIneq.set(cellKey(r, cLeft), leftGreater ? ">" : "<");
      continue;
    }

    // Vertical neighbors (dc === 0)
    const c = from.c;
    const rTop = Math.min(from.r, to.r);

    // Normalize to "top ? bottom"
    const fromIsTop = from.r === rTop;
    const topGreater = fromIsTop ? op === ">" : op === "<";

    // Convention: v means top > bottom, ^ means top < bottom
    vIneq.set(cellKey(rTop, c), topGreater ? "v" : "^");
  }

  return { hIneq, vIneq };
}

function gridTemplate(size: number, cellPx: number, gapPx: number) {
  // e.g. for size=4: "48px 18px 48px 18px 48px 18px 48px"
  return Array.from({ length: size }, () => `${cellPx}px`).join(` ${gapPx}px `);
}

function renderCell(value: number | undefined) {
  const isGiven = value !== undefined;

  return (
    <div
      style={{
        width: `${CELL}px`,
        height: `${CELL}px`,
        display: "grid",
        placeItems: "center",
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: "10px",
        background: isGiven ? "rgba(0,0,0,0.06)" : "white",
        fontWeight: isGiven ? 700 : 500,
        userSelect: "none"
      }}
    >
      {value ?? ""}
    </div>
  );
}

function renderHIneq(sym: string) {
  const src = sym === "<" ? ltUrl : sym === ">" ? gtUrl : null;

  return (
    <div
      style={{
        width: `${GAP}px`,
        height: `${CELL}px`,
        display: "grid",
        placeItems: "center",
        userSelect: "none"
      }}
    >
      {src ? (
        <img
          src={src}
          alt={sym}
          style={{ width: "60%", height: "60%", display: "block" }}
        />
      ) : null}
    </div>
  );
}

function renderVIneq(sym: string) {
  const src = sym === "^" ? upUrl : sym === "v" ? downUrl : null;

  return (
    <div
      style={{
        width: `${CELL}px`,
        height: `${GAP}px`,
        display: "grid",
        placeItems: "center",
        userSelect: "none"
      }}
    >
      {src ? (
        <img
          src={src}
          alt={sym}
          style={{ width: "60%", height: "60%", display: "block" }}
        />
      ) : null}
    </div>
  );
}


export default function Board({ puzzle }: Props) {
  const { size } = puzzle;

  const givenMap = buildGivenMap(puzzle);
  const { hIneq, vIneq } = buildInequalityMaps(puzzle);

  const bigSize = 2 * size - 1;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: gridTemplate(size, CELL, GAP),
        gridTemplateRows: gridTemplate(size, CELL, GAP),
        alignItems: "center",
        justifyItems: "center"
      }}
    >
      {Array.from({ length: bigSize * bigSize }, (_, idx) => {
        const gr = Math.floor(idx / bigSize);
        const gc = idx % bigSize;

        const rEven = gr % 2 === 0;
        const cEven = gc % 2 === 0;

        // Cell slot
        if (rEven && cEven) {
          const r = gr / 2;
          const c = gc / 2;
          const value = givenMap.get(cellKey(r, c));
          return <div key={`cell-${r}-${c}`}>{renderCell(value)}</div>;
        }

        // Horizontal inequality slot
        if (rEven && !cEven) {
          const r = gr / 2;
          const cLeft = (gc - 1) / 2;
          const sym = hIneq.get(cellKey(r, cLeft)) ?? "";
          return <div key={`h-${r}-${cLeft}`}>{renderHIneq(sym)}</div>;
        }

        // Vertical inequality slot
        if (!rEven && cEven) {
          const rTop = (gr - 1) / 2;
          const c = gc / 2;
          const sym = vIneq.get(cellKey(rTop, c)) ?? "";
          return <div key={`v-${rTop}-${c}`}>{renderVIneq(sym)}</div>;
        }

        // Spacer intersection
        return <div key={`x-${gr}-${gc}`} />;
      })}
    </div>
  );
}
