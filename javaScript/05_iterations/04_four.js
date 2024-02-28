//  for in
const myObject = {
    name: "Sujal",
    age: 20,
    email: "sujal@placedsoon.com"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} is ${myObject[key]}`);
}


const arr = [1, 2, 3, 4, 5]
for (const num in arr) {
    // console.log(num);
    // console.log(`value is ${arr[num]} at index ${num}`);
}



const map = new Map();
map.set('IN', "India")
map.set('FR', "France")
map.set('AUS', "Australia")
map.set('IN', "India")

// console.log(map);

for (const key in map) {
    console.log(key);
}
//we cant use map in iterators

