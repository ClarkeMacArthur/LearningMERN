// class Calculator {
//     add(a, b) {
//         return a + b
//     }

//     multiply(a, b) {
//         return a * b
//     }

//     divide(a, b) {
//         return a / b
//     }
// }

// module.exports = Calculator;

// can also write this as below and makes our code look a lot neater. Functionality does not change!

module.exports = class {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
};
