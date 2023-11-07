const readline = require("readline").createInterface(process.stdin);

let inputArr = [];
let lineNumber = -1;
let A;
let B;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber === 0) {
    [A, B] = inputArr[0].split(" ").map((x) => parseInt(x));
  }

  if (lineNumber === 1) {
    readline.close();
    logic();
  }
}

function logic() {
  const n = A;
  const k = B;
  const prices = inputArr[1].split(" ").map(x => parseInt(x));
  const totalPrice = supermarket(prices, n, k);

  // Store the cart items in local storage
  localStorage.setItem("cartItems", JSON.stringify(prices));

  console.log(totalPrice);
}

function supermarket(prices, n, k) {
  // Your supermarket logic here
  const newPrices = prices.sort((a, b) => a - b).slice(2);

  let kk = k;
  let price = 0;
  let i = 0;

  while (kk-- && i < newPrices.length) {
    price += newPrices[i];
    i += 1;
  }

  return price;
}
