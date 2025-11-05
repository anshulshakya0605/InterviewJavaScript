// 1. Array-based Coding (15 Questions)
// console.log(Math.max(...studentsMarks));
// const studentsMarks = [43, 43, 65, 76, 86];

////// need to read about sort method   .sort



// let maxMarks = studentsMarks[0];

// for (let i = 1; i < studentsMarks.length; i++) {
//     if (studentsMarks[i] > maxMarks) {
//         maxMarks = studentsMarks[i]
//     }
// }
// console.log(maxMarks);

// Find the minimum number in an array using a loop.


// let minMarks = studentsMarks[0];
// for(let i = 1; i < studentsMarks.length;i++){
//     if(studentsMarks[i]< minMarks){
//         minMarks = studentsMarks[i];
//     }
// }
//  console.log(minMarks);
//   console.log(Math.min(...studentsMarks));

// Reverse an array without using .reverse().

const studentsMarks = [43, 43, 65, 76, 86];
// console.log(studentsMarks.reverse());

// Reverse an array without using .reverse().

// let reversedArray = [];

// for (let i = studentsMarks.length - 1; i >= 0; i--) {
//     reversedArray.push(studentsMarks[i]);
// }
// console.log(reversedArray);



// Count how many even and odd numbers are in an array.
//solve with for loop

// function countEvenOdd(arr) {
//     let evenNum = 0;
//     let oddNum = 0;
//     for(let i = 0; i < arr.length; i++ ){
//         if (arr[i] %2 === 0) {
//             evenNum++
//         }else {
//             oddNum++
//         }
//     }
//     console.log("Total even numbers: " + evenNum);
//     console.log("Total odd numbers: " + oddNum);
// }

const studentsRoll = [12,21,53,1,9,4,8,3,75,14]
// countEvenOdd(studentsRoll)

// solve with filter method
 

// function countEvenOddFilterMethod(arr) {
//     let evenNum = arr.filter((num ) => num % 2 === 0).length
//     let oddNum = arr.filter((num ) => num % 2 === 1).length

//     console.log("Total even numbers:" + evenNum);
//     console.log("Total odd numbers:" + oddNum); 
// }

// countEvenOddFilterMethod(studentsRoll)





// Check if an array is sorted (ascending order).

// const sortedArray = studentsRoll.sort((a, b) => a-b)
// console.log(sortedArray);  //    ****   ascending order   ****


// const sortedArray = studentsRoll.sort((a, b) => b-a)
// console.log(sortedArray);  //    ****   descending order   ****




// Find the sum of all numbers in an array using a for loop.

// let sumOfAllNumbers = 0;

// for(let i = 0; i < studentsRoll.length; i++) {
//     sumOfAllNumbers += studentsRoll[i];
// }
// console.log(sumOfAllNumbers);

// const sumOfNumberUsingReduce = studentsRoll.reduce((acc, curr) => acc + curr)

// console.log(sumOfNumberUsingReduce);




// Remove duplicate elements from an array.

// using Set method
const arrayOfDuplicateNum = [1,2,3,4,5,6,3,2,1,5,4,7,8,9,1,31];

// // const uniqueArray = [... new Set(arrayOfDuplicateNum)];

// // using filter method
// const uniqueArray = arrayOfDuplicateNum.filter((num, index) => arrayOfDuplicateNum.indexOf(num) == index)

// console.log(uniqueArray);




// Merge two arrays and sort the result in ascending order.

// const mergedArray = studentsRoll.concat(arrayOfDuplicateNum);
// console.log(mergedArray.sort((a, b) => a - b));

// const mergedArray = [...arrayOfDuplicateNum, ...studentsRoll];
// console.log(mergedArray.sort((a, b) => a- b));
