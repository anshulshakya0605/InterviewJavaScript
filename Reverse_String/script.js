let myStr = "Ram Siya Ji";

const reverseString = myStr.split(' ').reverse().join(' ')
console.log("my String:", reverseString);

function reversedString(str) {
    let reverse = '';
    for(let i = str.length -1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

console.log(reversedString('Sonali'));
