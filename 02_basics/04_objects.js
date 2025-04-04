// const tinderUser = new Object() -> it is a single ton object 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shibu"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email: "somae@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shubam",
            lastname: "Sharma",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// how to combine objects like we did in arrays 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email,
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));




 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shubam"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
    name: "shubam",
    coursename: "js in hindi",
    price: "free"
}
[
    {},
    {},
    {}
]