// Given a positive integer N, determine if the number is a power of 2 or not
//TC: O(log N)
function isPowerOfTwo(n){
    if(n < 1){
        return false
    }
    while(n>1){
        if(n%2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;

}

//OPTIMIZED SOLUTION :  Given a positive integer N, determine if the number is a power of 2 or not
//TC: O(1)
function isPowerOfTwoBitWise(n){
    if(n<1){
        return false
    }
    return  (n & (n-1)) === 0;
}


// console.log(isPowerOfTwo(8))
// console.log(isPowerOfTwoBitWise(7))


//given a no. N , find the nth elemenet of the fibonacci sequence;
//TC: O(2^n)
function fibonacci(n){
    if(n===0){
        return 0
    }
    if(n==1){
        return 1;
    }
    let sp = fibonacci(n-1);
    let ans = sp + fibonacci(n-2);
    return ans;
}

// console.log(fibonacci(7))


// Given an array of 'n' elements and a target element 't',
//  find the index of 't' in the array. Return -1 if the target element is not found.
//TC: O(N)
function findTarget(t, arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === t){   return i }
    }
     return -1 
}

console.log(findTarget(72,[1,8,4,2,3,7,4,3,4]))