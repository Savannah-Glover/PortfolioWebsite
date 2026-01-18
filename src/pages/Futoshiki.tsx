import examplePuzzle from "../projects/futoshiki/data/4x4/example-01.json";
import type { Puzzle } from "../projects/futoshiki/puzzle_solver/types";
import Board from "../projects/futoshiki/components/Board";

export default function Futoshiki() {
  const puzzle = examplePuzzle as Puzzle;

  return (
    <div className="page">
      <h1>Futoshiki Solver</h1>

      <p>
        Loaded: <strong>{puzzle.id}</strong> ({puzzle.size}×{puzzle.size})
      </p>

      <p>
        Givens: {puzzle.givens.length} | Inequalities: {puzzle.inequalities.length}
      </p>

      <Board puzzle={puzzle} />
    </div>
  );
}