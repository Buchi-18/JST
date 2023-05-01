const lines = ["1 1", "koko 23 04/10 tokyo", "1 nana"];
// const lines = [
//   "3 2",
//   "mako 13 08/08 nara",
//   "taisei 16 12/04 nagano",
//   "megumi 14 11/02 saitama",
//   "2 taihei",
//   "3 kimokimoo",
// ];

const N = parseInt(lines[0].split(" ")[0]);
const K = parseInt(lines[0].split(" ")[1]);
const userData = lines.slice(1, 1 + N);
const updateData = lines.slice(1 + N);
let userName;
let updateNum;

for (let i = 0; i < updateData.length; i++) {
  userName = updateData[i].split(" ")[1];
  updateNum = parseInt(updateData[i].split(" ")[0] - 1);

  userData[updateNum] = `${userName} ${userData[updateNum]
    .split(" ")
    .slice(1)
    .join(" ")}`;
}

userData.forEach((item) => {
  console.log(item);
});

// console.log(parseInt(updateData[0].split(" ")[0]));
// console.log(updateData[0].split(" ")[1]);

// const modifiedUserData = userData.map((item) => {
//   const name = item.split(" ")[0];
// });

/* ***** ***** ***** ***** ***** ***** ***** ***** 
const N = parseInt(lines.slice(0, -1));

const userStr = lines.slice(1);

userStr.sort((a, b) => {
  const ageA = parseInt(a.split(" ")[1]);
  const ageB = parseInt(b.split(" ")[1]);
  return ageA - ageB;
});

userStr.forEach((user) => {
  console.log(user);
});
***** ***** ***** ***** ***** ***** ***** ***** */

/* ***** ***** ***** ***** ***** ***** ***** ***** 

const arr = [
  "mako 13 08/08 nara",
  "taisei 16 12/04 nagano",
  "megumi 14 11/02 saitama",
];
上記のデータをJSで下記形式に変えたい
const obj = {
  user:[
  {
    name:mako,
    old:13,
    date:0808,
    location:nara
  },
  ...
  ...
  ]
}

ans...
const arr = [
  "mako 13 08/08 nara",
  "megumi 14 11/02 saitama",
  "taisei 16 12/04 nagano",
];

const ages = arr.map((item) => {
  const [name, age] = item.split(" ").slice(1, 2);
  return parseInt(age);
});

console.log(ages); // [13, 14, 16]

const arr = [
  "mako 13 08/08 nara",
  "taisei 16 12/04 nagano",
  "megumi 14 11/02 saitama",
];
上記のデータのmakoとtaiseiをそれぞれmakimaとtetuoに変換する


const lines = [
  "3",
  "2",
  "mako 13 08/08 nara",
  "taisei 16 12/04 nagano",
  "megumi 14 11/02 saitama",
  "5",
  "taihei",
  "9",
  "megu",
];

眠気
***** ***** ***** ***** ***** ***** ***** ***** */
