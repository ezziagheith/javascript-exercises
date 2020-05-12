// const sumAll = function() {
//     let sum = 0;
//     let arr = [1, 4];
//     for(let i = 0; i < arr.length; i++){
//         sum += Math.max(arr[i] + Math.min(arr[i]))
//     }

//     return sum;
// }

// const sumAll = function() {
//     let sum = 0;
//     let arr = [1, 4000];
//     for(let i = 0; i < arr.length; i++){
//         sum += Math.max(arr[i] + Math.min(arr[i]))
//     }

//     return sum;
// }

const sumAll = function() {
    let sum = 0;
    let arr = [123, 1];
    for(let i = 0; i < arr.length; i++){
        sum += Math.max(arr[i] + Math.min(arr[i]))
    }

    return sum;
}




module.exports = sumAll
