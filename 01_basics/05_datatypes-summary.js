// Primitive

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

 const bigNumber = 345676475674676554n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
 let myObject = {
    name: "shubam"
}

const myFunction = function() {
     console.log("Hello World");
}

console.log(typeof myFunction);






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// two types of memory: Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "shubamsharmadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userone = {
     email: "user@google.com",
     upi: "user@ybl"
}

let userTwo = userone

userTwo.email = "shubam@google.com"

console.log(userone.email);
console.log(userTwo.email);


