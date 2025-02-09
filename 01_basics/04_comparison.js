// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
//  make sure before comparison datatype should be same 

// console.log("2" > 1);
// console.log("02" > 1); (here js automatically converts "2"/"02" to a number so the result was true in both case)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  // here null converted to 0 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//  (==) & (===) has different syntax of working, (<, > ) has different syntax of working

// === => it will strict check it will check datatype also 
console.log("2" === 2);
