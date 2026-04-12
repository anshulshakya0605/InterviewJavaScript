function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(4)(5)(6)); // 15

// real example of currying

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

