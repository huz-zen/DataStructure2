// Question: Create a Map named student with the following key-value pairs:
const student = new Map([['name', 'huzaifa'],['age', 20], ['grade', 90]]);
// Question: Add a new key subject with the value "Mathematics" to the student map. Answer:
student.set('subject',"Mathematics");
// Question: Retrieve the value associated with the key grade in the student map. Answer:
console.log(student.get('grade'))

// Question: Check if the key age exists in the student map. Answer:
console.log(student.has("age"))

// Question: Remove the key grade from the student map. Answer:
student.delete('grade')
console.log(student)

// Question: Clear all key-value pairs from the student map. Answer:
//student.clear()
console.log(student)

// Question: Create a Map named countryCodes with the following entries:
// US: "United States"
// IN: "India"
// GB: "United Kingdom"
// Use a for...of loop to print all key-value pairs in the map. Answer:
const countryCodes = new Map([['US', "United States"],['IN', "India"],['GB', "United Kingdom"]])
for (X of countryCodes){
    console.log(X)
}
// Question: Use the forEach method to print all keys in the countryCodes map. Answer:

countryCodes.forEach((X,Y)=>{
    console.log(Y)
})

// Question: Get an array of all keys in the countryCodes map using Map.keys. Answer:

const keys = countryCodes.keys()
console.log(keys)

// Question: Get an array of all values in the countryCodes map using Map.values. Answer:

const values = countryCodes.values()
console.log(values)
// Question: Get an array of all key-value pairs in the countryCodes map using Map.entries. Answer:
console.log(countryCodes.entries())


// Question: Use a Set to remove duplicate values from the array [1, 2, 2, 3, 4, 4, 5]. Answer:
// 3, 4, 5]
const array =  [1, 2, 2, 3, 4, 4, 5]
const set = new Set(array)
console.log(set)

// Question: Convert the student map to an object. Answer:
// javascript

const obj = Object.fromEntries(student)
console.log(obj)

// Question: Create a Map from the following object: { name: "Bob", age: 25, city: "Paris" }. Answer:

const temp = { name: "Bob", age: 25, city: "Paris" };
const temp2 = new  Map(Object.entries(temp))
console.log(temp2)
// Question: Write a function getUniqueCharacters that takes a string and returns a Set of unique characters. Answer:

function getUniqueCharacters(str){
    const set = new Set(str);
    return set
}
getUniqueCharacters("Dsadasdccasdas")
