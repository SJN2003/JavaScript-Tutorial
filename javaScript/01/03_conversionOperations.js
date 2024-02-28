/*
let s = 33
console.log(typeof(s));     //number


let sc = "33"
console.log(typeof(sc));        //string


let score = "33abc"
console.log(typeof(score));     //string
let value = Number(score)
console.log(typeof(value));     //number
console.log(value);     //NaN --> not in number


let sco = null
console.log(typeof(sco));      //object
let val = Number(sco)
console.log(typeof(val));     //number
console.log(val);             //0


let scor = undefined
console.log(typeof(scor));     //undefined
let vlu = Number(scor)
console.log(typeof(vlu));     //number
console.log(vlu);     //NaN


let scoree = true
console.log(typeof(scoree));        //boolean
let valuee = Number(scoree)
console.log(typeof(valuee));        //number
console.log(valuee);            //1




let isLogIN = 1
console.log(typeof(isLogIN));       //number
let boolIsLogIN = Boolean(isLogIN)
console.log(boolIsLogIN)         // true

// 1 --> true 
// 0 --> false
// "" --> false
// "qwerty" --> true




let someNumber = 123
console.log(typeof(someNumber));       //number
let stringNumber = String(someNumber)
console.log(typeof(stringNumber));      //string
console.log(stringNumber)       //123


*/



// ******************************************** Operations ***********************************

let value = 3
let negValue = -(value)
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)       //2 raise to power 2
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello "
let str2 = "Sujal"
let str3 = str1+str2
// console.log(str3)

// console.log(1 + 2)              //3
// console.log("1" + "2")          //12
// console.log("1" + 2)            //12   
// console.log(1 + "2")            //12
// console.log("1" + 2 + 2)        //122
// console.log("1" + 2 + "2")      //122
// console.log(1 + 2 + "2")        //32

// console.log(true);          //true
// console.log(+true);         //1
// console.log(+"");           //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num3);

let gameCounter = 100
gameCounter++               //100+1
++gameCounter               //101+1
console.log(gameCounter);       //102