let score = "shubam"

// const {score} = req.body // here we dont know whether this is number, string, or any variable
//  console.log(typeof score);
//  console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33"=> 33
// "33abc" => NaN
// true => 1; false => 0

let isloggedIn = "shubam"

let booleanIsLoggedin = Boolean(isloggedIn)
// console.log(booleanIsLoggedin);

// 1=> true; 0 => false
// "" => false
// "shubam" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
// all these dataconversions we have learned  through investigation studies.