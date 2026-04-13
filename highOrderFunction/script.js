// const products = [
//     { id: 1, name: 'Laptop', price: 87981 },
//     { id: 2, name: 'Smartphone', price: 23456},
// ];

// const productNames = products.map((product) => product.name);
// console.log("Product Name: ", productNames); // Output: ['Laptop', 'Smartphone']


// const above30K = products.filter(((product) => product.price > 30000));
// console.log("Product: ", above30K); // Output: [{ id: 1, name: 'Laptop', price: 87981 }]

// const totalPrice = products.reduce((total, product) => total + product.price, 0);
// console.log("Total Price: ", totalPrice); // Output: 111437

// const printName = products.forEach((product) => {
//     console.log("Product Name: ", product.name); // Output: 'Laptop', and 'Smartphone'
// })








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
