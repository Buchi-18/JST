class Employee {
  constructor() {
    this.userArr = [];
  }

  make(num, name) {
    this.userArr.push([num - 1, name]);
  }

  getnum(num) {
    console.log(this.userArr[num - 1][0] + 1);
  }

  getname(num) {
    console.log(this.userArr[num - 1][1]);
  }

  executeCommand(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
      let num = parseInt(inputArr[i][1]);

      switch (inputArr[i][0]) {
        case "make":
          this.make(num, inputArr[i][2]);
          break;
        case "getnum":
          this.getnum(num);
          break;
        case "getname":
          this.getname(num);
          break;
        default:
          console.error("入力値を見直してください");
          break;
      }
    }
  }
}

// const lines = ["3", "make 1 nana", "getnum 1", "getname 1"];
const N = parseInt(lines[0]);
const inputArr = lines.slice(1).map((item) => item.split(" "));

const employee = new Employee();
employee.executeCommand(inputArr);

/* ***** ***** ***** ***** ***** ***** ***** ***** 

const lines = ["3", "make 1 nana", "getnum 1", "getname 1"];
const N = parseInt(lines[0]);
const inputArr = lines.slice(1).map(item => item.split(" "));

let userArr = [];


for (let i = 0; i < inputArr.length; i++) {
  let num = parseInt(inputArr[i][1]) - 1;
  // console.log(num);
  
  switch (inputArr[i][0]) {
    case "make":
      userArr.push([num, inputArr[i][2]])
      break;
    case "getnum":
      console.log(userArr[num][0] + 1);
      break;
    case "getname":
      console.log(userArr[num][1]);
      break;
    default:
      console.error("入力値を見直してください");
      break;
  }
}

上記のJavaScript構文をclass Employeeを使ってリファクタリングしてください

***** ***** ***** ***** ***** ***** ***** ***** */
