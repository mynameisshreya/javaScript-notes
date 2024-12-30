 //for decalaring constant variable
 const accountId=12345 //does not changing
 //for declaring variable there are three method give below
let accountEmail="s@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;
let accountName=null;
//for cahnging the value
accountEmail="p@gmail.com"
accountPassword="45678"
accountCity="pune"
// generating only one output
console.log(accountId);
// generating untiple output 
console.table([accountEmail,accountId,accountPassword,accountCity,accountState,accountName])
/*
not to use var becuse of the issue in block scope and function scope
*/