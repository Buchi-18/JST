const lines = ["1", "koko 23 04/10 tokyo","koko 23 04/10 tokyo", "23"];

let userStr = lines.slice(1, -1);
const K = parseInt(lines.slice(-1));
let users = [];

userStr.forEach(function (e) {
  users.push(e.split(" "));
});

users.forEach(function (e) {
  let username = e[0];
  let userOld = parseInt(e[1]);
  if (userOld === K) {
    console.log(username);
  }
});
/* ***** ***** ***** ***** ***** ***** ***** ***** 


***** ***** ***** ***** ***** ***** ***** ***** */
/* ***** ***** ***** ***** ***** ***** ***** ***** 


let userStr = lines.slice(1, -1);
const K = parseInt(lines.slice(-1));
let users = [];

userStr.forEach(function (e) {
  users.push(e.split(" "));
});

users.forEach(function (e) {
  let username = e[0];
  let userOld = parseInt(e[1]);
  if (userOld === K) {
    console.log(username);
  }
});

***** ***** ***** ***** ***** ***** ***** ***** */
/* ***** ***** ***** ***** ***** ***** ***** ***** 

every() メソッドは、列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します。

let arr1 = ["1", "2", "1", "2", "3"]
let arr2 = ["2", "1", "3", "2", "1"]
JSでarr1のそれぞれの文字列と同じものがarr2にあるかどうかの判定

const result = arr1.every(element => arr2.includes(element));
console.log(result);

***** ***** ***** ***** ***** ***** ***** ***** */
/* ***** ***** ***** ***** ***** ***** ***** ***** 

let arr = ["5 10", "5", "6", "25", "4"];
let jamDistance = 0;

let nums = arr[0].split(" ").map((num) => parseInt(num));
let distance = arr.slice(1);
let distanceArray = distance.map((diff) => parseInt(diff));
//基準数
const num = nums[0];
//基準の距離
const standardDistance = nums[1];

distanceArray.forEach((arr) => {
  if (arr > standardDistance) {
    arr = 0
  }
  jamDistance = jamDistance + arr;
  return jamDistance;
});

console.log(jamDistance);

***** ***** ***** ***** ***** ***** ***** ***** */
