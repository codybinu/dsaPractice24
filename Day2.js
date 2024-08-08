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
