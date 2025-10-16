// remove duplicate with in build method ============= Set() ============ 

const array = [2,3,4,5,6,5,4,9,8,7,1,3,4,5];

const uniqueArray = [... new Set(array)]
console.log(uniqueArray);


// use filter method 

const uniqueArrayByFilter = array.filter((item, index) => array.indexOf(item) === index)
console.log(uniqueArrayByFilter);

////  use for loop 

let seen = {};
let result = [];

for(let i = 0; i < array.length; i++) {
    let item = array[i]
    if (!seen[item]) {
        seen[item] = true;
        result.push(item)
    }
}
console.log(result);

function removeDuplicate(arr) {
    const seen = {};
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!seen[item]) {
            seen[item] = true;
            result.push(item)
        }
    }
    return result;
}

const removeDuplicateByForLoop = removeDuplicate(array)
console.log("for loop:", removeDuplicateByForLoop);



///// Remove duplicate element in =========== Object ====================



const users = [
  { name: "Anshul" },
  { name: "Priya" },
  { name: "Anshul" },
  { name: "Rahul" },
  { name: "Priya" },  
];

/// remove duplicate 

const uniqueObject = users.filter((user, index, self) => index === self.findIndex((Ele) => Ele.name === user.name))

console.log("my user:", uniqueObject);


