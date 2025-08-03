function sayMyName(){
    console.log("S");
    console.log("a");
    console.log("m");
}
// sayMyName()

// function addTwoNums(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNums(num1, num2){
    return num1 + num2;
}
const res = addTwoNums(2,3)
// console.log(res);


function loginUserMsg(username = "guest"){
    return `${username} just loggedIn`
}
// console.log(loginUserMsg());

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    userName : "sam",
    price : 300,
}

function handleObj(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObj(user)
// handleObj({
//     userName : "tousif",
//     price : 220,
// })

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue([100, 200, 300, 400]));
