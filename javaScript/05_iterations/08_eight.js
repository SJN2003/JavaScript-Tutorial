// reduce

const myNumbers = [1, 2, 3]

// const myTotal = myNumbers.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} avd currVal: ${currVal}`);
//     return acc + currVal
// } ,0)
//console.log(myTotal);     //6


const myTotal = myNumbers.reduce( (acc, currVal) => (acc + currVal), 0)
// console.log(myTotal);       //6


const shoppingCart = [
    {
        course: "JavaScript",
        price: 2999
    },
    {
        course: "Java",
        price: 3999
    },
    {
        course: "Cpp",
        price: 4999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc+item.price), 0)
console.log(priceToPay);