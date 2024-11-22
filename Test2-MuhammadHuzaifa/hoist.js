// Explain the difference in hoisting behavior between var, let, and const with an example. 
// How would you demonstrate these differences in a real-world use case?
// What will the following code output, and why?

// var is global and function scope 
// and let and const are block scoped

function f1(){
    var x = 10;
}

// console.log(a);
// var a = 10;
// let b = 20;
// console.log(b);

//output
//undefined
//20

// var variable if declared/intialized after being called.
// it would be hoisted(moved to top of code before compilation)
// so that is why a is recognized as declared by compiler but not inititalized to any value hence 
// given undefined and since let variable b is called after being initialized and declared it
// works perfectly


// Modify the code so that it doesn’t throw an error or print undefined.

// var a = 10;
// console.log(a);
// let b = 20;
// console.log(b);


// Write a function that demonstrates hoisting by declaring both a function and a variable with 
// the same name. Explain the output when the function is called.

// q3()
// function q3(){
//     var q3in=3;
//      function q3in(){
//         console.log("in a q3in func");
//     }
//     q3in();
//     console.log(q3in)
    
// }

// What is the scope of variables declared with var, let, and const when
// used inside loops? Provide an example that uses hoisting to illustrate your explanation.


// while(1){
//     var x = 10;
//     let y = 20;
//     const z =32;
//     break;
// }
// console.log(x)
// console.log(y)
// console.log(z)

// output gives y not defined and also for z not defined which proves they are block scoped
// whereas x which i var is not also to notice z was also requiring assignment to be declared


//var can be used outside as it only function scoped and global scope(lexical scope)
//let and const can be used inside the loop only as they are block scoped

// How does function expression hoisting differ from function 
// declaration hoisting? Write code to demonstrate the difference.
// function expression hoisting is different from function declaration hoisting

// function expression act differently compared to function declaration
// function expression is only hoisted to the top of the code but not initialized
// function declaration is hoisted to the top of the code and initialized as well

// dec()
// console.log(exp)

// function dec(){
// console.log("dec func runing")
// }

// var exp = ()=>{
//     console.log("exp not running")
// }

//hence both get hoisted but expression is undefined and func declaration is hoisted and can be run.
