// const tinder = new Object(); /* it is a singleton object  */
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
    email : "sam@gmail.com",
    fullName : {
        userFullName : {
            firstName : "sam",
            lastName : "ali",
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1 : "a",
    2 : "b",

}
const obj2 = {
    3 : "c",
    4 : "d",
}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));