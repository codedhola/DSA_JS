// // Recursion 
// function factorial(n){
//     if(n === 2){
//         return 2
//     }
//     return n * recursion(n - 1)     
// }

// factorial(5)



// FIBONACCI ALGORITHM 
// 1) Iterative approach
// function fibonacciIterative(n){
//     const fiboArray = [0, 1]
//     for(let i = 0;i < n;i++){
//         const sum = fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2]
//         fiboArray.push(sum)
//     }

//      return fiboArray[n]
// }

// console.log(fibonacciIterative(5))  

// 2) Recursion 
function fibonacciRecursion(n){
    const arr = [0, 1]
    if(n < 2){
        return n
    }

    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2)
}


console.log(fibonacciRecursion(6))