# JavaScript Interview Question 

## Q1: What is Closure in Javascript ? 

** Answer: **
A closure in javascript is a function that has access to variables form his outer (lexical) scope even after the outer function has finished executing.

---
One Line: --Closure allows a function to retain access to its lexical scope even after the parent function has executed.

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
The this keyword is javascript refers to the object that is currently executing the function, and it's value determined by how the function is called.

---
This always depends on how the function is called. In object method, it refers to that object. In regular function, it refers to global object. In arrow function, it takes this from its parent scope. 

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
Currying is a technique in javascript where a function is transformed into a sequence of functions, each taking one argument at a time instead of taking all argument at once.

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

