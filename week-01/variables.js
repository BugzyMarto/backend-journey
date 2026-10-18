"use strict";

let myName = "Martin";

const birthYear = 2004;
const age = new Date().getFullYear() - birthYear;

console.log(`My name is ${myName}. I am ${age} years old.`);

//predicting typeof variables
//string 
console.log(typeof myName); 
//number
console.log(typeof age);
//boolean
console.log(typeof true);
//object
console.log(typeof null);
//undefined
console.log(typeof undefined);
//52
console.log(typeof "5" + 2);
//3
console.log(typeof "5" - 2);
//True
console.log(5 == "5");
//False
console.log(5 === "5");