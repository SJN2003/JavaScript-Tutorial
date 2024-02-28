class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chaiAurCode = new teacher("ChaiAurCode", "chai@teacher.in" ,"123")
chaiAurCode.addCourse()             //A new course was added by ChaiAurCode

const masalaChai = new user("MasalaChai");
masalaChai.logMe();         //Username is MasalaChai
// masalaChai.addCourse();      //error


console.log(chaiAurCode === masalaChai);         //false
console.log(chaiAurCode === teacher);           //false
console.log(chaiAurCode instanceof teacher);    //true