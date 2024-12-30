 // primitive
 //7 catgory :String,Number,Boolean, Null, Undefined,Symbol, BidInt
 
 // const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id === anotherId)
// const bigNmuber=54654564665n
// console.log(bigNmuber)

 //refrence type or non-primitive
 //Array, Objects , Functions

//  const heros=["ram" ,"lakshman","superman"];
//  console.log(heros)
//  let myObj={
//     name:SharedArrayBuffer,
//     age:22,
//  }
//  console.log(myObj)
//  const myFunction=function(){
//     console.log("hello world")
//  }
//  myFunction()
//  console.log(typeof heros)
//  console.log(typeof myObj)
//  console.log(typeof myFunction)

/*********************************************************************/
//stack(using in primitive datatype) , heap(uisng in non-premitive datatype)\
//in stack we access copy not the orignal value

let myName="shreyatripathi";
let anotherName=myName;
anotherName="satyamtripathi";
console.log(myName)
console.log(anotherName)

//in heap we access the original copy
let userOne={
    email:"shreya@gmail.com",
    upi:"user@ybl"

}
let userTwo=userOne;
//dot use for access the variable
userTwo.email= "shreyatripathi@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)


 