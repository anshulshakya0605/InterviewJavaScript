console.log(this); // global object (window in browser,) local scope in node {} empty object

const user = {
    name: 'Ram',
    age: 30,
    getName(){
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

user.getName(); // Ram is 30 years old.

const getUserName = user.getName;
getUserName(); // undefined is undefined years old. (this is global object)


function show(){
    console.log(this); // global object window & strict mode undefined
}
show();

// use Arrow function
const user1 = {
    name: 'Siya',
    getName: () => {
        console.log(this.name);
        
    }
}
user1.getName(); // undefined (arrow function does not have its own this, it inherits from the parent scope, which is global object in this case)

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
