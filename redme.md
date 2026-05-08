# JavaScript Interview Question 

## Q1: What is Closure in Javascript ? 

** Answer: **
A `closure` in javascript is a function that has access to variables form his outer (lexical) scope even after the outer function has finished executing.

---
One Line: `Closure` allows a function to retain access to its lexical scope even after the parent function has executed.

---
Example: 
```
function CartCounter() {

    let _count = 0;
    function _updateCount(val) {
        return _count += val;
    }

    return {
        increment() {
            _updateCount(+1)
        },
        decrement() {
            _updateCount(-1)
        },
        value() { 
            return _count;
        }
    }
}

const cartCounter = CartCounter();
cartCounter.increment() /// 1
cartCounter.increment() /// 2
cartCounter.increment() /// 3
cartCounter.decrement() /// 2

console.log(cartCounter.value());
```

----

```
function createCart() {
    let cartCount = 0;

    return function addToCart(){
        cartCount++;
        console.log(`Cart count: ${cartCount}`);
    }
}

const cart = createCart();
cart(); // output: Cart count: 1
cart(); // output: Cart count: 2
cart(); // output: Cart count: 3
```

---

## Q2: What is This Keyword in Javascript ?

** Answer: **
The `this` keyword is javascript refers to the object that is currently executing the function, and it's value determined by how the function is called.

---
`this` always depends on how the function is called. In object method, it refers to that object. In regular function, it refers to global object. In arrow function, it takes this from its parent scope. 

---
 Example

 ```
 console.log(this); // global object (window in browser,) local scope in node {} empty object

const user = {
    name: 'Ram',
    age: 30,
    getName(){
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

user.getName(); // Ram is 30 years old.
```
```
// use Arrow function

const user1 = {
    name: 'Siya',
    getName: () => {
        console.log(this.name);
        
    }
}
user1.getName(); // undefined (arrow function does not have its own this, it inherits from the parent scope, which is global object in this case)
```

Real Example: 
```
/// Shopping cart logic here

const shoppingCart = {
    items: [],
    costumers: 'Ram Ji',

    // this will refers to the shoppingCart object
    addItems(product, price){
        this.items.push({product, price});
        console.log(`${product} added to ${this.costumers}'s cart.`);
    },

    getTotalCost(){
        const totalCost = this.items.reduce((sum, item) => sum + item.price, 0)
        return `Total cost: Rs: ${totalCost}`;
    }
}

shoppingCart.addItems("Laptop", 50000); // Laptop added to Ram Ji's cart.
shoppingCart.addItems("Phone", 20000); // Phone added to Ram Ji's cart.

console.log(shoppingCart.getTotalCost()); // Total cost: Rs: 70000
```

---

## Q3: What is Currying in JavaScript ? 

** Answer: **  
`Currying` is a technique in javascript where a function is transformed into a sequence of functions, each taking one argument at a time instead of taking all argument at once.

---

Example:

```
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(4)(5)(6)); // 15
```

Real Example: 
```
function applyDiscount(discount){
    return function(price){
        return price - (price * discount);
    }
}

const tenPercentDiscount = applyDiscount(0.1);
console.log(tenPercentDiscount(950)) // 855
console.log(tenPercentDiscount(9895)); // 8905.5

const twentyPercentDiscount = applyDiscount(0.2);
console.log(twentyPercentDiscount(950)) // 760
console.log(twentyPercentDiscount(9895)); // 7916
```

---
## Q4: What is the DOM ? 

** Answer: ** 
The `DOM` (Document Object Model) is a programming interface for web documents that represents the HTML structure as a tree of objects, allowing JavaScript to dynamically access and manipulate content, structure, and styles.

---

## Q5: What is map method in js?

** Answer: ** 
The `map()` method in used to transform each element of an array and return a new array with the modified values.

---

Example:

```
const products = [
    { id: 1, name: 'Laptop', price: 87981 },
    { id: 2, name: 'Smartphone', price: 23456},
];

const productNames = products.map((product) => product.name);
console.log("Product Name: ", productNames); // Output: ['Laptop', 'Smartphone']
```
Use: When render the UI like React.js and modify the data & map return the same length array

---

## Q6: What is filter method in js?

** Answer: ** 
The `filter()` method is use to select elements from an array based on condition and return a new array with only the matching elements. 

---

Example: 
```
const products = [
    { id: 1, name: 'Laptop', price: 87981 },
    { id: 2, name: 'Smartphone', price: 23456},
];

const above30K = products.filter(((product) => product.price > 30000));
console.log("Product: ", above30K); // Output: [{ id: 1, name: 'Laptop', price: 87981 }]

```

## Q7: What is reduce method in js?

** Answer: ** 
The `reduce()` method is used to reduce an array to a single value by applying a function on each element and accumulating the result.

---

Example:

```
const products = [
    { id: 1, name: 'Laptop', price: 87981 },
    { id: 2, name: 'Smartphone', price: 23456},
];

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total Price: ", totalPrice); // Output: 111437
```
### use: 

** `map` is used to transform data, `filter` is used to select data based on conditions, and `reduce` is used to convert an array into a single value like total or aggregated result. In real projects, I use `map` for rendering lists, `filter` for search and category-based data, and `reduce` for calculations like cart totals. ** 

---
+++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++

## IMPORTANT :-> If reduce can do everything, why use map/filter?

** Answer: **
The `reduce()` method is a powerful array method that can replicate the behavior of `map()`, `filter()`, and even `forEach()` by using an accumulator to process and transform data in a single iteration.

==>: Although `reduce` can handle all operations, `map` and `filter` provide better readability and are more semantic. In real-world projects, we prefer `map` and `filter` for clarity, and use `reduce` when we need complex aggregation or optimization

---
Example: 

```
const orders = [
  { name: "iPhone", price: 1000, status: "delivered" },
  { name: "Laptop", price: 2000, status: "pending" },
  { name: "Shoes", price: 500, status: "delivered" }
];

//  const orders = [1,2,3,4,5];

/// replace map with reduce 
const productNames = orders.reduce((acc, order) => {
    acc.push(order.name);
    return acc;
}, []);

console.log("Product Names: ", productNames); // Output: ['iPhone', 'Laptop', 'Shoes']

// replace filter with reduce
const deliveredOrders = orders.reduce((acc, order) => {
    if(order.status === "delivered") {
        acc.push(order);
    }
    return acc;
}, []);

console.log("Delivered Orders: ", deliveredOrders); // Output: [{ name: "iPhone", price: 1000, status: "delivered" }, { name: "Shoes", price: 500, status: "delivered" }]


// replace forEach with reduce
const printPrice = orders.reduce((acc, order) => {
    console.log("Price: ", order.price); // Output: 1000, 2000, 500
    return acc;
}, []);

```

### ** Final Interview Line ** 

`Reduce` is a powerful method that can replicate `map`, `filter`, and `forEach` by using an accumulator. However, in real-world projects, I use `map` and `filter` for readability and `reduce` for complex data aggregation or performance optimization.

+++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++

---


## Q8: What is forLoop in js ? 

** Answer: ** 
The `forEach()` method is used to iterate over an array and perform side effects, but it does not return a new array.

---

Example: 
```
const products = [
    { id: 1, name: 'Laptop', price: 87981 },
    { id: 2, name: 'Smartphone', price: 23456},
];

const printName = products.forEach((product) => {
    console.log("Product Name: ", product.name); // Output: 'Laptop', and 'Smartphone'
})

```
 ### Use:
`map()` is used when we need a transformed array, especially in React rendering, whereas `forEach()` is used for side effects like logging or API calls since it does not return anything.

---

## Q9: What is Event Loop in js?

** Answer: ** 
The `Event Loop` is a mechanism in JavaScript that continuously monitors the call stack and task queues, and executes asynchronous callbacks when the call stack is empty.

Example: 
```
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");


// Output: 

// Start
// End
// Timeout
```
### Why this output?

step-by-step:

"Start" → stack
setTimeout → Web API
"End" → stack
setTimeout callback → queue me
Stack empty → Event Loop → execute callback

---

## Microtask vs Callback Queue (🔥 Interview Favorite)

** Ans: ** 
1️⃣ Microtask Queue (High Priority)
Promise
async/await

2️⃣ Callback Queue (Low Priority)
setTimeout
setInterval

👉 Rule:
👉 Microtask pehle execute hota hai

---
Example:
```
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

/*
Output: 
Start
End
Promise
Timeout
*/

```

---
## What is the role of event loop?
==> : Manage async tasks without blocking main thread

“JavaScript is single-threaded, but it handles asynchronous operations using the event loop. The event loop continuously checks the call stack and task queues, and executes callbacks when the stack is empty. It ensures non-blocking execution for operations like API calls, timers, and events.”

---

## Q10: What is Callback Function in js?
**  Answer: **
A `callback` is a function that is passed as an argument to another function and is executed after the completion of that function.

Example: 
```
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

---

## Q11: What is Promise in javascript?

** Answer: ** 
A `Promise` in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states:

*`Pending`: The initial state, where the operation has not completed yet.

*`Fulfilled`: The operation completed successfully.

*`Rejected`: The operation failed.

Example: 
```
fetch("/products")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
  ```
Promise is replacement of callback

---
## Q12: What is the async/await in js?
** Answer: ** 
In JavaScript, `async and await` are keywords used to handle asynchronous operations (like fetching data or reading files) in a way that looks and feels like synchronous code. Introduced in ES2017, they are "syntactic sugar" built on top of `Promises` to make code cleaner and easier to read. 

Example: 
```
async function getProducts() {
  try {
    const res = await fetch("/products");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

---

## Q13: What is Debouncing in js?

** Answer: ** 
`Debouncing` is a technique that delays the execution of a function until a specified time has passed after the last event trigger, preventing multiple rapid function calls.

Example:

```
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


const search = (query) => {
  console.log("API call for:", query);
};

const debouncedSearch = debounce(search, 500);

// simulate typing
debouncedSearch("i");
debouncedSearch("ip");
debouncedSearch("iphone");  /// Output API call for: iphone

```
Debouncing is a performance optimization technique used to limit the execution of a function by delaying it until the user stops triggering the event. It is commonly used in scenarios like search inputs to avoid multiple API calls and improve performance.

---

