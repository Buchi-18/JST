const lines = ["7", "WWWWW"];

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
