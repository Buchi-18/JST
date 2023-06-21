const lines = ["4 4", "###.", "#.#.", "..#.", ".###", "1 1"];
// 3 2

const h = parseInt(lines[0].split(" ")[0]);
const w = parseInt(lines[0].split(" ")[1]);
const bricks = lines.slice(1, h + 1).map((items) => items.split(""));
const [x, y] = lines[h + 1].split(" ").map(Number);
let [pos_X, pos_Y] = [x - 1, y - 1];

bricks[pos_Y][pos_X] = ".";
// pos_Y--;
// pos_X--;

let getIsGrounded = isGrounded(bricks, pos_Y, pos_X)[0];
let getCoordinate = isGrounded(bricks, pos_Y, pos_X)[1];

// console.log(result[1]);

if (getIsGrounded) {
  console.log(bricks);
  console.log(getIsGrounded);
} else {
  for (let i = 0; i < getCoordinate.length; i++) {
    let get_X = getCoordinate[i][1];
    let get_Y = getCoordinate[i][0];
    bricks[get_Y][get_X] = ".";
  }
  console.log(bricks);
  console.log(getIsGrounded);
}

function isGrounded(bricks, row, col) {
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
  const visited = new Set(); // 既に訪れた座標の記録
  let coordinate = [];

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

/* ***** ***** ***** ***** ***** ***** ***** ***** 
（図）

###.
#.#.
..#.
.###
-----
地面

凡例
# = ブロック
. = 空間


あなたは敵のアジトを破壊しようとしています。
敵のアジトは複数のブロックを連結して作られた建築物です。

この建築物のある一箇所が破壊されます。

建築物の連結したブロックのうち、1 ブロックでも地面に接している場合崩れることはありません。しかし、ブロックの破壊によって、建築物を構成するブロックのうち、地面に接しているブロックが 1 つもなくなってしまった場合、建築物のその部分は全て破壊されてしまいます。

あなたは、建築物と、その破壊される場所の情報が与えられるので、破壊された結果の建築物を出力するプログラムをJavascriptで作成してください。

入力例 1 では以下のようになります。

初めに与えられる建築物は必ずどこがが地面に接しています。

このゲームの空間は、縦方向に H マス、横方向に W マス存在し、座標は (x, y) で表現されます。左上が x = 1, y = 1、右下が x = W, y = H となっています。

入力される値
入力は標準入力にて以下のフォーマットで与えられます。

H W
s_1
s_2
...
s_H
x y
・1 行目にそれぞれゲームの空間の高さ、幅を表す整数 H, W がこの順で半角スペース区切りで与えられます。
・続く H 行のうちの i 行目 (1 ≦ i ≦ H) には長さ W の文字列が与えられます。i 行目の文字列 s_i はゲームの空間の上から i 行目を表します。
・s_i は、".", "#" で構成され、"." はレンガが無い状態、"#" はレンガブロックを表します。
・H + 2 行目には、破壊する座標を表す整数 x, y がこの順で半角スペース区切りで与えられます。
・このゲームの空間は、左上が x = 1, y = 1, 右下が x = W, y = H となっています。
・入力は合計で H + 2 行となり、入力値最終行の末尾に改行が 1 つ入ります。

入力値
const lines = ["4 4", "###.", "#.#.", "..#.", ".###", "3 2"];


const H = parseInt(lines[0].split(" ")[0]);
const W = parseInt(lines[0].split(" ")[1]);
const blocks = lines.slice(1, H + 1).map((items) => items.split(""));

let init_X = lines[lines.length - 1][0] - 1;
let init_y = lines[lines.length - 1][2] - 1;
let pos_X;
let pos_Y = H - 1;
let blockPos = [];

blocks[init_y][init_X] = ".";

console.log(blocks);


for (let index = 0; index < H; index++) {
  for (let i = 0; i < W; i++) {
    pos_X = i;
    
    if (index < 2 && blocks[pos_Y][pos_X] === "#") {
      console.log(pos_Y);
      blockPos.push([pos_Y, pos_X]);
    } else if (index === 2) {
      console.log(pos_Y);
     
    }
  }
  pos_Y--;
}

  "###.",
  "#.#.",
  "..#.",
  ".###",

const bricks = [
  "#","#","#","."
  "#",".","#","."
  ".",".","#","."
  ".","#","#","#"
];

最下部の配列の＃が地面に接地しているものとして、
bricks[1][2]を"."に書き換えた後、bricks[2][2],bricks[3][1],bricks[3][2],bricks[3][3]の固まりは地面に接地するのでそのまま。
bricks[0][0],bricks[0][1],bricks[0][2],bricks[1][0]の固まり地面に接地しないので"."に書き換える Javascript


const bricks = [
  "#","#",".","."
  "#",".","#","."
  ".","#","#","."
  ".",".",".","."
];
任意の＃のひとまとまりになっている＃の座標を取得したい

結果例
任意の＃＝[0,0]
result= [[0,0], [0,1], [1,0]]




隣接している＃を辿って地面に接することの出来ない＃を全て. に変換　Javascript
任意の＃から隣接している＃の座標を全て取得　Javascript
任意の＃が隣接している＃を辿って地面に設置しているかの判定　Javascript
const bricks = [
  "###..#",
  "#....#",
  "..#..#",
  ".###.#",
];

任意の位置の＃の一段上下、一列左右の値が＃だった時、該当が隣接する＃を辿って最下部の配列の＃に、辿り着けない場合は＃を.に変換 Javascript
***** ***** ***** ***** ***** ***** ***** ***** */
