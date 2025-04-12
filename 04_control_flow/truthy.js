const useremail = []

if (useremail) {
    console.log("got user email");
} else{
    console.log("don't have user email");
}

//  there are some values which we asssume true or false so called truthy / falsy values

// falsy vaues
// 0, -0, "", BigInt 0n , Null , undefined , NaN rest are truthy values

// how to check a aaray is empthy or not

// if (useremail.length === 0) {
//     console.log("array is empty");
// }

// how to check object is empty or not

 const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}    
// if we write an object like object.keys toh hume iski keys jo hongi voh ek array ki form mae milegi then we can check this by using length property if its zero the code will be conducted.

// Nullish coalescing operator (??): Null , Undefined
 let val1;
//  val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? undefined ?? 20


 console.log(val1);

//  Terniary operator
 
// condition ? True : False

const IceTeaPrice = 100

IceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")


