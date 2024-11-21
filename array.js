const fruits = ['Apple','Mango','Banana']





// Question: Write code to access the second item in the fruits array. Answer:

// fruits[1]


// Question: Use a forEach loop to print each item in the fruits array. Answer:

// console.log("\n")
// fruits.forEach((item)=>{console.log(item)})

// Question: Add Orange to the end of the fruits array. Answer:

// console.log("\n")
// fruits.push("Orange")

// Question: Remove the first item (Apple) from the fruits array. Answer:
// console.log("\n")
// //fruits.shift(1)
// fruits.splice(0,1)

// Question: Add Grapes to the beginning of the fruits array. Answer:
// console.log("\n")
// fruits.unshift("Grapes")

// Question: Remove the last item (Orange) from the fruits array. Answer:

// console.log("\n")
// fruits.pop()
// console.log("\n")


// Question: Create a new array by adding Cherry and Peach to the existing fruits
// const fruits2 = fruits.concat(['Cherry','Peach'])
// console.log("\n")


// Question: Use splice to remove Banana from the fruits array (assume it is in the second position). Answer:
// fruits.splice(1,1) //for now Mango is at second pos
// console.log("\n")

// Question: Use splice to insert Pineapple at the second position in the fruits array. Answer:

// fruits.splice(1,0,"Pineapple")
// console.log("\n")

// Question: Use slice to create a new array with the first two items of the fruits array. Answer:

// const fruits3 =fruits.slice(0,2)
// console.log("\n")


// Question: Find the index of Mango in the fruits array. Answer:

// fruits.splice(1,0,"Mango")
// fruits.indexOf("Mango")
// console.log("\n")

// Question: Check if Banana exists in the fruits array using includes. Answer:
// fruits.includes("Banana")
// console.log("\n")

// Question: Use find to locate the first fruit in the fruits array that starts with M. Answer:
// console.log(fruits.find((index) => index[0] === 'M'))
// console.log("\n")

// Question: Use filter to create a new array with fruits that have more than 5 letters. Answer:
// const temp = fruits.filter((value)=>{return value.length>5?value:null})
// console.log("\n")

// Question: Sort the fruits array alphabetically. Answer:
// fruits.sort()
// console.log("\n")

// Question: Reverse the fruits array. Answer:
// fruits.reverse()
// console.log("\n")

// Question: Use reduce to create a single string from the fruits array, with items separated by a comma and a space (, ). Answer:
// abc = fruits.reduce((total,value)=> {return total.concat(", "+value)})
// console.log(abc)
// console.log("\n")


// Question: Use map to create a new array where each fruit is in uppercase. Answer:
// const fruitmap = fruits.map((value)=>{return value.toUpperCase()})
// console.log(fruitmap)
// console.log("\n")

// Question: Combine all the methods you've learned to:
//    * Add Kiwi at the start.
//    * Remove Mango from the array.
//    * Sort the remaining fruits alphabetically. Answer:
// fruits.unshift("Kiwi")
// fruits.splice(fruits.indexOf("Mango"),1)
// fruits.sort()
// console.log("\n")




// Bonus Questions
// Question: Flatten a nested array [1, [2, 3], [4, [5, 6]]] using flat. Answer:
// const array = [1,[2,3],[4,[5,6]]]
// console.log(array.flat(2))

// Question: Use join to create a string from the fruits array with items separated by a hyphen (-). Answer:
// let fruitstr = fruits.join("-")
// console.log("/n")
