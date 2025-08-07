// MAP 
const nums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = nums.map((num)=>{
//     return num + 10;
// })
// console.log(newNums);

const newNums = nums
// .map((num) => num * 10)
// .map((n)=> n + 1)
// .filter((num) => num >= 40)
// console.log(newNums);



//  REDUCE METHOD 
// const myNums = [1,2,3];
// const sum = myNums.reduce((acc, currVal)=>{
//     console.log(`acc : ${acc} and CurrentVal : ${currVal}`);
//     return acc + currVal;
// }, 0)
// console.log(sum);


const shoppingCart = [
    {
        itemName : "js Course",
        price : 999,
    },
    {
        itemName : "py Course",
        price : 1099,
    },
    {
        itemName : "c++ Course",
        price : 2999,
    },
]
const total = shoppingCart.reduce((acc, item) =>{
    return acc + item.price;
}, 0)
console.log(total);