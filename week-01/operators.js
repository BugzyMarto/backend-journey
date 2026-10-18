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
//true, 2 is compared to 1 following dictionary order
console.log("2" > "12");
//true, special case, null is only equal to undefined
console.log(null == undefined);
//false, different types
console.log(null === undefined);
//true, null is converted to zero and 0 is equal to 0
console.log(null >= 0);
//false, NaN is not equal to anything, even itself
console.log(NaN === NaN);

//false, 1 as compared to 9 in dictionary order is less than 9
console.log("10" > "9");
//true, string "10" is converted to number 10 and 10 is greater than 9
console.log("10" > 9);
//true, not a number is converted to NaN and NaN is not equal to anything, even itself
console.log(Number.isNaN(NaN));
//false, undefined is not equal to anything, even itself
console.log(undefined == 0);