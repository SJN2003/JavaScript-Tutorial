function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2;

// console.log(multiplyBy5(5));        //25
// console.log(multiplyBy5.power);     //2
// console.log(multiplyBy5.prototype);     //{}



function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is : ${this.score}`);
}
const tea = createUser("tea", 20);
const chai = new createUser("chai", 10);

// tea.printMe();      //error if we not use new keyword

chai.increment();
chai.printMe();     //price is : 11


/*

1. Here's what happens behind the scenes when the new keyword is used:

2. A new object is created: The new keyword initiates the creation of a new JavaScript object.

3. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

4. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the constructor,
JavaScript assumes this, the newly created object, to be the intended return value.

5. The new object is returned: After the constructor function has been called,
if it doesn't return a non-primitive value (object, array, function, etc.),
the newly created object is returned.

*/