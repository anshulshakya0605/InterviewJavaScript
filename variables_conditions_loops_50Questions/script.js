// 🧱 1. let / var / const (Scope & Reassignment) – 10 Questions

// var x = 10;
// let y = 20;
// const z = 30;
// x = 15;
// y = 25;
// z = 35; // Uncomment this line and observe the error // beacuse of assignment error
// console.log(x, y, z); // 15 ,25,30   // var mai reasign ho skta hai or redeclare bhi 


// What is the difference between var, let, and const?

// What happens if you redeclare a variable with var in the same scope?
// function my_function (){
// var x = 10 ;
// var x = 20;
// console.log(x);
// }
// my_function();

// What happens if you redeclare a variable with let in the same block?

// function my_function (){
// let x;   syntaxError: Identifier 'x' has already been declared at wrapSafe (node:internal/modules/cjs/loader:1662:18)
// let x=10;
// console.log(x);
// }
// my_function();


// What is block scope vs function scope? Show with an example.

// function my_fun() {
//     var outerAge = 20;

//     if (true) {
//         var innerAge = 19;
//         // console.log("outerAge", outerAge);
//         // console.log("innerAge", innerAge);
//     }
//         console.log("innerAge", innerAge);

//     // console.log("outerAge", outerAge);
    
// }

// my_fun()

// console.log("outerAge", outerAge);



// Predict output:

// console.log("a", a);
// var a = 5;
// // console.log(b);
// // let b = 10;  ///  can not access before in




// Why is const used if we can still modify arrays and objects declared with it?

// const array = [1, 3, 5];


// Explain Temporal Dead Zone with an example.

// function my_fun() {
//     console.log(a);
//     let a = 50;    
// }
// my_fun();


// Output?

// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a); // 1
// // console.log(b);  // b is not defined 
// console.log(c);  // b is not defined 






// ⚖️ 2. == vs === (Comparison & Type Coercion) – 10 Questions


// console.log(5 == '5');  // true
// console.log(5 === '5');  // false



// console.log(null == undefined) //  true
// console.log(null === undefined); //fasle

// console.log(typeof(undefined));


// console.log(0 == false); // true 
// console.log(0 === false); // false


// console.log("" == false);   //  true
// console.log('' === false);  // false


// console.log(true == 1); // true
// console.log(true === 1); // false


// console.log('10' - 5);
// console.log('10' + 5);


// console.log(NaN == NaN);   /// NaN is not equal to anything — not even itself.

// console.log(typeof(NaN));


// 3. Loops (for, while, do-while, for...of, for...in) – 15 Questions

// Write a for loop to print numbers from 1 to 10.


// for(let i = 1; i <= 10; i++) {
//     console.log("Num:", i * 2);
// }



// Write a while loop to print even numbers from 2 to 20.

// let num = 2;

// while (num <= 20) {
//   console.log(num);
//   num += 2; // increment by 2 to get the next even number
// }



// Write a do...while loop to print numbers from 5 down to 1.

// let i = 5;

// do{
//     console.log(i);
//     i--;
// }while(i >=1)


// Use a for loop to find the sum of numbers from 1 to 100.


// let sum = 0;

// for(let i = 1; i <= 100; i++) {
//     sum += i
// }

// console.log(sum);



// Use a loop to print the multiplication table of 5.


// for( i = 1; i <= 10; i++) {
//     console.log(i * 5);
// }


// Write a program to reverse a string using a loop.

let str = 'raman';


// let reverse = '';

// for(let i = str.length-1; i >= 0 ; i--) {
//     reverse += str[i];     
// }

// console.log("reverse", reverse);

// console.log(str.split('').reverse().join(''));

// Print all elements of an array using for...of.

// let array = [1,3,4,56,7,8];

// for(let item of array){
//     console.log(item);
// }


// Print all keys and values of an object using for...in.

// let person = {
//     name: 'vikas',
//     age: 90,
// }

// for(let key in person){
//     console.log(key)
// }


// Write a loop to count how many vowels are in a string.


// function countVowels(str) {
//   let count = 0;
//   const vowels = 'aeiouAEIOU';

//   for(let i = 0; i < str.length; i++){
//     if (vowels.indexOf(str[i]) !== -1) {
//       count++
//     }
//   }
//   return count;
// }
// const myStr = "Jay Siya Ram";
// const vowelCount = countVowels(myStr);
// console.log(`The String ${myStr} has ${vowelCount} vowels.`);



// function findFactorial(num) {
//   let result = 1;  // start with 1 (since multiplying by 0 gives 0)
  
//   for (let i = 1; i <= num; i++) {
//     result *= i;  // multiply result by i each time
//   }

//   return result; // return the final factorial
// }

// console.log(findFactorial(5)); // 120






// Print the Fibonacci series up to 10 terms.

// function fibonacciSeries(term) {
//   let a = 0;
//   let b = 1;
//   const printFibonacci = [];

//   for(let i = 0; i < term; i++) {
//     printFibonacci.push(a)
//     let nextTerm = a + b;
//     a = b;
//     b = nextTerm;
//   }
//   console.log(printFibonacci);
// }

// fibonacciSeries(10)




// Write a nested loop to print a pattern:

// for(let i = 0; i < 5; i++) {
//   let pattern = "";
//   for(let j = 1; j <= i; j++) {
//     pattern+= "*"
//   }
//   console.log(pattern);
  
// }




// Use break to stop a loop when number equals 5.?

// for(let i =0; i < 10; i++) {
//   if (i === 5) {
//     break
//   }
//   console.log(i);
// }

// let num = 0;
// while(num < 10){
//   if (num === 5) {
//     break
//   }
//   console.log(num);
//   num++ 
// }



// Use continue to skip printing number 3.

// for(let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// let num = 0;
// while(num < 10) {
//   num++
//   if (num === 3) {
//     continue
//   }
//   console.log(num);
// }




// Loop through an array and double each element using a loop.

// let numbers = [1,2,3,4];

// console.log(numbers.map((num) => num * 2));

// for(let i = 1; i <= numbers.length; i++) {
//   console.log(i * 2);
// }

// console.log(numbers.filter((num) => num%2 ===0));




// Check if a number is positive, negative, or zero.


// function checkNumberType(num) {
// if (num > 0) {
//   console.log(`The num ${num} is positive`);
// } else if(num < 0){
//   console.log(`The num ${num} is negative`);
// }else {
//   console.log(`The num ${num} is zero`);
// }
// }

// checkNumberType(20)
// checkNumberType(-20)
// checkNumberType(0)

// Check if a number is even or odd.

// function checkEvenOdd(num){
// console.log(num%2 === 0 ? 'even' : 'odd')
// }
// checkEvenOdd(5)
// checkEvenOdd(10)
// checkEvenOdd(-10)

// Check which of two numbers is greater.

// numberA=10;
// numberB=12

// function checkGreater(numberA,numberB){
//  return numberA > numberB ? `numbera ${numberA} is gretaer than numberb ${numberB} `: `numbera ${numberB} is gretaer than number b `
// }

// console.log(checkGreater(4,5))


// Write a condition to check if a year is a leap year.


//   const year = 9090

//  if(year%4 === 0 || year % 400 === 0){
//     console.log(`${year} is a leap year `)
//   }
//   else{
//     console.log(`${year} is not a leap year `)
    
//   }


// Check if a character is a vowel or consonant.

const vowels = 'aeiouAEIOU';

function checkVowels(char){
 return vowels.includes(char) ? 'vowel' : 'consonat'

}

console.log(checkVowels('i'));



