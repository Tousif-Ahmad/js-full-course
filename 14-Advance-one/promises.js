// const promise1 = new Promise(function(resolve, reject){
//     // Do an async task
//     setTimeout(() => {
//         console.log("async task is complete");
//         resolve()
//     }, 1000);
// })
// promise1.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async task 2 resolved");
// })

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({username : "chai", email : "chai@gmail.com"})
//     }, 1000);
// })
// promise3.then(function(user){
//     console.log(user);
// })

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Sam", Password: "sam123" });
//     } else {
//       reject("Error something went wrong");
//     }
//   }, 1000);
// });
// promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log("The promise is either is resolved or rejected");
//   })

const promise5 = function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log({ username: "Sam", Password: "sam123" });
    } else {
      reject("Error : Js Wrong");
    }
  }, 1000);
};
async function consumepromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log("Error");
  }
}
consumepromise5();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//     // console.log(response);
//   } catch (error) {
//     console.log("E", error);
//   }
// }
// getAllUsers();


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//   return response.json()
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//   console.log("error");
// })