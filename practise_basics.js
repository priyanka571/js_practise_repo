// "use strict";

// // alert (3+3)

// console.log(3+3)

// console.log("priya")
// let score = 33


// console.log(typeof score) 
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")
// console.log(typeof NaN)

// ++++++++++++++++++++declare of String +++++++++++++++++
// const name ="Priya";
// const repo = "50";
// console.log(`hi this is ${name} and my repo is ${repo}`)

// const gameName = new String('Mario')
// console.log(gameName.indexOf('o'))
// const newString = gameName.substring(0,3);
// console.log(newString)
// const newString = gameName.slice(-4,3);
// console.log(newString)
// const name ="    Priya    ";
// console.log(name.trim());



// ++++++++++++Replace+++++++
// const url= "https:/hitesh.com/hitesh%20choudhary"
// const S1 = "Hello my name is priyanka";
// console.log(S1.split(' '))

// +++++++++Number+++++++++
// const score = new Number(100)
// console.log(score.toFixed(2));

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3))
 
// const hundred = 1000000
// console.log(hundred.valueOf())

// const min = 10;
// const max = 20
// console.log(Math.floor(Math.random()*(max-min+1))+min)

// ++++++++++Dates
// let myDate = new Date()
// console.log(myDate.toString)
// console.log(myDate.toDateString)
// console.log(myDate.toLocaleString)
// console.log(typeof myDate)


// let myCreatedDate = new Date("2024-1-14")
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

 let newDate = new Date()
//  console.log(newDate.getDay())
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))
