class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return '12345';
    }
}

const hitesh = new user("Hitesh");
// console.log(hitesh.createId());         //error we cannnot use static function 

class teacher extends user {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new teacher("Iphone", "iphone@ios.com");
iphone.logMe();         //Username is Iphone
// console.log(iphone.createId());     //error we cannnot use static function 
