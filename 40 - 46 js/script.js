// Assignment - 1 

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1

console.log(myFriends.slice( false , num )); // ["Ahmed", "Elham", "Osama"];

// Method 2

console.log(myFriends.slice( myFriends.indexOf("Ahmed") , num )); // ["Ahmed", "Elham", "Osama"];

// Method 3

myFriends.pop(); 
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 4

console.log(myFriends.slice( -myFriends.lastIndexOf("Gamal") - true , num )); // ["Ahmed", "Elham", "Osama"];

// Method 5 

console.log(myFriends.splice( false , num )); // ["Ahmed", "Elham", "Osama"];

// Assignment - 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.shift();

friends.pop();

console.log(friends); // ["Eman", "Osama"]

// Assignment - 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr  = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Assignment - 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][+false].slice(website.length).toUpperCase()); // ZERO


// Assignmnet - 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// Method 1 

if (haystack.includes(needle)) {
    console.log("Found");
}

// Method 2 

if (needle === haystack[1]) {
    console.log("Found");
}

// Method 3 

if (needle === haystack.slice(1,2).join()) {

    console.log("Found");
}

// Assignment - 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = arr1.concat(arr2).sort()

allArrs = allArrs.slice( arr2.length).join("").toLowerCase();

console.log(allArrs); // fxy

