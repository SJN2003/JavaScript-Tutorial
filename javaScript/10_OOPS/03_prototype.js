// let myName = "Hitesh     ";

// // console.log(myName.length);             //11
// // console.log(myName.trim().length);      //6

// console.log(myName.trueLength);



let myHeros = ["Thor", "Spiderman"];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh();     //Hitesh is present in all objects
// myHeros.hitesh();       //Hitesh is present in all objects
// myHeros.heroPower();        //error doesnot have access
// myHeros.heyHitesh();        //Hitesh says hello



// Inheritance

const user = {
    name: 'Hitesh',
    email: 'chai@gmail.com'
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const techSupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user;

//morden syntax
Object.setPrototypeOf(teachingSupport, teacher);




let anotherUsername = 'ChaiAurCode     ';
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength();
"hitesh".trueLength();
"Sujal".trueLength();