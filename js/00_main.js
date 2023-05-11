// const lines = ["4", "make 3 nana", "getnum 1", "change_num 1 5", "getnum 1"];
const lines = [
  "12",
  "make 2742 makoto",
  "getnum 1",
  "make 2782 taro",
  "getname 1",
  "getname 2",
  "change_num 2 9927",
  "change_name 1 mako",
  "getnum 2",
  "make 31 meu",
  "change_name 3 meumeu",
  "getnum 3",
  "getname 1",
];
// 2742
// makoto
// taro
// 9927
// 31
// mako
// const lines = [
//   "7",
//   "make 2742 mako",
//   "getnum 1",
//   "make 2782 taisei",
//   "getname 2",
//   "make 31 megumi",
//   "getname 1",
//   "getname 3",
// ];

class Employee {
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }
  getnumber() {
    return this.number;
  }
  getname() {
    return this.name;
  }

  change_num(newNum) {
    this.number = newNum;
  }
  change_name(newName) {
    this.name = newName;
  }
}

const n = Number(lines[0]);
const inputArr = lines.slice(1).map((item) => item.split(" "));
const employees = [];

for (let i = 0; i < inputArr.length; i++) {
  const userNum = Number(inputArr[i][1]);
  switch (inputArr[i][0]) {
    case "make":
      const userName = inputArr[i][2];
      employees.push(new Employee(userNum, userName));
      break;
    case "getnum":
      console.log(employees[userNum - 1].getnumber());
      break;
    case "getname":
      console.log(employees[userNum - 1].getname());
      break;
    case "change_num":
      const newNum = Number(inputArr[i][2]);
      employees[userNum - 1].change_num(newNum);
      break;
    case "change_name":
      const newName = inputArr[i][2];
      employees[userNum - 1].change_name(newName);
      break;
    default:
      console.error("入力値に誤りがあります");
      break;
  }
}

// case "change_num":
//   employees[userNum - 1].getname() = 7
//   console.log(employees[userNum - 1]);
//   break;
// 入力に応じた処理を行う
// for (let i = 1; i <= n; i++) {
//   const [command, userNum, username] = lines[i].split(" ");
//   const number = Number(userNum);
//   if (command === "make") {
//     const name = username;
//     employees.push(new Employee(number, name));
//   } else if (command === "getnum") {
//     console.log(employees[number - 1].getnumber());
//   } else if (command === "getname") {
//     console.log(employees[number - 1].getname());
//   }
// }
