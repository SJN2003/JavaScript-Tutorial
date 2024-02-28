// Singleton --> The Singleton Pattern is a design pattern that ensures a class has only one instance while providing a global point of access to that instance
// Object.create


//Object literals

const mySymbol = Symbol("key1")


const jsUser = {
    name: "Sujal",
    "fullName": "Sujal Jamwal",
    [mySymbol]: "myKey1",
    age: 20,
    location: "Palampur",
    email: "sujal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Wed"]
}

console.log(jsUser.email);          //sujal@google.com
console.log(jsUser["email"]);       //sujal@google.com
// console.log(jsUser.fullName);       // give error
console.log(jsUser["fullName"]);       //Sujal Jamwal

console.log(jsUser[mySymbol]);      //myKey1

jsUser.email = "sujaljamwal@google.com"
// Object.freeze(jsUser)

jsUser.email = "nitin@google.com"
console.log(jsUser);
/*
{
  name: 'Sujal',
  fullName: 'Sujal Jamwal',
  age: 20,
  location: 'Palampur',
  email: 'sujaljamwal@google.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Mon', 'Wed' ],
  [Symbol(key1)]: 'myKey1'
}
*/

jsUser.greeting = function(){
    console.log("Hello JS User");
}
// console.log(jsUser.greeting);           //[Function (anonymous)]
console.log(jsUser.greeting());         //Hello JS User


jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greetingTwo);           //[Function (anonymous)]
console.log(jsUser.greetingTwo());         //Hello JS User, Sujal