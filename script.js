var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var A;
var B;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    [A, B] = inputArr[0].split(" ").map((x) => parseInt(x));
  }

  if (lineNumber === 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  //inputArr.shift();
  const n = A;
  const k = B;
  const prices=inputArr[1].split(" ").map(x=>parseInt(x));
  console.log(supermarket(prices,n,k))
  
}

function supermarket(prices, n, k) {
  // write code here
  // do not console.log the answer
  // return sorted array
  const newPrices = prices.sort((a, b) => a - b).slice(2)
 

  let kk = k
  let price = 0;
  let i = 0
  while (kk-- && i < newPrices.length) {
  price += newPrices[i]
  i += 1
  }
  return price
  }