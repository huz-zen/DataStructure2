const person = {name : "John",
    age : 30,
    city : "New York"};

// temp = person.name
// person.isMarried = false
// delete person.city
// person.greet=()=>{console.log(`Hello,My name is ${person.name}`) }
// person.greet()
// for (x in person){
//     console.log(x)
// }
// for (x in person){
//     console.log(person[x])
// }
// const {name,age} = person;
// const {gender:gender = "GENDER",city: city = "CITY"} = person
// const newobj = {...person,grade:"A"}

// obj1 = { a: 1, b: 2 }
// obj2 = { b: 3, c: 4 }
// const newobj2 = {...obj1 ,...obj2}

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// console.log('age' in person)
// console.log(Object.hasOwn(person,"isMarried"))
// Object.freeze(person,"age");
// person.age = 3

// Object.seal(person)

// person.salary = 15000

// newperson = JSON.parse(JSON.stringify(person))
const books = [{title:"create javascript app",price:10,author:"huzaifa"},{title:"create html page",price:300,author:"Ali"}]
// const test = books.filter((value)=>{return value.price>150})
// const mapping = books.map((value)=>{return value.title})
// console.log(mapping)
// const reducetest = books.reduce((total,value)=>{
//     return total.price+value.price
// })


//Bonus

// for ( x of books){
//     console.log(`title : ${x.title} author: ${x.author}`)
// }

// function updateAge(obj,age){
//     obj.age = age;
//     return obj
// }

// console.log(updateAge(person,4));