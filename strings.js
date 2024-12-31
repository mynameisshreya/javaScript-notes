const name="shreya"
const repocount=5;
//string interpolation
console.log(`here is my name ${name} and my repocount is ${repocount}`);

const gameName=new String("shreya")
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("e"))
const newString=gameName.substring(0,4);
console.log(newString);
 const anotherString=gameName.slice(-8,4);
 console.log(anotherString);
const newStringOne="      shreya     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://google.com/google%100company";
console.log(url.replace("%100","/"))
console.log(url.includes("google"))
console.log(url.split(":"))