const lines = [
  "5 10 5",
  "o 5 4",
  "f 1 5",
  "b 1 2",
  "k 1 5",
  "k 2 4",
  "1",
  "2",
  "1",
  "2",
  "2",
  "2",
  "2",
  "2",
  "1",
  "1",
];

const [N, K, S] = lines[0].split(" ").map(Number);
const spotData = lines
  .slice(1, 1 + N)
  .map((spot) => spot.split(" "))
  .map((subArr) => [subArr[0], Number(subArr[1]), Number(subArr[2])]);
const directions = lines.slice(1 + N).map(Number);

const initPos = spotData[S - 1];

function getSpells() {
  const spells = [initPos[0]];
  let currentPos = initPos;

  for (let i = 0; i < K; i++) {
    let num = currentPos[directions[i]] - 1;
    currentPos = spotData[num];
    spells.push(currentPos[0]);
  }

  return spells;
}

const result = getSpells();
console.log(result.join(""));
