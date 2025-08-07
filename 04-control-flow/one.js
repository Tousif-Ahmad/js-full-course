//   IF

const isUserLoggedIn = true;

// const temperature = 41;
// if (temperature < 50){
//     console.log("Less than 50");
// }
// else{
//     console.log("Temperature is greater than 50");
// }

// if (2 !== 2){
//     console.log("Executed");
// }

// const score = 200;
// if (score > 100){
//     const power = "fly";
//     console.log(`user power ${power}`);
// }

// const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test 2");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("Less than 1200");
// }



const UserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (UserLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy Courses");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User LoggedIn");
}