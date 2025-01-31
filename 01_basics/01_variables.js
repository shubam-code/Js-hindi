const accountId = 144553
let accountEmail = "shubam@google.com"
var accountPassword = "1234"
accountCity = "Jammu"
let accountState;
// accountId = 2 // not allowed


accountEmail = "sh@sh.com"
accountPassword = "12212"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functonal scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
