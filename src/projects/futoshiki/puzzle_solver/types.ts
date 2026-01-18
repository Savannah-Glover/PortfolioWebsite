export type CellPos = { r: number; c: number };

export type Given = CellPos & { value: number };

export type Inequality = {
  from: CellPos;
  to: CellPos;
  op: "<" | ">";
};

export type Puzzle = {
  id: string;
  size: number;
  givens: Given[];
  inequalities: Inequality[];
  solved?: Given[]; // optional, because not every puzzle will have a solution already
};
