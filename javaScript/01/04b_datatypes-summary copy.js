/*
// JavaScript is Dynamically typed language

// Types of datatype
// 1. Premitive datatype (call by value) 
// String, Number, Boolean, null, undefined, Symbol(is used to make value unique), BigInt

const score = 100
const scoreVal = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);      // false

const bigNumber = 123456654646464656565645n


// 2. Non- Premitive datatype (call by reference)
// Arrays, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]

let myOBj = {
    name : "Sujal",
    age : 20,
}

const myFumction = function() {
    console.log("Hello World");
}


// find datatype using typeof
console.log(typeof bigNumber);

*/

// ******************************** MEMORY ***************************************

// Types of memory
// 1. Stack -- >used in primitive datatypes

let myName = "Sujal"
let anotherName = myName
anotherName = "Nitin"

console.log(myName);        //Sujal
console.log(anotherName);   //Nitin

// 2. Heap --> used in non primitive datatypes

let userOne = {
    email: "sujal@getPlaced.com",
    upi: "asd@ybl"
}

let userTwo = userOne

userTwo.email = "nitin@gharKaNaam.com"

console.log(userOne.email);     //nitin@gharKaNaam.com
console.log(userTwo.email);     //nitin@gharKaNaam.com