// Write a function to merge two deeply nested objects, where properties from the second 
// object overwrite those in the first if there are conflicts. Ensure arrays are concatenated 
// and not overwritten.
obj1 = { a: 1, b: { c: 2, d: [2,24,5]} };
obj2 = { a: 1, b: { c: 2, d: [1,3,5,7,8], e: 5 } };


// function mergeObjects(obj1, obj2) {
//     for (var key in obj2) { 
//         if (obj2.hasOwnProperty(key)) {
//             if (typeof obj2[key] === 'object' && obj2[key] !== null)
//                 obj1[key] = mergeObjects(obj1[key], obj2[key]);
//             else if (Array.isArray(obj2[key])) {
//                 if (Array.isArray(obj1[key])) {
//                     obj1[key] = obj1[key].concat(obj2[key]);
//                     } else
//                     obj1[key] = obj2[key];
//                     } else
//                     obj1[key] = obj2[key];
//                     }
//                     }

// }

const shallowMergedObj = { ...obj1, ...obj2 };
console.log(shallowMergedObj)

// Implement a function that finds all properties in an object whose values are functions and returns their names as an array.
let obj = {correct:"yaay working", dsa: function(){console.log("hello world");},name:null, age:undefined, class:false, grade:0, school:NaN, bio:''}
function getFunctionNames(obj) {
    let funclist = [];
    for (x in obj){
        if (typeof obj[x] === 'function'){
            funclist.push(x);
     }
}
    return funclist;
    }
console.log(getFunctionNames(obj))


// Write a function that removes all properties from an object whose values are falsy (null, undefined, false, 0, NaN, or an empty string).
//let obj = {correct:"yaay working",name:null, age:undefined, class:false, grade:0, school:NaN, bio:''}
function removeFalsy(obj) {
    for (let key in obj) {
        if(obj[key]){
            continue;
        }  
        delete obj[key];}
                return obj;
                }
 console.log(removeFalsy(obj));

// Create a function that calculates the deep difference between two objects. For example, given:

// obj1 = { a: 1, b: { c: 2, d: 3 } };
// obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } };
// The result should be { b: { d: [3, 4], e: [undefined, 5] } }.
// Write a function that converts a flat object to a nested one based on its keys. For example,

// { 'a.b.c': 1, 'a.b.d': 2, 'e': 3 }
// should be converted to:

// { a: { b: { c: 1, d: 2 } }, e: 3 }