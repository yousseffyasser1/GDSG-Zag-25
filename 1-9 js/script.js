//  تكليف 2
document.write("<h1>Youssef Yasser Mohamed Gamal</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "50px";
document.querySelector("h1").style.width = "50%";
document.querySelector("h1").style.margin = "auto";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.fontFamily = "Arial";
// تكليف 3 
console.log(
  "%c Youssef %c Yasser %c Mohamed ",
  "color: red; font-size: 50px;",
  "background-color: blue; font-size: 50px;",
  "color: green; font-size: 50px;"
);

//  تكليف 4
// console.log("group 1");
console.group("Group 1");
console.log("meesage 1");
console.log("meesage 2");
console.log("meesage 3");
console.group("mes 2");
console.log("message 2");
console.groupEnd();
console.log("Group 2");
console.groupEnd();
console.group("Group 2");
console.log("Message 22");
console.log("Message 222");
console.log("Message 220");


// تكليف 5
console.table(['Youssef', 'Yasser', 'Mohamed' , 'Gamal']);


// تكليف 6

// Method one by using single comment
// console.log("Iam In Console");
// document.write("Iam In Page");


// Method Two by using multiple comment
/* 
console.log("Iam In Console");
document.write("Iam In Page");
*/