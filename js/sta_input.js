let arr = ["3", "aaaaa,bbbbbb,cccc"];

let loopNumStr = arr.slice(0, 1);
let loopNum = parseInt(loopNumStr);
let output = arr[1].split(",");

for (let i = 0; i < loopNum; i++) {
  console.log(output[i]);
}

/* ***** ***** ***** ***** ***** ***** ***** ***** 




***** ***** ***** ***** ***** ***** ***** ***** */
/* ***** ***** ***** ***** ***** ***** ***** ***** 

カンマで区切られた箇所で改行して文字列を出力
let arr = [ 'aaaaa,bbbbbb,cccc' ];

let strings = arr[0].split(",");

strings.forEach((str) => {
  console.log(str);
});

***** ***** ***** ***** ***** ***** ***** ***** */
/* ***** ***** ***** ***** ***** ***** ***** ***** 

配列の0番目の数字の回数、
半角スペースで区切った文字列を開業して出力
let arr = ["3", "aaaaa bbbbbb cccc"];

let loopNumStr = arr.slice(0, 1);
let loopNum = parseInt(loopNumStr);
let output = arr[1].split(" ");

for (let i = 0; i < loopNum; i++){
  console.log(output[i]);
}

***** ***** ***** ***** ***** ***** ***** ***** */
/* ***** ***** ***** ***** ***** ***** ***** ***** 

半角スペースで区切られた箇所で改行して文字列を出力
let arr = ["aaaaa bbbbbb cccc"];

let strings = arr[0].split(" ");

strings.forEach((str) => {
  console.log(str);
});

***** ***** ***** ***** ***** ***** ***** ***** */
/* ***** ***** ***** ***** ***** ***** ***** ***** 

配列の0番目の数字の回数、配列1番目以降の文字列を出力
let arr = ["3", "aaaaa", "bbbbbb", "cccc"];

let loopNumStr = arr.slice(0, 1);
let loopNum = parseInt(loopNumStr);
let output = arr.slice(1);

for (let i = 0; i < output.length; i++){
  console.log(output[i]);
}

***** ***** ***** ***** ***** ***** ***** ***** */
