// this is used for current context

const user = {
    username: "Hitesh",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);       
                                    /*{
                                        username: 'Hitesh',
                                        price: 199,
                                        welcomeMessage: [Function: welcomeMessage]
                                    }*/
    }
}

// user.welcomeMessage()           //Hitesh , welcome to website
// user.username = "Sam"
// user.welcomeMessage()           //Sam , welcome to website

// console.log(this);              //{}


// function chai(){
//     let username = "Chai"
//     console.log(this);
//     console.log(this.username);         //undefined
// }
// chai()



// const chai = function(){
//     let username = "Chai"
//     console.log(this.username);         //undefined
// }
// chai()


// const chai = () => {
//     let username = "Chai"
//     console.log(this.username);         //undefined
// }
// chai()



// () => {}  --->  Arrow function

// const addNumber = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addNumber(3,4));            //7

// const addNumber = (num1, num2) => num1 + num2
// console.log(addNumber(3,4));            //7

// const addNumber = (num1, num2) => (num1 + num2)
// console.log(addNumber(3,4));            //7



const addNumber = (num1, num2) => ({username: "Hitesh"})
console.log(addNumber(3,4));            //{ username: 'Hitesh' }

