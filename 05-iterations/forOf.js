// FOR OF LOOP 
const arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}


const greetings = "hello World";
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
}


// MAP 
const map = new Map();
map.set("IN", "India");
map.set("PK", "Pakistan");
map.set("Fr", "France");
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}


// const myObj = {
    // game1 : "NFS",
    // game2 : "Spiderman"
// }

// for (const key of myObj) {
//     console.log(key);
// }




// FOR IN LOOP 
const myObj = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    py : "Python",

}

// for (const key in myObj) {
//     console.log(`${key} is shortcut for ${myObj[key]}`);
// }


// const languages = ["Cpp", "Js", "C++", "Python"];
// for (const key in languages) {
//     console.log(languages[key]);
// }



// FOREACH LOOP
const coding = ["js", "Ruby", "Python", "java", "C++"];
// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js",
    
    },
    {
        languageName : "java",
        languageFileName : "java",
    
    },
    {
        languageName : "python",
        languageFileName : "py",
    
    },

]
// myCoding.forEach((item)=>{
//     console.log(item.languageFileName);
// })