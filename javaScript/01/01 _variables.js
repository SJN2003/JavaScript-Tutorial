const accountId = 12345
let accountEmail = "asdfgh@gmail.com"
var accountPass = "09876"
accountCity = "Jaipur"
let accountState

// accountId = 2           //not allowed

accountEmail = "qwerty@gmail.com"
accountPass = "121212"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope ( scope --> { } )
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPass, accountCity, accountState])
