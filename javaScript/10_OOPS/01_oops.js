const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);             //hitesh
// console.log(user.getUserDetails());     //Got user details from database
// console.log(this);          //{}



function student(username, loggedCount, isLoggedIn){
    this.username = username;
    this.loggedCount = loggedCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome, ${this.username}`);
    }

    return this;                //if we dont return then also value will print here return is implicitly defined
}
const userOne = new student("Sujal", 5, true);
const userTwo = new student("ChaiaurCode", 10, false);
// console.log(userOne);       //student { username: 'Sujal', loggedCount: 5, isLoggedIn: true }
// console.log(userTwo);       //student { username: 'ChaiaurCode', loggedCount: 10, isLoggedIn: false }
console.log(userOne.constructor);       //[Function: student]
