const user = {
    username : "sam",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username} welcome to website`);   /* here this keyword  is used for current context */
        // console.log(this);
    }
    
}
// user.welcomeMsg()
// user.username = "ali";
// user.welcomeMsg()

// console.log(this);


// function chai(){
//     const username = "ali"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     const username = "ali";
//     console.log(this.username);
// }
// chai()


// ************************ arrow functions ****************************

// const chai = ()=>{
//     const username = "ali";
//     console.log(this);
// }
// chai()


// const addTwo = (num1, num2)=>{
//     return num1 + num2;
// }
// console.log(addTwo(5,5));

// IMPLICIT RETURN 
// const addTwo = (num1, num2) =>  num1 + num2;

const addTwo = (num1, num2) =>  (num1 + num2);

console.log(addTwo(5,5));
