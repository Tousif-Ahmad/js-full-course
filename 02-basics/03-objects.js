// singleton 
// Object.create

// object literals 

let mySym = Symbol("Key1")
const jsUser = {
    name : "Sam",
    "full-name": "Sam khan",
    age : 22,
    [mySym] : "mykey1",
    location : "peshawar",
    email : "sam@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Tuesday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full-name"]);
console.log(jsUser[mySym]);

jsUser.email = "ufeez@gmail.com";
// Object.freeze(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greeting2());