let name = "Sujal "
let age = 20

// console.log(name + "Jamwal " + age);        //Sujal Jamwal 20

console.log(`Hello my name is ${name} and my age is ${age}`);       //Hello my name is Sujal  and my age is 20

const getName = new String('Nitin-Sujal-Jamwal')

console.log(getName[0]);            //N
console.log(getName.__proto__);     //{}
console.log(getName.length);        //5
console.log(getName.toUpperCase());     //NITIN
console.log(getName.charAt(3));         //i
console.log(getName.indexOf('i'));      //1

const newString = getName.substring(0,4)
console.log(newString);         //Niti

const anotherString = getName.slice(-8,6)
console.log(anotherString);         //in-

const newStringOne = "     Sujal     "
console.log(newStringOne);         //     Sujal     
console.log(newStringOne.trim());       //Sujal

const url = "https://sujal.com/sujal%20jamwal"
console.log(url.replace('%20', '_'))                //https://sujal.com/sujal_jamwal

console.log(url.includes('nitin'));     //false
console.log(url.includes('sujal'));     //true

console.log(getName.split('-'));        //[ 'Nitin', 'Sujal', 'Jamwal' ]
