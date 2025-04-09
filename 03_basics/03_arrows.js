const user = {
    username: "shubam",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shubam"
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "shubam"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "shubam"
    console.log(this.username);  
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } these are two ways of declearing a arrow function
// const addTwo = (num1, num2) =>  (num1 + num2) this is implicit return in which we expect to return a value without using return keyword

const addTwo = (num1, num2) =>  ({username: "shubam"})

console.log(addTwo(3, 4))
