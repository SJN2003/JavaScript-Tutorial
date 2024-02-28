// forEach

const coding = ["Js", "Cpp", "Java", "Python"]

// coding.forEach( function (value) {
//     console.log(value);
// })

// coding.forEach( (value) =>  {
//     console.log(value);
// })


// function printMe(items){
//     console.log(items)
// }
// coding.forEach(printMe)


// coding.forEach( (items, index, arr) =>  {
//     console.log(items, index, arr);
// })



const myCoding = [
    {
        codingLanguage: "JavaScript",
        codingLanguageName: "js"
    },
    {
        codingLanguage: "Java",
        codingLanguageName: "java"
    },
    {
        codingLanguage: "C++",
        codingLanguageName: "cpp"
    }
]

myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.codingLanguage);
    console.log(item.codingLanguageName);
})