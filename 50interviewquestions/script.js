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



function findFactorial(num) {
  let result = 1;  // start with 1 (since multiplying by 0 gives 0)
  
  for (let i = 1; i <= num; i++) {
    result *= i;  // multiply result by i each time
  }

  return result; // return the final factorial
}

console.log(findFactorial(5)); // 120