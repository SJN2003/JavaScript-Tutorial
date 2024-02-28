const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);      //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][1]);        //Flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);          //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
// console.log(allHeros[3][1]);        //u

// const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros)        //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [5, 6, [0, 1, 2]]]
const newAnotherArray = anotherArray.flat(Infinity)
console.log(newAnotherArray);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 5, 6, 0,
  1, 2
]
*/

console.log(Array.isArray("Sujal"));        //false
console.log(Array.from("Sujal"));           //[ 'S', 'u', 'j', 'a', 'l' ]

console.log(Array.from({name: "Sujal"}));       //[] --> interesting case


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));      //[ 100, 200, 300 ]