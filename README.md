```js
const createApiHandler = require('api-throttler');

async function fetchData() {
  console.log('API call made at:', new Date().toISOString());
  // Simulate an API call
}

// Create a throttled version of fetchData
const throttledFetch = createApiHandler(fetchData, { mode: 'throttle', limit: 1000 });

// Simulate rapid calls
setInterval(() => {
  throttledFetch();
}, 300); // Calls every 300ms, but only executes once every 1000ms



-----------For Debouncing----------------
const createApiHandler = require('api-throttler');

async function fetchData() {
  console.log('API call made at:', new Date().toISOString());
  // Simulate an API call
}

// Create a debounced version of fetchData
const debouncedFetch = createApiHandler(fetchData, { mode: 'debounce', delay: 500 });

// Attach debouncedFetch to an input change event
document.getElementById('search').addEventListener('input', () => {
  debouncedFetch();
});
```