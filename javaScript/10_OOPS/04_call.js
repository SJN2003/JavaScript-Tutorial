function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("Called");
}

function cretaeUser(username, email, password){
    // setUsername(username)       //does not call
    // setUsername.call(username)      //does not call
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new cretaeUser("Chai", "chai@fb.com", "1234")
console.log(chai);