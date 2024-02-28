/*
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sujal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);        //{ id: '123abc', name: 'Sujal', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    name: {
        fullname: {
            firstname: "Sujal",
            lastname: "Jamwal"
        }
    }
}

// console.log(regularUser.name)       //{ fullname: { firstname: 'Sujal', lastname: 'Jamwal' } }
// console.log(regularUser.name.fullname.firstname)       //Sujal

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)

console.log(obj3);      //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj4);      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = {...obj1, ...obj2}
console.log(obj5);      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user =[
    {
        id: 1,
        email: "nitin@gmail.com"
    },
    {
        id: 1,
        email: "nitin@gmail.com"
    },
    {
        id: 1,
        email: "nitin@gmail.com"
    },
]

user[1].email
console.log(tinderUser);        //{ id: '123abc', name: 'Sujal', isLoggedIn: false }

console.log(Object.keys(tinderUser));       //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));     //[ '123abc', 'Sujal', false ]

console.log(Object.entries(tinderUser));        //[ [ 'id', '123abc' ], [ 'name', 'Sujal' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));       //true


*/

const course = {
    courseName: "javaScript",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);      //Hitesh.
console.log(instructor);            //Hitesh