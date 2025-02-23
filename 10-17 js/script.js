// Assignment - 1
// Add Variables Here
let numberOne = "10";
let numberTwo = "20";
// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}  `); // Template Literals Way => 1020
console.log("Add Code Here"); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne} 
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/

// Assignment - 2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// Assignment - 3

console.log(
  '`I\'m In \n\\\\\nLOve \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``'
);

// Assignment - 4 

let a = 21;
let b = 20;
console.log("_" +(a + "_" + b).repeat(4)+ "_");
// _21_2021_2021_2021_20_


// Assignment - 5 array  

let users = ["youssf" , "sara" , "ahmed" , "mohamed"];

for (var i = 0; i < users.length; i++) {
  console.log(users[i]);
}

// Assignment - 6

let productcontainer = [
  {prodname : "product1" , price : 100 , category : 'mobile'},
  {prodname : "product2" , price : 200 , category : 'mobile'},
  {prodname : "product3" , price : 300 , category : 'mobile'},
  {prodname : "product4" , price : 400 , category : 'mobile'},
  {prodname : "product5" , price : 500 , category : 'mobile'},
]

for (var i = 0; i < productcontainer.length; i++) {
  console.log(productcontainer[1].prodname);
  console.log(productcontainer[1].price);
  console.log(productcontainer[1].category);
}