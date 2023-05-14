/*
 */

/*
const lines = ["3 3", "...", "...", "...", "0 0"];

const H = Number(lines[0].split(" ")[0]);
const W = Number(lines[0].split(" ")[1]);
let records = lines.slice(1, H + 1).map((row) => row.split(""));
const rewrite = lines.slice(-1)[0].split(" ").map(Number);

function rewriteRecord() {
  let row = rewrite[0];
  let col = rewrite[1];
  let targetRecord = records[row][col];

  if (targetRecord === ".") {
    records[row][col] = "#";
  }
  if (targetRecord === "#") {
    records[row][col] = ".";
  }
  return records;
}

function showRecord() {
  const recordsRow = rewriteRecord().map((row) => row.join(""));
  for (let i = 0; i < recordsRow.length; i++) {
    console.log(recordsRow[i]);
  }
}

showRecord();

*/

import { lines, ans } from "./data.js";

const n = Number(lines[0].split(" ")[0]);
const k = Number(lines[0].split(" ")[1]);
const HowOld = lines.slice(1, n + 1).map(Number);
const order = lines.slice(n + 1);

let result = [];

let client = HowOld.map((age, index) => {
  return {
    [index + 1]: {
      old: Number(age),
      isAdult: age >= 20,
      discount: false,
      discountNum: 0,
      amount: 0,
    },
  };
}).reduce((result, current) => {
  return Object.assign(result, current);
}, {});

let leaveClient = 0;

for (let i = 0; i < order.length; i++) {
  const currentOrder = order[i].split(" ");
  const currentNum = Number(currentOrder[0]);
  const currentMenu = currentOrder[1];
  const currentAmount = Number(currentOrder[2]);

  if (currentMenu === "alcohol") {
    if (client[currentNum].isAdult) {
      client[currentNum].amount += currentAmount;
      client[currentNum].discount = true;
    }
  } else if (currentMenu === "0") {
    if (client[currentNum].isAdult) {
      client[currentNum].amount += 500;
      client[currentNum].discount = true;
    }
  } else if (currentMenu === "A") {
    if (client[currentNum].discount === true) {
      client[currentNum].amount =
        client[currentNum].amount - client[currentNum].discountNum * 200;
      client[currentNum].discountNum = 0;
    }
    leaveClient++;
    // console.log(client[currentNum].amount);
    result.push(client[currentNum].amount);
  } else if (currentMenu === "food") {
    if (client[currentNum].discount === true) {
      client[currentNum].discountNum++;
    }
    client[currentNum].amount += currentAmount;
  } else {
    client[currentNum].amount += currentAmount;
  }
}
// console.log(leaveClient);
// console.log(client);
result.push(leaveClient);

console.log(result);
console.log(ans);

for (let index = 0; index < result.length; index++) {
  if (result[index] === ans[index]) {
    console.log(true);
  } else {
    console.log(`${index} : res:${result[index]} -- ans:${ans[index]}`);
  }
}

/*
const old = ["68", "85", "57", "32", "90", "74", "7"];

let client = old.map((age, index) => {
  return {
    [index + 1]: {
      old: Number(age),
      amount: 0,
      isAdult: age >= 20
    }
  }
}).reduce((result, current) => {
  return Object.assign(result, current)
}, {});

上記のコードでは、map()メソッドを使用して、各要素をオブジェクトに変換し、オブジェクト内に配列のインデックスに対応する番号のキーを追加しています。reduce()メソッドを使用して、配列の各要素を1つのオブジェクトに結合します。

オブジェクトのamountプロパティは、この例では0に設定されていますが、必要に応じて別の値に変更できます。また、isAdultプロパティは、ageが20以上である場合にtrueに設定されます。

 */
