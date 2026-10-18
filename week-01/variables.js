"use strict";

let myName = "Martin";

const birthYear = 2004;
const age = new Date().getFullYear() - birthYear;

console.log(`My name is ${myName}. I am ${age} years old.`);

//predicting typeof variables
//string Martin
console.log(typeof myName); 
//age 22
console.log(typeof age);
//1
console.log(typeof true);
//null
console.log(typeof null);
//undefined
console.log(typeof undefined);
//52
console.log(typeof "5" + 2);
//3
console.log(typeof "5" - 2);
//False
console.log(5 == "5");
//True
console.log(5 === "5");