/*

const lines = ["123456"];
const input = lines[0].split("").map(Number)

function getCode(input) {
  const len = input.length;
  const low = 3;
  const col = 3;
  const getCode = [];

  for (let i = 0; i < len; i++) {
    const code = [];
    const inputNum = Number(input[i]);
    for (let j = 0; j < low * col; j++) {
      if (inputNum > j) {
        code.push("#");
      } else {
        code.push(".");
      }
    }
    getCode.push(code);
  }
  return getCode;
}

const getCodeArr = getCode(input);
const result = [];
for (let i = 0; i < getCodeArr.length; i += 3) {
  for (let j = 0; j < getCodeArr[0].length; j += 3) {
    const chunk = [];
    for (let k = i; k < i + 3; k++) {
      chunk.push(...getCodeArr[k].slice(j, j + 3));
    }
    result.push(chunk);
  }
}

result.forEach(res => {
  console.log(res.join(""));
})

*/

//未成年クラス
class Minor {
  constructor(id, age) {
    this.id = id;
    this.age = age;
    this.isAdult = false;
    this.totalAmount = 0;
  }

  minorOrder(order, amount) {
    switch (order) {
      case "alcohol":
      case "0":
        break;
      case "A":
        clientBill.push(this.totalAmount);
        break;
      default:
        this.totalAmount += amount;
        break;
    }
  }
}

//成年クラス
class Adult extends Minor {
  constructor(id, age) {
    super(id, age);
    this.isAdult = true;
    this.discount = false;
  }

  adultOrder(order, amount) {
    switch (order) {
      case "alcohol":
        this.discount = true;
        this.totalAmount += amount;
        break;
      case "0":
        this.discount = true;
        this.totalAmount += 500;
        break;
      case "A":
        clientBill.push(this.totalAmount);
        break;
      case "food":
        if (this.discount) {
          amount -= 200;
        }
        this.totalAmount += amount;
        break;
      default:
        this.totalAmount += amount;
        break;
    }
  }
}

//入力データを整形
const n = Number(lines[0].split(" ")[0]);
const k = Number(lines[0].split(" ")[1]);
const ages = lines.slice(1, n + 1).map(Number);
const ordering = lines
  .slice(n + 1)
  .map((item) => item.split(" "))
  .map((subArr) => [Number(subArr[0]), subArr[1], Number(subArr[2])]);

//お客さんのデータオブジェクトを作成
const clients = ages.map((age, index) => {
  const id = index + 1;
  if (age >= 20) {
    return new Adult(id, age);
  } else {
    return new Minor(id, age);
  }
});

//お客さんの支払い金額を格納する定数を定義
const clientBill = [];

//オーダー毎にお客さん番号の判定、注文の処理
for (let i = 0; i < ordering.length; i++) {
  const clientId = ordering[i][0];
  const order = ordering[i][1];
  const amount = ordering[i][2];

  const client = clients.find((c) => c.id === clientId);

  if (client.isAdult) {
    client.adultOrder(order, amount, clientBill);
  } else {
    client.minorOrder(order, amount, clientBill);
  }
}

//結果を出力
//支払い順に会計金額を出力
clientBill.forEach((ele) => console.log(ele));
//退店客数を出力
console.log(clientBill.length);
/*

*/
/*

const lines = [
  "2 5",
  "59",
  "5",
  "2 food 1223",
  "1 alcohol 4461",
  "1 alcohol 4573",
  "1 alcohol 1438",
  "2 softdrink 1581",
];

class Minor {
  constructor(id, age) {
    this.id = id;
    this.age = age;
    this.isAdult = false;
    this.totalAmount = 0;
  }
}

class Adult extends Minor {
  constructor(id, age) {
    super(id, age);
    this.isAdult = true;
    this.discount = false;
  }

  order(order, amount) {
    switch (order) {
      case "alcohol":
        this.discount = true;
        this.totalAmount += amount;
        break;
      case "food":
        if (this.discount) {
          amount -= 200;
        }
        this.totalAmount += amount;
        break;
      default:
        this.totalAmount += amount;
        break;
    }
  }
}

const n = Number(lines[0].split(" ")[0]);
const k = Number(lines[0].split(" ")[1]);
const ages = lines.slice(1, n + 1).map(Number);
const ordering = lines
  .slice(n + 1)
  .map((item) => item.split(" "))
  .map((subArr) => [Number(subArr[0]), subArr[1], Number(subArr[2])]);

const clients = ages.map((age, index) => {
  const id = index + 1;
  if (age >= 20) {
    return new Adult(id, age);
  } else {
    return new Minor(id, age);
  }
});

for (let i = 0; i < ordering.length; i++) {
  const clientId = ordering[i][0];
  const order = ordering[i][1];
  const amount = ordering[i][2];

  const client = clients.find((c) => c.id === clientId);

  if (client.isAdult) {
    client.order(order, amount);
  }
}

//結果をresultに代入
function result() {
  const result = clients.map((c) => c.totalAmount);
  return result;
}

//結果を出力
const output = result();
output.forEach((ele) => console.log(ele));


*/
