const throttle = require('../src/useThrottle');
const debounce = require('../src/useDebounce');

let count = 0;

const increment = () => {
  count++;
  console.log(`Count: ${count}`);
};


const throttledIncrement = throttle(increment, 1000);
throttledIncrement();
throttledIncrement(); 
setTimeout(() => throttledIncrement(), 1500); 


const debouncedIncrement = debounce(increment, 500);
debouncedIncrement();
debouncedIncrement(); 
setTimeout(debouncedIncrement, 600);
