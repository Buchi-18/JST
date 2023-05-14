const lines = [
  "10 19",
  ".#.##.#..###..#..##",
  "#.#...##.##.#.....#",
  "...#...###..#.#.#..",
  ".##.#..##.#...#.##.",
  ".#.#.#.##.##.#.#.#.",
  ".###.....#..##.##..",
  "##..#.#..#...####..",
  "..#..#..#.#..#..##.",
  ".###..#.##.#..###..",
  "###...#....###.###.",
  "6 9",
];

const H = Number(lines[0].split(" ")[0]);
const W = Number(lines[0].split(" ")[1]);
const records = lines.slice(1, H + 1).map((row) => row.split(""));
const rewrite = lines.slice(-1)[0].split(" ").map(Number);
const targetRow = rewrite[0];
const targetCol = rewrite[1];
const targetRange = [
  [0, 0],
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]
  .map(([row, col]) => [targetRow + row, targetCol + col])
  .filter(([row, col]) => row >= 0 && col >= 0 && row < H && col < W);

function rewriteRecord() {
  targetRange.forEach(([row, col]) => {
    if (records[row][col] === ".") {
      records[row][col] = "#";
    } else {
      records[row][col] = ".";
    }
  });
  return records;
}

function showRecord() {
  const recordsRow = rewriteRecord().map((row) => row.join(""));
  return recordsRow;
}

const result = showRecord();
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
