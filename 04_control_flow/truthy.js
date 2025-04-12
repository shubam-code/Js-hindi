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

if (useremail.length === 0) {
    console.log("array is empty");
}
