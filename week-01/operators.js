//6, following PEMDAS, multiplication is done first
console.log(2 + 2 * 2);
//1, remainder
console.log(10 % 3);
//8, 2 to power 3
console.log(2 ** 3);

let n = 5;

//5, postfix increment, returns old value, then increments
console.log(n++);
//6
console.log(n);
//7, prefix increment, increments first, then returns new value
console.log(++n);

//true, 2 is greater than 1
console.log(2 > 1);
//false, due to conversion string to number conversion, 2 is not  greater than 12
console.log("2" > "12");
//true, special case, null is only equal to undefined
console.log(null == undefined);
//false, different types
console.log(null === undefined);
//true, null is zero and 0 is equal to 0
console.log(null >= 0);
//true , both are falsy values, so they are equal
console.log(NaN === NaN);