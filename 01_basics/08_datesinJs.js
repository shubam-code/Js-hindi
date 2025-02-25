// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0, 25)
// let myCreatedDate = new Date(2025, 0, 25, 5, 3)\
let myCreatedDate = new Date("2025-02-25")
let myCreatedDate = new Date("25-02-2025")
console.log(myCreatedDate.toLocaleString());
