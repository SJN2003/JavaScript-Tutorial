class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}abcd`;
    }
    set password(value){
        this._password = value;
    }
}

const hitesh = new user("abcd@gmail.com", "12345");
console.log(hitesh.email);          //ABCD@GMAIL.COM
console.log(hitesh.password);       //12345abcd