//doesn't matter after completion of statement semicolon is mandantory or not
//variable are store in memory using variable name
//it store the value of the variable name
const accountId = 123
/*
    value of const variable can't be change.

    accountId=456  //not allowed
    TypeError: Assignment to constant variable.
*/
let accountEmail = "dinal@gmail.com"
/*

console.log(name)
let name = "Dinal"
ReferenceError: Cannot access 'name' before initialization

let name = "Dinal"
let name = "Pinal"
console.log(name)

let name = "Pinal"
    ^
SyntaxError: Identifier 'name' has already been declared

*/
var accountPassword = 212121
accountCity = "Mumbai"
let accountState; //value is undefined 

accountEmail = "dina@email.com"
accountPassword = 12345
accountCity = "Surat"

console.log(accountId);
/*
    prefer not to use var
    because of issue in block scope and functional scope
    console.log(name)   //output:undefined
    var name = "Dinal"

*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//must be written in []square braces.
//table is method of console.