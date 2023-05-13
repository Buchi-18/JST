// import { lines2, ans2} from "./0512_lines.js";
const lines = ["2 3", "20", "30", "1 0", "2 0", "1 A"];


const n = Number(lines[0].split(" ")[0]);
const k = Number(lines[0].split(" ")[1]);
const HowOld = lines.slice(1, n + 1).map(Number);
const ordering = lines
  .slice(n + 1)
  .map((item) => item.split(" "))
  .map((subArr) => [Number(subArr[0]), subArr[1], Number(subArr[2])]);

const result = [];
const leaving = [];
// console.log(ordering);
// const str = num.filter(item => item[1] === "A");
class UnderTwenty {
  constructor(num, ordering) {
    this.AllOrder = ordering.filter((item) => item[1] !== "A");
    this.leave = ordering.filter((item) => item[1] === "A");
    this.clientNum = num;
    this.clientOrder = [];
    this.clientAmount;
  }

  getTotalAmount() {
    this.clientAmount = 0;
    this.clientOrder = this.AllOrder.filter((subArr) =>
      subArr.some((n) => n === this.clientNum)
    );

    this.clientOrder.forEach((order) => {
      if (order[1] !== "alcohol" && order[1] !== "0") {
        this.clientAmount += order[2];
      } else {
        this.clientAmount += 0;
      }
    });
    return [this.clientAmount, this.leave];
  }
}

class OverTwenty extends UnderTwenty {
  getTotalAlcoholAmount() {
    this.clientAmount = 0;
    this.clientOrder = this.AllOrder.filter((subArr) =>
      subArr.some((num) => num === this.clientNum)
    );

    const isAlcohol = this.clientOrder.some(
      (subArr) => subArr[1] === "alcohol" || subArr[1] === "0"
    );
    if (isAlcohol) {
      this.clientOrder.forEach((order) => {
        switch (order[1]) {
          case "food":
            order[2] -= 200;
            break;
          case "0":
            order[2] = 500;
            break;
        }
      });
    }
    this.clientOrder.forEach((order) => {
      this.clientAmount += order[2];
    });

    return [this.clientAmount, this.leave];
  }
}

for (let i = 0; i < HowOld.length; i++) {
  let num = i + 1;
  if (HowOld[i] < 20) {
    result.push(new UnderTwenty(num, ordering).getTotalAmount()[0]);
    leaving.push(new UnderTwenty(num, ordering).getTotalAmount()[1]);
  } else {
    result.push(new OverTwenty(num, ordering).getTotalAlcoholAmount()[0]);
    leaving.push(new UnderTwenty(num, ordering).getTotalAmount()[1]);
  }
}

console.log(result);
console.log(leaving);

/*
 */
