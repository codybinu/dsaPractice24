console.log("Starting")

//Fibonacci array of a number;
//TC : O(n)
function fibonacci(n){
    let fibArr = [0,1];
    for(let i=2;i<n;i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2]
    }
    return fibArr;
    
}

// console.log(fibonacci(7)); 

//FACTORIAL OF A GIVEN INTEGER
// TC: O(n)
function factorial(n){
    if(n==0){
        return 1;
    }
    let ans = factorial(n-1) * n;
    return ans;
}

// console.log(factorial(1));


//check if the given no. is prime or not
//TC: O(N)
function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<n;i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

//optimized solution for the given no. is prime or not
//TC: O(sqrt(n))
function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<Math.sqrt(n);i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(6))