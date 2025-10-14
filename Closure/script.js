// first you should remember how to complete Execution Context

const userName = 'ram_ji';
function login() {
    const password = 'secret';
    console.log(`${userName} is logged in with pass: ${password}`);
}
login();



// Closer 

function callApi(method) {
    return function(url) {
        // real api 
        console.log(`Fetching data from ${url} using ${method}`);
    }
}
const url = 'https://example.com/data';
callApi('GET')(url)


// create a counter with closure 

function counter() {
    let count = 0; 
    return function() {
        count ++ ;
        console.log(count);
    }
}
const updateCounter = counter()

// updateCounter()
// updateCounter()
// updateCounter()

// real world example 

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
cartCounter.increment()
cartCounter.increment()
cartCounter.increment()
cartCounter.decrement()


console.log(cartCounter.value());
