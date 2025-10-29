// find the second largest number using sorting method

function secondLargestNumber(arr) {
    arr.sort((a, b) => b-a);
    return arr[1];
}

const array = [23, 5, 4, 7, 8, 21, 26, 28]

console.log(secondLargestNumber(array));
