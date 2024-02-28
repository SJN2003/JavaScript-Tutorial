// Array

const numbers = [0, 1 , 2 , 3 , 4]
const myHeros = ["Shaktiman", "Nagraj"]

const myArray = new Array(5, 6, 7, 8)

console.log(numbers);
console.log(myHeros);
console.log(myArray);
console.log(myArray[2]);        //7


// Array Method

myArray.push(10)        //add element in an array
console.log(myArray);       //[ 5, 6, 7, 8, 10 ]

myArray.pop()           // delete last element
console.log(myArray);       //[ 5, 6, 7, 8 ]

myArray.unshift(9)         //add element at first index
console.log(myArray);       //[ 9, 5, 6, 7, 8 ]

myArray.shift()         //delete element at first index
console.log(myArray);       //[ 5, 6, 7, 8 ]


console.log(myArray.includes(9));       //false
console.log(myArray.indexOf(6));       //1

const newArray = myArray.join()
console.log(newArray);              //5,6,7,8
console.log(typeof newArray);       //string



// Slice and splice

console.log("A ", myArray)          //A  [ 5, 6, 7, 8 ]

const myNewArray = myArray.slice(1, 3)
console.log(myNewArray);        //[ 6, 7 ]
console.log("B", myArray);      //B  [ 5, 6, 7, 8 ]


const myNewArr = myArray.splice(1, 3)
console.log(myNewArr);        //[ 6, 7 , 8]
console.log("C", myArray);      //C  [ 5 ]

// What is slice and splice in JavaScript?
// slice returns a piece of the array but it doesn't affect the original array.
// splice changes the original array by removing, replacing, or adding values and returns the affected values.