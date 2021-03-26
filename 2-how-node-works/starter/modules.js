// console.log(arguments);
// console.log(require('module').wrapper);

// module exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require('./test-module-2');
// We can also use destructuring to destructure the object that we get back. Instead of saving the module to a variable, we destructure out only the functions we need from it.
const { add, multiply } = require('./test-module-2');
console.log(multiply(2, 5));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
