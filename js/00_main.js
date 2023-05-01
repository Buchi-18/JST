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

/* ***** ***** ***** ***** ***** ***** ***** ***** 
K = 120の時

K % 50 = H 余り K としたい

***** ***** ***** ***** ***** ***** ***** ***** */
