// immediately invoked function expression 

// function chai(){
//     console.log("DB Connected");
// }
// chai()


// (function chai(){
//     console.log("DB Connected");
// })()

// ()  function definition 
// () function calling 

// why use  iife => global scope ke pollution/ problem (variables hatane ke liye ) se bachne ke liye iife ka use hota he 

// ( ()=>{
//     console.log("DB Conected");
// }) ()



// ( function aurCode(){
//     console.log("DB Connected");
// }) ();

( (name)=>{
    console.log(`DB Connected ${name}`);
}) ("ali")
