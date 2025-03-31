
//dates

let myDate=new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toUTCString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())

// console.log(typeof(myDate))

// let myCreatedDate=new Date(2023, 0, 23)
// let myCreatedDate=new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleDateString())

let myCreatedDate=new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp); //milisecond value
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))//actual date

let newDate=new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())
newDate.toLocaleDateString('dfault',{
   weekday: "long" 
})






