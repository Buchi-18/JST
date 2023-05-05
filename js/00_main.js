//入力データ
//0505_保留
// const lines = ["4 4", "###.", "#.#.", "..#.", ".###", "3 3"];
const lines = ["4 4", "###.", "#.#.", "..#.", ".###", "1 1"];
// const lines = ["4 4", "####", "#..#", "#..#", "#..#", "1 2"];
// const lines = ["4 4", "####", "#..#", "#..#", "#..#", "4 4"];
// const lines = ["4 4", "####", "#..#", "#..#", "#..#", "1 1"];
// const lines = ["4 4", "####", "#..#", "#..#", "#..#", "2 1"];

//データの取得
const h = parseInt(lines[0].split(" ")[0]);
const w = parseInt(lines[0].split(" ")[1]);
const bricks = lines.slice(1, h + 1).map((items) => items.split(""));
const [targetCol, targetRow] = lines[h + 1]
  .split(" ")
  .map(Number)
  .map((num) => num - 1);

const directions = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];
const findLen = directions.length;

function destroyedBrick() {
  bricks[targetRow][targetCol] = ".";
  return bricks;
}

function findAroundBrick() {
  let aroundBrick = [];

  for (const [dr, dc] of directions) {
    const foundRow = targetRow + dr;
    const foundCal = targetCol + dc;

    if (checkInRange(foundRow, foundCal)) {
      aroundBrick.push([foundRow, foundCal]);
    }
  }
  return aroundBrick;
}

function checkInRange(checkRow, checkCol) {
  let inRange;
  if (
    checkRow < 0 ||
    checkRow >= bricks.length ||
    checkCol < 0 ||
    checkCol >= bricks[0].length
  ) {
    return (inRange = false);
  }
  return (inRange = true);
}

// console.log(checkInRange(foundRow, foundCal));

function getIsGrounded() {
  const checkBrick = findAroundBrick();
  let isGrounded = [];

  for (let j = 0; j < checkBrick.length; j++) {
    let row = checkBrick[j][0];
    let col = checkBrick[j][1];
    let temp = [[row, col]];
    let boolean = false;

    
    if (bricks[row][col] !== "#") {
      boolean = false;
      isGrounded.push([boolean, temp]);
      continue;
    }

    if (row === bricks.length - 1) {
      boolean = true;
      isGrounded.push([boolean, temp]);
      continue;
    }

    const queue = [[row, col]]; // BFSのためのキュー
    const visited = new Set(); // 既に訪れた座標の記録

    while (queue.length > 0) {
      const [r, c] = queue.shift();

      if (r === bricks.length - 1) {
        boolean = true; // 最下部の場合は必ず地面に接地している
        isGrounded.push([boolean, temp]);
        continue;
      } else {
        for (const [dr, dc] of directions) {
          const neighborRow = r + dr;
          const neighborCol = c + dc;

          if (getIsContinue(neighborRow, neighborCol, visited)) {
            continue;
          }

          temp.push([neighborRow, neighborCol]);
          queue.push([neighborRow, neighborCol]);
          visited.add(`${neighborRow},${neighborCol}`);
        }
      }
    }

    isGrounded.push([boolean, temp]);
  }

  return isGrounded;
}

function getIsContinue(nr, nc, visited) {
  let isContinue = true;

  if (nr < 0 || nr >= bricks.length || nc < 0 || nc >= bricks[0].length) {
    return isContinue; // 領域外は無視する
  }
  if (visited.has(`${nr},${nc}`)) {
    return isContinue; // 既に訪れた座標は無視する
  }
  if (bricks[nr][nc] !== "#") {
    return isContinue; // "#" 以外は無視する
  }

  return (isContinue = false);
}

function result() {
  const resultBricks = bricks;
  for (const [bool, array] of getIsGrounded()) {
    if (bool) continue;

    array.forEach((arr) => {
      const [y, x] = [arr[0], arr[1]];
      if (resultBricks[y][x] === "#") {
        resultBricks[y][x] = ".";
      }
    });
  }
  return resultBricks;
}

destroyedBrick();
result().map((brick) => console.log(brick.join("")));

// //対象の値が地面に付いてるかの判定
// function getIsGrounded(row, col) {
//   if (row === bricks.length - 1) {
//     return true; // 最下部の場合は必ず地面に接地している
//   }

//   const directions = [
//     [-1, 0],
//     [0, -1],
//     [0, 1],
//     [1, 0],
//   ]; // 上下左右の座標変化
//   const queue = [[row, col]]; // BFSのためのキュー
//   let coordinate = [[row, col]];
//   const visited = new Set(); // 既に訪れた座標の記録

//   while (queue.length > 0) {
//     const [r, c] = queue.shift();
//     if (r === bricks.length - 1) {
//       return [true, coordinate]; // 地面に到達したら true を返す
//     }

//     for (const [dr, dc] of directions) {
//       const nr = r + dr;
//       const nc = c + dc;

//       if (nr < 0 || nr >= bricks.length || nc < 0 || nc >= bricks[0].length) {
//         continue; // 領域外は無視する
//       }
//       if (visited.has(`${nr},${nc}`)) {
//         continue; // 既に訪れた座標は無視する
//       }
//       if (bricks[nr][nc] !== "#") {
//         continue; // "#" 以外は無視する
//       }
//       coordinate.push([nr, nc]);
//       queue.push([nr, nc]);
//       visited.add(`${nr},${nc}`);
//     }
//   }
//   return [false, coordinate];
// }

/* ***** ***** ***** ***** ***** ***** ***** ***** 
const lines = ["2 3"];
const [targetCol, targetRow] = lines[0].split(" ") ;

console.log(targetCol);//1
console.log(targetCol);//2
それぞれ-1したい
JS

let [posY, posX] = [y - 1, x - 1];

//結果を受け取り出力
const resultOutput = result(posY, posX);
for (let i = 0; i < resultOutput.length; i++) {
  console.log(resultOutput[i]);
}

//判定の結果を配列に反映して値を返す
function result(posY, posX) {
  bricks[posY][posX] = ".";
  const checkPos = [
    [posY - 1, posX],
    [posY + 1, posX],
    [posY, posX - 1],
    [posY, posX + 1],
  ];
  for (let i = 0; i < checkPos.length; i++) {
    [posY, posX] = [checkPos[i][0], checkPos[i][1]];
    const [isGrounded, coordinate] = getIsGrounded(posY, posX);

    if (getIsGrounded) {
      continue;
    } else {
      if (getCoordinate && getCoordinate.length) {
        for (let j = 0; j < getCoordinate.length; j++) {
          let getX = getCoordinate[j][1];
          let getY = getCoordinate[j][0];

          if (
            getY < 0 ||
            getY >= bricks.length ||
            getX < 0 ||
            getX >= bricks[0].length
          ) {
            continue;
          }
          bricks[getY][getX] = ".";
        }

      }
    }
  }

  const output = bricks.map((elements) => elements.join(""));
  return output;
}

//対象の値が地面に付いてるかの判定
function getIsGrounded(row, col) {
  if (row === bricks.length - 1) {
    return true; // 最下部の場合は必ず地面に接地している
  }

  const directions = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ]; // 上下左右の座標変化
  const queue = [[row, col]]; // BFSのためのキュー
  let coordinate = [[row, col]];
  const visited = new Set(); // 既に訪れた座標の記録

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    if (r === bricks.length - 1) {
      return [true, coordinate]; // 地面に到達したら true を返す
    }

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr < 0 || nr >= bricks.length || nc < 0 || nc >= bricks[0].length) {
        continue; // 領域外は無視する
      }
      if (visited.has(`${nr},${nc}`)) {
        continue; // 既に訪れた座標は無視する
      }
      if (bricks[nr][nc] !== "#") {
        continue; // "#" 以外は無視する
      }
      coordinate.push([nr, nc]);
      queue.push([nr, nc]);
      visited.add(`${nr},${nc}`);
    }
  }
  return [false, coordinate];
}






最下部の配列の＃が地面に接地しているものとして、
任意の＃から隣接する＃を辿って、地面に接地していなかった場合に対象の＃のひとまとまりを"."に書き換えるJavascriptコード 

例
元配列
const bricks = [
  "#",".","#","."
  "#",".","#","."
  ".",".","#","."
  ".","#","#","#"
];

任意の# = bricks[0][0]

結果
const bricks = [
  ".",".","#","."
  ".",".","#","."
  ".",".","#","."
  ".","#","#","#"
];
***** ***** ***** ***** ***** ***** ***** ***** */

// function replaceConnectedBricksWithDot(bricks, targetRow, targetCol) {
//   // 最下部から順に探索
//   const visited = new Set();
//   const stack = [[bricks.length - 1, targetCol]];
//   visited.add(`${bricks.length - 1},${targetCol}`);

//   while (stack.length > 0) {
//     const [r, c] = stack.pop();
//     bricks[r][c] = "."; // 接地している＃にたどり着いた場合、そこから繋がっている＃を"."に書き換える
//     const directions = [
//       [-1, 0],
//       [0, -1],
//       [0, 1],
//       [1, 0],
//     ];
//     for (const [dr, dc] of directions) {
//       const nr = r + dr;
//       const nc = c + dc;
//       if (nr < 0 || nr >= bricks.length || nc < 0 || nc >= bricks[0].length) {
//         continue; // 領域外は無視する
//       }
//       if (visited.has(`${nr},${nc}`) || bricks[nr][nc] === ".") {
//         continue; // 既に訪れた座標や"."は無視する
//       }
//       stack.push([nr, nc]);
//       visited.add(`${nr},${nc}`);
//     }
//   }
// }

// const bricks = [
//   ["#", ".", "#", "."],
//   ["#", ".", "#", "."],
//   [".", ".", "#", "."],
//   [".", "#", "#", "#"],
// ];
// const targetRow = 0;
// const targetCol = 0;

// replaceConnectedBricksWithDot(bricks, targetRow, targetCol);
// console.log(bricks);
