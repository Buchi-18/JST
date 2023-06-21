// const lines = ["7", "WWWWW"];

function checkBullet(data) {
  const initBullets = data[1];
  const bulletsArr = initBullets.split("");
  const len = bulletsArr.length;

  for (let i = 0; i < len; i++) {
    const last = bulletsArr.pop();
    bulletsArr.unshift(last);
    let allMatch = true;

    for (let j = 0; j < len; j++) {
      if (bulletsArr[j] !== initBullets[j]) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) {
      return i + 1;
    }
  }

  return len;
}

console.log(checkBullet(lines));

/* ***** ***** ***** ***** ***** ***** ***** ***** 

const a = [ 'B', 'W', 'W', 'W', 'B', 'W', 'B' ];
const b = [ 'B', 'W', 'W', 'W', 'B', 'W', 'B' ];
上記の配列の中身順番も含め完全一致するか判定

items = lines.slice(1);
const square = items.map((item) => item.split(""));

function checkCrossCount(square) {
  let crossCount = 0;

  for (let i = 1; i < square.length - 1; i++) {
    const targetArray = square[i];
    const aboveArray = square[i - 1];
    const belowArray = square[i + 1];

    for (let j = 1; j < targetArray.length - 1; j++) {
      const target = targetArray[j];
      const leftTarget = targetArray[j - 1];
      const rightTarget = targetArray[j + 1];
      const aboveTarget = aboveArray[j];
      const belowTarget = belowArray[j];

      if (target === "#" && 
          leftTarget === "#" && 
          rightTarget === "#" && 
          aboveTarget === "#" && 
          belowTarget === "#") {
        crossCount++;
      }
    }
  }
  return crossCount;
}

console.log(checkCrossCount(square));

function checkBullet(data) {
  const initBullets = data[1];
  const bulletsArr = initBullets.split("");
  let shootCount = 0;
  const len = bulletsArr.length;

  for (let i = 0; i < len; i++) {
    let allMatch = true;
    for (let j = 0; j < len; j++) {
      if (bulletsArr[j] !== initBullets[(i + j) % len]) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) {
      return i + 1;
    }
  }
  return len;
}
一回ずつ配列の中身を変更（一番最後の配列を抜き取り、先頭に追加）する処理をつけて改良して？

***** ***** ***** ***** ***** ***** ***** ***** */


// const lines = ["3 4", "###.", "####", ".##."];

items = lines.slice(1);
const square = items.map((item) => item.split(""));

function checkCrossCount(square) {
  let crossCount = 0;

  for (let i = 1; i < square.length - 1; i++) {
    const targetArray = square[i];
    const aboveArray = square[i - 1];
    const belowArray = square[i + 1];

    for (let j = 1; j < targetArray.length - 1; j++) {
      const target = targetArray[j];
      const leftTarget = targetArray[j - 1];
      const rightTarget = targetArray[j + 1];
      const aboveTarget = aboveArray[j];
      const belowTarget = belowArray[j];

      if (target === "#" && 
          leftTarget === "#" && 
          rightTarget === "#" && 
          aboveTarget === "#" && 
          belowTarget === "#") {
        crossCount++;
      }
    }
  }
  return crossCount;
}

console.log(checkCrossCount(square));

/* ***** ***** ***** ***** ***** ***** ***** ***** 
const lines = ["3 4", "##..", "####", ".##."];

items = lines.slice(1);
const square = items.map((item) => item.split(""));

function checkCrossCount(square) {
  let checkArr = [];
  let crossCount = 0;

  for (let i = 0; i < square.length; i++) {
    if (i !== 0 && i !== square.length - 1) {
      const targetArray = square[i];
      const aboveArray = square[i - 1];
      const belowArray = square[i + 1];

      for (let j = 0; j < targetArray.length; j++) {
        
        if (j !== 0 && j !== targetArray.length - 1) {
          const target = targetArray[j];
          const leftTarget = targetArray[j - 1];
          const rightTarget = targetArray[j + 1];
          checkArr.push(
            target,
            leftTarget,
            rightTarget,
            aboveArray[j],
            belowArray[j]
          );
          const allAreHashes = checkArr.every((element) => element === "#");
          if (allAreHashes) {
            crossCount++;
            checkArr = [];
          } else {
            checkArr = [];
          }
        }
      }
    }
  }
  return crossCount;
}

console.log(checkCrossCount(square));


const lines = ["4", "100 100", "50", "120", "110", "90"];

function totalFunds(item) {
  // const N = parseInt(item[0]);
  const M = parseInt(item[1].split(" ")[0]);
  const K = parseInt(item[1].split(" ")[1]);
  const stockPrices = item.slice(2);
  const LastPrice = stockPrices.slice(-1);

  let balance = M; //残金
  let stockPurchase = 0;
  let stockHoldings = 0; //保有株数

  stockPrices.forEach((sp) => {
    sp = parseInt(sp);
    if (sp <= K) {
      if (balance < 0) return;
      stockPurchase = Math.floor(balance / sp);
      stockHoldings = stockHoldings + stockPurchase;
      balance = balance - sp * stockPurchase;
    }

    if (sp > K) {
      if (stockHoldings < 0) return;
      balance = sp * stockHoldings + balance;
      stockHoldings = 0;
    }
  });

  return LastPrice * stockHoldings + balance;
}

console.log(totalFunds(lines));

a === 1
c === 2
d === 3
e === 4
全てtrueだった場合にtrueを返す

['#', '#', '#', '#', '#']
全て"#"だったらtrueを返す

const lines = ['#', '#', '#', '#', '#'],['#', '#', '#', '#', '#'],['#', '#', '#', '#', '#']
1及び2のが何番目にあるか


***** ***** ***** ***** ***** ***** ***** ***** */
