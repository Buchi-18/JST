let arr = ["3 8", "3", "4", "5", "6"];

//先頭の配列を抜き出し
//split()メソッドを使用して、スペースで区切られた文字列を配列に分割
//map()メソッドを使って、各要素をparseInt()関数でInt型に変換
let nums = arr[0].split(" ").map((num) => parseInt(num));

//arr配列の２番目以降をdiffStrに代入
let diffStr = arr.slice(1);
//map()メソッドを使って、diffStrの各要素をparseInt()関数でInt型に変換
let diffArray = diffStr.map((diff) => parseInt(diff));

//diffArrayの配列の中身を合算
let totalDiff = diffArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

const vertical = nums[1];
const maxHorizontal = nums[0] * nums[1];

console.log(vertical * (maxHorizontal - totalDiff));

