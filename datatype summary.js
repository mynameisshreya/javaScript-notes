 // primitive
 //7 catgory :String,Number,Boolean, Null, Undefined,Symbol, BidInt
 
 // const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id === anotherId)
// const bigNmuber=54654564665n
// console.log(bigNmuber)

 //refrence type or non-primitive
 //Array, Objects , Functions

 const heros=["ram" ,"lakshman","superman"];
 console.log(heros)
 let myObj={
    name:SharedArrayBuffer,
    age:22,
 }
 console.log(myObj)
 const myFunction=function(){
    console.log("hello world")
 }
 myFunction()
 console.log(typeof heros)
 console.log(typeof myObj)
 console.log(typeof myFunction)
 