/*
const score = 500
console.log(score);     //500

const balance = new Number(100)
console.log(balance);          //Number: 100]

console.log(balance.toString());            //100
console.log(balance.toString().length);     //3
console.log(balance.toFixed(3));            //100.000

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));        //124

const hundreds = 1000000
console.log(hundreds.toLocaleString());       //10,00,000 ('en-IN')
console.log(hundreds.toLocaleString('en'));       //1,000,000

*/

// *********************** MATHS ****************************

// console.log(Math);          //Object [Math] {}

// console.log(Math.abs(-4));          //4
// console.log(Math.round(4.5));       //5     --> round off value
// console.log(Math.ceil(4.1));       //5      --> next value
// console.log(Math.floor(4.9));       //4     --> previos value

// console.log(Math.min(4,3,5,8,1));       //1
// console.log(Math.max(4,3,5,8,1));       //8

console.log(Math.random())          //prints any value between 0 and 1
console.log(Math.floor(Math.random()*10) + 1)          //prints any value between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);     ////prints any value between 10 and 20