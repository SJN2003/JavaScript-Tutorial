// function sayMyName() {
//     console.log("s");
//     console.log("u");
//     console.log("j");
//     console.log("a");
//     console.log("l");
// }
// sayMyName()


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,5)


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// const result = addTwoNumbers(3,2)
// console.log(result);        //undefined


// function addTwoNumbers(num1, num2){
//     return (num1 + num2);
// }
// const result = addTwoNumbers(3,2)
// console.log(result);        //5


function userLogginMessage(username){
    if(username === undefined){
        console.log("please provide username");
        return
    }
    return `${username} just logged in`
}
// console.log(userLogginMessage("Sujal"))         //Sujal just logged in
// console.log(userLogginMessage());               //undefined just logged in
// console.log(userLogginMessage());                   //please provide username


function ruppeesNotes(...num1) {
    return num1
}
// console.log(ruppeesNotes(100, 200, 500));     //[ 100, 200, 500 ]



const user = {
    name: "Sugar",
    price: 199
}
function handleObject(anyObject) {
    console.log(`Product is ${anyObject.name} and price is ${anyObject.price}`);
}
// handleObject(user)          //Product is Sugar and price is 199

// handleObject({
//     name: "Milk",
//     price: 399
// })                              //Product is Milk and price is 399




const newArray = [2, 3, 5, 1]
function secondValue(getArrayValue){
    return getArrayValue[1]
}
console.log(secondValue(newArray));     //3