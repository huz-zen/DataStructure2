// Array + Objects + Sets:
// Write a function that:
// Takes an array of objects and a Set of keys.
// Returns a new array where each object contains only the properties whose keys are in the Set.

// const set = new Set(['product', 'price', 'category']);
// const arr = [
//     { product: 'Laptop', price: 1500, category: 'Electronics', stock: 50 },
//     { product: 'Book', price: 20, category: 'Education', stock: 200 },
//     { product: 'Phone', price: 800, category: 'Electronics', color: 'Black' },
//     { name: 'Chair', material: 'Wood', price: 100, category: 'Furniture' }
// ];

// function filterObjectsBySet(arr, set) {
//     return arr.map(obj => {
//         const filteredObject = {};
//         for (const key in obj) {
//             if (set.has(key)) {
//                 filteredObject[key] = obj[key];
//             }
//         }
//         return filteredObject;
//     });
// }


// const filteredArray = filterObjectsBySet(arr, set);
// console.log(filteredArray);



/// next day for practice

// const recursiveToCamel = item => {
//     if (Array.isArray(item)) {
//       return item.map(el => recursiveToCamel(el));
//     } else if (typeof item === 'function' || item !== Object(item)) {
//       return item;
//     }
//     return Object.fromEntries(
//       Object.entries(item).map(([key, value]) => [
//         key.replace(/([-_][a-z])/gi, c => c.toUpperCase().replace(/[-_]/g, '')),
//         recursiveToCamel(value),
//       ]),
//     );
//   };

//   const obj = {
//     vt_core_random: {
//       user_details: {
//         first_name: "xyz",
//         last_name: "abc",
//         groups: [
//           {
//             id: 1,
//             group_type: "EXT"
//           },
//           {
//             id: 2,
//             group_type: "INT"
//           }
//         ],
//         address_type: {
//           city_name: "nashik",
//           state: {
//             code_name: "MH",
//             name: "Maharashtra"
//           }
//         }
//       }
//     }
//   };

//   console.log(recursiveToCamel(obj))


// const iterate = (obj) => {
//     Object.keys(obj).forEach(key => {

//     if(key.match(/^[a-zA-Z]+([A-Z][a-z]+)+$/))

//     if (obj[key] instanceof Object) {
//             iterate(obj[key])
//         }
//     })
// }


  var cars = {"camelCase":{
    "kebab-case":{
        "snake_case":"Hello"
        }
  }}
iterate(cars)

  