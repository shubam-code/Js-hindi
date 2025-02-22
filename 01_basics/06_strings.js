const name = "shubam"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf ('t'));

const newString = gameName.substring(0,  4)
console.log(newString);

const anotherstring = gameName.slice(-8,  4)
console.log(anotherstring);

const newStringOne = "     shubam    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubam.com/shubam%20sharma"

console.log(url.replace('%20', '-') )

console.log(url.includes('shubam'));

console.log(gameName.split('-'));




