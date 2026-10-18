//42
console.log(Number("42"));
//NaN
console.log(Number("Hello"));
//1
console.log(Number(true));
//NaN
console.log(Number(undefined));
//1231
console.log(String(123)+1);
//false
console.log(Boolean(0));
//true
console.log(Boolean("0"));

//0
console.log(Number(null));
//0
console.log(Number(""));
//7
console.log(Number(" 7 "));
  
//20
console.log("10" * "2");
//1055
console.log("10" + 5 + 5);
//1010
console.log(5 + 5 + "10");
//true
console.log(Boolean(" "));
//true
console.log(Boolean("false"));
//true
console.log(Boolean([]));
//true
console.log(Boolean({}));
//false
console.log(Boolean(NaN));