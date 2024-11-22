// Closures
// Write a function that uses closures to create a private counter. 
// The counter should have methods to increment,decrement, and retrieve the current value,
// but the value itself should not be directly accessible.
   
//    function clos(){
//     let count = 0;
//     function inc(){
//         count++;
//         };
//         function dec(){
//             count--;
//         };
//         function get(){
//             return count;
//         };
//     return {inc,dec,get}

//    }
// let run = clos()
// console.log(run.inc())
// console.log(run.get())


// Create a function that generates a list of functions, where each function returns its index in the list.
// (For example, if the list has three functions, calling the first function should return 0, the second 1, and so on.)

// function generatefunc(n){
//     let arr = []
//     for(let i = 0; i<n;i++){
//         arr.push(function(){
//             return i-1 });  }
//     return arr};

// let run2 = generatefunc(4)
// //lets assume calling 3 function out of 4 functions
// console.log(run2[3]())



// Write a function that creates a timer using closures. 
// The timer should start at 0, increment by 1 every second, and provide a 
// method to pause and resume the timer.

// function timer(){
//     let count = 0;
//     let paused = false
//     function inc(){if(!paused){
//         count++;
//     }};
//     function pause(){paused = true;};
//     function resume(){paused = false;};
//     function start(){ while(1){
//         setInterval(()=>{
//         console.log(count);
//         inc()
//         console.log(count);
//         },1000);
//         }
//     };
//     return {inc,pause,resume,start}
//         };
//             let run3 = timer()
//             console.log(run3.start())
            // console.log(run3.inc())
            // run3.pause
            // console.log(run3.inc())
            // run3.resume()
            // console.log(run3.inc())
            // console.log(run3.inc())
            // console.log(run3.inc())


// Implement a function that partially applies arguments to another function using closures.
// (For example, const add5 = partial(add, 5); add5(3) should return 8.)

function partial(func,a){
    count = 0
    count = func(a)
    return function (v){
        return func(v);
    }
}
function add(x){
    return count + x;
}

let add5 = partial(add,5)

console.log(add5(3));