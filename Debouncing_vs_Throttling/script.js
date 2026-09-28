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
debouncedSearch("iphone");


function throttle(func, delay) {
  const lastTime = 0;
  return function(){
    const currentTime = Date.now();
    if(currentTime - lastTime >= delay){
      currentTime = lastTime;
      func();
    }
  }
}

const handleScroll = throttle(() => {
  console.log("Scrolling...")
}, 1000)

window.addEventListener('scroll', handleScroll);