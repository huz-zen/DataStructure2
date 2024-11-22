// Arrays
// Write a function to find the kth smallest element in an unsorted array without sorting the entire array.
// (Hint: Use a variation of the Quickselect algorithm.)

//let arr1 = [ 10, 4, 5, 8, 6, 11, 26 ] 
let arr1 = [8,12,3,5,9,10]
// [8,12,3,5,9,10]
let n = arr1.length 
let k1 = 3
console.log("K-th smallest element is ") 
console.log(Quickselect(arr1, 0, n - 1, k1))

function partition (arr,start,end) {
   let pv = arr[end]
   let pi = start
   let i = start
   for(let i = start;i<=end;i++){
    if (arr[i]< pv){
        temp = arr[i] 
        arr[i] = arr[pi]
        arr[pi] = temp
        pi++
    }
   }
   temp = arr[end]
   arr[end] = arr[pi]
   arr[pi] = temp
   console.log(pi)
   return pi
}
function Quickselect(arr,start,end,k){
    index = partition(arr,start,end)

    if ((index) === k-1){
            return arr[index];
    }
    else if((index) > (k-1)){
        return  Quickselect(arr,start,index-1,k-1)
    }
    return Quickselect(arr,index+1,end,k-1)
    }
