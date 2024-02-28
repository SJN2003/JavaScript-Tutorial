const user = {
    _email: "chai@piyo.com",
    _password: "hello",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    },

    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password = value;
    }
}

const tea = Object.create(user);
console.log(tea.email);             //CHAI@PIYO.COM
console.log(tea.password);          //HELLO