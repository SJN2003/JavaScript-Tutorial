// Immediately Invoked Function Expression (IIFE)
// function will be immediately executed after it is defined.

//named IIFE
(function chai (){
    console.log(`DB connected`);
}) ();          //DB connected

//Unnammed IIFE
( (name) => {
    console.log(`DB Two connected ${name}`);
}) ('Hitesh');          //DB Two connected Hitesh

