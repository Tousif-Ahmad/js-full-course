let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
//   console.log("Inner", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

// * node me global scope alag he aur browser me alag he...


function one(){
    const username = "tousif";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);

    // two()
}
// one()

// **************************** INTERESTING *********************************************
console.log(addOne(3));
function addOne(num){     /* normal function */
    return num + 1;
}


// console.log(addTwo(5));
const addTwo = function(num){    /* function expression */
    return num + 2;
}



