// Dates
let myDate = new Date()
// console.log(myDate);            //2024-01-20T13:36:57.995Z
// console.log(typeof myDate);     //object

// console.log(myDate.toString());             //Sat Jan 20 2024 19:07:50 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());         //Sat Jan 20 2024
// console.log(myDate.toISOString());          //2024-01-20T13:39:41.084Z
// console.log(myDate.toLocaleString());           //20/1/2024, 7:11:03 pm
// console.log(myDate.toLocaleDateString());       //20/1/2024

let newDate = new Date(2024, 0, 22)
// console.log(newDate.toDateString());            //Mon Jan 22 2024

let newCreatedDate = new Date("2024-10-08")
// console.log(newCreatedDate.toLocaleDateString());       //8/10/2024

let myTimeStamp = Date.now()
console.log(myTimeStamp);       //1705758600193

console.log(newCreatedDate.getTime());          //1728345600000

console.log(Math.floor(Date.now()/100))          //17057588434

let todayDate = new Date()
console.log(todayDate.getDate());       //20 
console.log(todayDate.getMonth());      //0 --> jan
console.log(todayDate.getDay());        //6 --> sat

todayDate.toLocaleString("default", {
    weekday: "long",
})