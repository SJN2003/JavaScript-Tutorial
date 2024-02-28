//  for of

// [" "," " ," "]
// [{}. {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}



// Maps

const map = new Map();
map.set('IN', "India")
map.set('FR', "France")
map.set('AUS', "Australia")
map.set('IN', "India")

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(key, '-->', value);
// }



const myObject = {
    name: "Sujal",
    age: 20
}
for (const [key, value] of myObject) {
    console.log(key, '-->', value);                 //error --> myObject is not iterable
}
