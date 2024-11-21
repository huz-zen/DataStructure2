// Write a function that takes two sets and returns their symmetric difference (elements in either set but not both).

const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); 

// Given a  Map, implement a function to group its values based on a callback function. For example, given:
// map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// callback = (val) => val % 2 === 0;
// The result should be { true: ['b'], false: ['a', 'c'] }.

map = new Map([['a', 1], ['b', 2], ['c', 3]]);map = new Map([['a', 1], ['b', 2], ['c', 3]]);

function check(map){
let bool = new Map()
for (x of map){
    console.log(x)
    if (x[1]%2===0){
        bool.set(true, [...bool.get(true) || [], x[0]])
    }
    else{
        bool.set(false, [...bool.get(false) || [], x[0]])
    }
}
 return bool}
console.log(check(map))


//  map = new Map([['a', 1], ['b', 2], ['c', 3]]);map = new Map([['a', 1], ['b', 2], ['c', 3]]);
//  array = Array.from(map)
//  console.log(array)
//  callback = (val) => val % 2 === 0;
// console.log(Map.gr(array,callback))


// Write a function to flatten a deeply nested Map into an object with dot notation. For example, given:

// map = new Map([['a', new Map([['b', new Map([['c', 1]])]])]]);
// The result should be { 'a.b.c': 1 }.
// Implement a function that checks if a Set is a subset of another Set.
// Write a function to create a bidirectional Map (i.e., a Map where keys can be looked up by values and vice versa). Ensure it handles duplicate entries gracefully.
