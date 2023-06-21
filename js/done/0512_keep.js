import { lines2, ans2} from "./0512_lines.js";
// const lines = [
//   "3 5",
//   "19",
//   "43",
//   "22",
//   "2 0",
//   "2 food 4333",
//   "1 0",
//   "2 0",
//   "1 food 4606",
// ];
// // 4606
// // 5133
// // 0
// const lines = [
//   "5 10",
//   "1",
//   "13",
//   "31",
//   "74",
//   "34",
//   "1 food 1088",
//   "4 alcohol 3210",
//   "1 alcohol 599",
//   "2 alcohol 602",
//   "2 softdrink 4375",
//   "4 food 1752",
//   "2 0",
//   "5 alcohol 4565",
//   "3 0",
//   "2 0",
// ];
// 1088
// 4375
// 500
// 4762
// 4565
const lines = lines2
const ans = ans2

const n = Number(lines[0].split(" ")[0]);
const k = Number(lines[0].split(" ")[1]);
const HowOld = lines.slice(1, n + 1).map(Number);
const ordering = lines
  .slice(n + 1)
  .map((item) => item.split(" "))
  .map((subArr) => [Number(subArr[0]), subArr[1], Number(subArr[2])]);

const result = [];

class UnderTwenty {
  constructor(num, ordering) {
    this.ordering = ordering;
    this.clientNum = num;
    this.clientOrder = [];
    this.clientAmount;
  }
  getTotalAmount() {
    this.clientAmount = 0;
    this.clientOrder = this.ordering.filter((subArr) =>
      subArr.some((n) => n === this.clientNum)
    );

    this.clientOrder.forEach((order) => {
      if (order[1] !== "alcohol" && order[1] !== "0") {
        this.clientAmount += order[2];
      }
    });
    return this.clientAmount;
  }
}

class OverTwenty extends UnderTwenty {
  getTotalAlcoholAmount() {
    this.clientAmount = 0;
    this.clientOrder = this.ordering.filter((subArr) =>
      subArr.some((num) => num === this.clientNum)
    );
    const isAlcohol = this.clientOrder.some(
      (subArr) => subArr[1] === "alcohol" || subArr[1] === "0"
    );
    if (isAlcohol) {
      this.clientOrder.forEach((order) => {
        if (order[1] === "food") {
          order[2] -= 200;
        }
        if (order[1] === "0") {
          order[2] = 500;
        }
      });
    }
    this.clientOrder.forEach((order) => {
      this.clientAmount += order[2];
    });

    return this.clientAmount;
  }
}

for (let i = 0; i < HowOld.length; i++) {
  let num = i + 1;
  if (HowOld[i] < 20) {
    result.push(new UnderTwenty(num, ordering).getTotalAmount());
  } else {
    result.push(new OverTwenty(num, ordering).getTotalAlcoholAmount());
  }
}

// result.forEach((res) => console.log(res));

console.log(result.length);
console.log(ans.length);


for (let index = 0; index < result.length; index++) {
  if (result[index] === ans[index]) {
    // console.log(`${index} : ${ans[index]} -- ${result[index]}`);
    console.log(true);
  } else {
    console.log("false");
  }
}

/*




import { lines, ans } from "./0512_lines.js";


const n = Number(lines[0].split(" ")[0]);
const k = Number(lines[0].split(" ")[1]);
const HowOld = lines.slice(1, n + 1).map(Number);
const ordering = lines
  .slice(n + 1)
  .map((item) => item.split(" "))
  .map((subArr) => [Number(subArr[0]), subArr[1], Number(subArr[2])]);

const result = [];

class UnderTwenty {
  constructor(num, ordering) {
    this.ordering = ordering;
    this.clientNum = num;
    this.clientOrder = [];
    this.clientAmount;
  }
  getTotalAmount() {
    this.clientAmount = 0;
    this.clientOrder = this.ordering.filter((subArr) =>
      subArr.some((n) => n === this.clientNum)
    );

    this.clientOrder.forEach((order) => {
      if (order[1] !== "alcohol") {
        this.clientAmount += order[2];
      }
    });
    return this.clientAmount;
  }
}

class OverTwenty extends UnderTwenty {
  getTotalAlcoholAmount() {
    this.clientAmount = 0;
    this.clientOrder = this.ordering.filter((subArr) =>
      subArr.some((num) => num === this.clientNum)
    );
    const isAlcohol = this.clientOrder.some(
      (subArr) => subArr[1] === "alcohol"
    );
    if (isAlcohol) {
      this.clientOrder.forEach((order) => {
        if (order[1] === "food") {
          order[2] -= 200;
        }
      });
    }
    this.clientOrder.forEach((order) => {
      this.clientAmount += order[2];
    });

    return this.clientAmount;
  }
}

for (let i = 0; i < HowOld.length; i++) {
  let num = i + 1;
  if (HowOld[i] < 20) {
    result.push(new UnderTwenty(num, ordering).getTotalAmount());
  } else {
    result.push(new OverTwenty(num, ordering).getTotalAlcoholAmount());
  }
}

result.forEach((res) => console.log(res));

// for (let index = 0; index < result.length; index++) {
//   if (result[index] === ans[index]) {
//     console.log(`${index} : ${ans[index]} -- ${result[index]}`);
//     console.log(true);
//   } else {
//     console.log("false");
//   }
// }



*/
