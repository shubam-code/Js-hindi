// for 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");  
    }
    // console.log(element);

}
// isme kya hota hai ki for loop mae aap index declear krte ho fir condition check ki 10 sae chota jb tk tb tk scope mae jo hai execute krvao aur har index value badaye jo until 10. 

// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop value ${i}`);
        // console.log( i + '*' + j + '=' + i*j);
    }
    
}

let myArray = ["flash" , "batman", "superman" ]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("detected 5");
//          break
//     }
    
    
//     console.log(`value of i is ${index}`);
    
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
         continue
    }
    
    
    console.log(`value of i is ${index}`);
    
    
}
