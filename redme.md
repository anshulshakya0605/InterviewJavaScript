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
