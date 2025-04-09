// Immediately invoked Function Expressions (IIFE) we use it to avoid the main function scope from pollution of global scope 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}` );
    
})('shubam')

