//  Global Scope
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// ----------------------------------------------------------------------

// local scope
if(true) {
    let a = 100
    var c = 300
    // console.log(a);     //100
}
// console.log(a);      //error because not in scope
// console.log(c);         //300


// *********************************************************************** 

function one(){
    const name = "Sujal"
    function two(){
        const website = "Youtube"
        console.log(name);
    }
    // console.log(website);       //error
    two();
}
one();      //Sujal


if(true){
    const username ="Hitesh"
    if(username === "Hitesh"){
        const website = " Google"
        console.log(username + website);        //Hitesh Google
    }
    // console.log(website);       //error
}
// console.log(username);          //error



// +++++++++++++++++++++++++++++++ Interesting Example +++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}
// prints output 6



console.log(addTwo(10))
const addTwo = function(num) {
    return addTwo + 2
}
// give error 

