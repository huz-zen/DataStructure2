// Arrays
// Write a function to find the kth smallest element in an unsorted array without sorting the entire array.
// (Hint: Use a variation of the Quickselect algorithm.)
let arr1 = [ 10, 4, 5, 8, 6, 11, 26 ] 
let n = arr1.length 
let k1 = 3
console.log("K-th smallest element is ") 
console.log(Quickselect(arr1, 0, n - 1, k1))

function partition (arr,start,end) {
   let x = arr[end]
   let z= start
   let i = start
   for(;i<=end;){
    if (arr[i]<= x){
        temp = arr[start] 
        arr[start] = arr[i]
        arr[i] = temp
        i++
    }
    i++
   }
   temp = arr[i]
   arr[i] = arr[end]
   arr[end] = temp
   return i
}
function Quickselect(arr,start,end,k){
    if (k>0 && k<=end-start+1){
        index = partition(arr,start,end)
    }
    if (index - 1 === k-1){
            return arr[index];
    }
    if(index - 1 > k-1){
        return  Quickselect(arr,start,index-1,k)
    }
    return Quickselect(arr,index+1,end,k-index+start-1)
    }


// Implement a function that splits an array into chunks of a given size. For example, given [1, 2, 3, 4, 5] and a size of 2, return [[1, 2], [3, 4], [5]]. 
//Ensure the function handles edge cases like empty arrays or chunk sizes larger than the array length.
const array = [2,3,-8,7,-1,2,3] 

const chunk_size = 2
function splitter(array,chunk_size){
    let i=0
    let ans = []
while(i+chunk_size<array.length){
    ans.push(array.slice(i, i+chunk_size))
    i+=chunk_size
}

ans.push(array.slice(i))
return ans
}
console.log(splitter(array,chunk_size))
// Given an array of integers, write a function that finds the subarray with the maximum sum.
// (Hint: Use Kadane's Algorithm.)
function maxSubArraySum(array){
    let maxEnd = array[0]
    let sum = array[0]
    let i = 1;
    let ans = []
    for(;i<array.length;i++){
        maxEnd = Math.max(array[i]+maxEnd,array[i])
        sum = Math.max(maxEnd,sum)
    }
    console.log(array[i-1])
    return sum;
}
console.log(maxSubArraySum(array))

// Create a function that takes an array of integers and returns a new array containing only those elements that have a frequency greater than a given threshold.
// (For example, given [1, 2, 2, 3, 3, 3] and threshold 1, the output should be [2, 3].)
const threshold = 1;
const array3 = [1, 2, 2, 3, 3, 3];

function freqfilter(array,threshold){
    let freq = {};
    let ans = []
    for (let i = 0; i < array.length; i++) {
        if (freq[array[i]]) {
            freq[array[i]]++;
            } else
            freq[array[i]] = 1;
            }
            for (x in freq){
                if (freq[x]>threshold){
                  ans.push(parseInt(x))
                }
            }
            return ans;
}
console.log(freqfilter(array3,threshold))
// Write a function that rotates an array to the right by k positions. For example, rotating [1, 2, 3, 4, 5] by 2 positions results in [4, 5, 1, 2, 3].
let array4 = [1, 2, 3, 4, 5]
let k = 2
function rotate(array,k){
    k = k % array.length
    return array.slice(array.length-k).concat(array.slice(0,array.length-k)) 
    }
console.log(rotate(array4,k))