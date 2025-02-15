// Assignment - 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(100*1000); // 100000
console.log(1e6 / 1e1); // 100000
console.log(10**5); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(2e5 - 1e5); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.round(99999.9)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.trunc(100000.9)); // 100000

// Assignment - 3

console.log("MAS_SAFE_INTEGER".length);
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// Assignment - 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// Assignment - 5

let num = 10;

console.log(Number.isInteger(num) + true ); // 2

// Assignment - 6


let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt));
console.log(+flt.toFixed(false)); // 10
console.log(Math.ceil((flt - true))); // 10


// Assignment - 7

console.log(Math.ceil(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4