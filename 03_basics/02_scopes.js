// var c = 300
let a =300
if (true) {
    let a = 10
    const b = 20
// console.log("Inner: ", a);
}

   


// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const username = "shubam"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
   
    // two()

}

one()

if (true) {
 const username ="shubam"
   if (username === "shubam"){
 const website = " youtube"
//  console.log(username + website);
 
 }
//  console.log(website);
 
}

// console.log(username);
// ++++++++++++++++++++++++++++++++++++++++++++Intersting++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function addone(num){
    return num +1
}

console.log(addone(5))

// console.log(addTwo(5)) we cannot access addTwo before function declaration bcz here a function is decleared under a variable.
const addTwo = function(num){
    return num + 2
}


