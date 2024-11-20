// Question: Create a Set named numbers containing the values 1, 2, 3, 4, 5. Answer:

const setnum = new Set([1,2,3,4,5]);
// Question: Add the value 6 to the numbers set. Answer:
setnum.add(6)
// Question: Check if the value 3 exists in the numbers set. Answer:
console.log(setnum.has(3))

// Question: Remove the value 2 from the numbers set. Answer:
setnum.delete(2)

// Question: Clear all values from the numbers set. Answer:
//setnum.clear()


// Question: Create a Set of fruits ['Apple', 'Banana', 'Mango']. Use a for...of loop to print each fruit. Answer:
const fruitsset = new Set (['Apple', 'Banana', 'Mango'])

for (x of fruitsset ){
    console.log(x)
}
// Question: Use the forEach method to print each value in the numbers set. Answer:
setnum.forEach(element => {console.log(element)
});

// Question: Create two sets, setA = [1, 2, 3] and setB = [3, 4, 5]. Find their union. Answer:
const setA = new Set([1,2,3])
const setB = new Set([3,4,5])
const union = new Set([...setA, ...setB]);

// Question: Find the intersection of setA and setB. Answer:

console.log(setA.intersection(setB));

// Question: Find the difference between setA and setB (values in setA but not in setB). Answer:

console.log(setA.difference(setB));
