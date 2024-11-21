// Array + Objects + Sets:
// Write a function that:
// Takes an array of objects and a Set of keys.
// Returns a new array where each object contains only the properties whose keys are in the Set.

const set = new Set(['product', 'price', 'category']);
const arr = [
    { product: 'Laptop', price: 1500, category: 'Electronics', stock: 50 },
    { product: 'Book', price: 20, category: 'Education', stock: 200 },
    { product: 'Phone', price: 800, category: 'Electronics', color: 'Black' },
    { name: 'Chair', material: 'Wood', price: 100, category: 'Furniture' }
];

function filterObjectsBySet(arr, set) {
    return arr.map(obj => {
        const filteredObject = {};
        for (const key in obj) {
            if (set.has(key)) {
                filteredObject[key] = obj[key];
            }
        }
        return filteredObject;
    });
}


const filteredArray = filterObjectsBySet(arr, set);
console.log(filteredArray);
