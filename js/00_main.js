const lines = [
  "8 9",
  "0 1 3 4 22 34 60 63 85",
  "0 35 44 50 53 56 61 90 99",
  "0 7 15 35 42 51 53 96 100",
  "0 23 40 41 44 64 67 83 91",
  "0 5 36 47 59 70 81 87 97",
  "0 5 11 14 30 34 64 76 90",
  "0 4 5 22 57 62 90 91 98",
  "0 8 13 25 35 41 60 68 82",
  "10",
  "2 6", //0   0-56  56
  "3 4", //1  51-35  16   72
  "6 1", //2  14- 0  14   86
  "4 4", //3   0-41  41  127
  "5 4", //4  47-47 ---  ---
  "8 6", //5  25-41  16  143
  "1 8", //6  34-63  29  172
  "5 6", //7  87-70  17  189
  "4 6", //8  64-64 ---  ---
  "5 1", //9  70- 0  70  259
];

function fareCalculation(data) {
  const fareCount = parseInt(data[0].split(" ")[0]);
  const fareMatrix = data
    .slice(1, fareCount + 1)
    .map((fare) => fare.split(" ").map((num) => parseInt(num)));
  const movementList = data
    .slice(1 + fareCount + 1)
    .map((point) => point.split(" ").map((num) => parseInt(num)));

  let totalAmount = 0;
  let nextStartAmount = 0;

  for (let i = 0; i < movementList.length; i++) {
    let from = movementList[i][0] - 1;
    let to = movementList[i][1] - 1;
    let nextFrom =
      i < movementList.length - 1 ? movementList[i + 1][0] - 1 : NaN;

    let amount = fareMatrix[from][to];
    totalAmount += Math.abs(nextStartAmount - amount);

    nextStartAmount = !isNaN(nextFrom) ? fareMatrix[nextFrom][to] : NaN;
  }

  return totalAmount;
}

console.log(fareCalculation(lines));


/* ***** ***** ***** ***** ***** ***** ***** ***** 

// const lines = [
//   "3 4", //路線の数を表す整数 N  駅の数を表す整数 M
//   "0 1 2 3",
//   "0 4 5 6",
//   "0 7 8 9",
//   "3", //ゴールまでに経由すべき駅の数を表す整数 X
//   "1 4", //現在地から R_i 番目の路線の S_i 番目の駅に向かう指示
//   "3 2",
//   "2 2",
// ]; //5
// const lines = [
//   "1 9",
//   "0 2 7 10 13 33 74 76 82",
//   "4",
//   "1 6",
//   "1 4",
//   "1 5",
//   "1 3",
// ];//65

***** ***** ***** ***** ***** ***** ***** ***** */
