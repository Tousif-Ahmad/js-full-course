// const promiseOne = new Promise(function(resolve, reject){
//     // DO AN ASYNC TASK 
//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve()
//     }, 1000);
// })
// promiseOne.then(function(){
//     console.log("promise consumed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("async task 2 complete");
//         resolve()
//     }, 1000);
// }).then(()=>{
//     console.log("Async 2 resolved");
// })



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({username : "Sam", age : 21})
//     }, 1000);
// })
// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false;
//         if (!error){
//             resolve({username : "ufeez", age : 22})
//         }
//         else{
//             reject("Error : Something went wrong")
//         }
//     }, 1000);
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Finally the promise is either resolve or rejected.");
// })


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true;
//         if (!error){
//             resolve({username : "js", password : "123"})
//         }
//         else{
//             reject("Error")
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()




// // async function getAllUsers() {
// //    try {
// //     let response =  await fetch("https://jsonplaceholder.typicode.com/users");
// //    const data = await response.json();
// //    console.log(data);
// //    } catch (error) {
// //     console.log("Error");
// //    }
// // }
// // getAllUsers()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json();
    
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("Error");
// })


// API CALL EXAMPLE 
// let dataPromise = fetch("https://jsonplaceholder.typicode.com/posts/1");

// dataPromise.then((response=>{
//     return response.json();
// }))
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("Error");
// })

// Promise banake 3 second baad “Time Over” print karo.

// const threeSec = new Promise(function(resolve){
//     setTimeout(() => {
//         resolve("Time Over 😎")
//     }, 3000);
// })
// threeSec.then((msg)=>{
//     console.log(msg);
// })



