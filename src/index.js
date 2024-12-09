const throttle = require('./useThrottle');
const debounce = require('./useDebounce');

function createApiHandler(apiFunction, { mode = 'throttle', delay = 300, limit = 1000 } = {}) {
    if (mode === 'throttle') {
      return throttle(apiFunction, limit);
    } else if (mode === 'debounce') {
      return debounce(apiFunction, delay);
    } else {
      throw new Error("Invalid mode. Please choose 'throttle' or 'debounce'.");
    }
}
module.exports = createApiHandler;