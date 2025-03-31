const myArr=[1,2,3,4]
//another method of declaration

// const myHeros=["shaktiman","naagraj"]
// const myArr2=new Array(1,2,3,4)

// console.log(myArr[1])

//methods of array

//push pop
// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

//shift unshift

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()
// console.log(myArr)
// console.log(typeof newArr)
// console.log(newArr)


//slice splice
// it does not change the original array and show the range but left the last index number
console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)


// it modify the original value and cut the range part fron original value
const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("c",myArr)
