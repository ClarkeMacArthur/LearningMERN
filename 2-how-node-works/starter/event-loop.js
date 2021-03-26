const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3;

setTimeout(() => console.log('Timer 1 finished'), 0);

setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
    console.log('I/O finished');
    console.log('-------------------------');

    setTimeout(() => console.log('Timer 2 finished'), 0);
    setTimeout(() => console.log('Timer 3 finished'), 3000);
    setImmediate(() => console.log('Immediate 2 finished'));

    // this actually runs before setImmediate because it is executed in between stages of the event loop. NextTick is a misleading name because a Tick refers to an entire loop, but Next Tick actually happens before the next loop PHASE and not the entire Tick. SetImmediate actually get executed once per Tick while nextTick gets executed immediately. These two should really swap names haha. Can cause confusion, so it's best to stick to one or the other and not mix them. Usually we'll use setImmediate and not process.nextTick
    process.nextTick(() => console.log('process.nextTick'));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password Encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password Encrypted 2');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password Encrypted 3');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password Encrypted 4');
    });
});

console.log('hello from the top-level code');
