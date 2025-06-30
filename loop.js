// const arr = [1,2,3,4,5]
// {
//     for(const i of arr)
//     {
//         console.log(i);
        
//     }
// }


//  for of loop
// const str = "hello world"
// for(const i of str){
//     console.log(`Each cahr is ${i}`);
    
// }


// map(give only unique value)
// const map =new Map()
// map.set("In","India")
// map.set("USA","United stste of america")
//  console.log(map);
//  for (const key of map) {
//     console.log(key);
    
    
//  }
//  for (const [key,value] of map) {
//     console.log(key,':-',value);
    
    
//  }

// const myObject={
//     "game1": "NFS"
//     "game2": "WHF"
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
    
// }this is not run because object cannot  be iterate by this way


// const myObject = {
//     js:'javascript',
//     cpp: 'c++',
//     rb: 'ruby'
// }

// for (const key in myObject) //for in loop 
//{
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
   
// }

// const programming = ["js",'hello','py']
// for (const key in programming) {
//     console.log(programming[key])
// }



// const map =new Map()//map is not iteratateable through loop,unique value only,preserve order
// map.set("In","India")
// map.set("USA","United stste of america")
// for (const key in map) {

//     console.log(key);
    
// }
//FOR EACH LOOP
// const coding = ['js','ruby','java']//first way
// coding.forEach((item) => {
//     console.log(item);
// });
// coding.forEach(function (val){//second way
//     console.log(val);
    
// })
// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)//third way
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })
// const myCoding=[
//     {
//         languageName:"javascript",
//         languageFileName:"js"
//     },
//         {
//             languageName:"java",
//             languageFileName:"j"
//         },
//         {
//             languageName:"pythyon",
//             languageFileName:"py"
//         }
// ]
// myCoding.forEach((item)=>{
//     console.log(item.languageName);
    
// })

const coding=['js','ruby','java','python','cpp']//forEach loop always return undefined returned type


const values=coding.forEach((item)=>{
    console.log(item);
    return item
    
})
console.log(values);
