function user(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._emailemail = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password;
        },
        set: function(value){
            this._password = value;
        }
    })
}

const hitesh = new user("hitesh@chai.com", "hello");
console.log(hitesh.email);          //HITESH@CHAI.COM
console.log(hitesh.password);       //hello