// object literal 
// const user = {
//     username : "ali",
//     loginCount : 8,
//     signIn : true,
//     getUserDetails : function(){
        // console.log("got user details from database");
        // console.log(`username : ${this.username}`);
        // console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// CONSTRUCTOR FUNCTION
// const promise1 = new Promise()

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}
const userOne = new user("Sam", 11, true);
const userTwo = new user("ufeez", 8, false)
console.log(userOne);
console.log(userTwo);