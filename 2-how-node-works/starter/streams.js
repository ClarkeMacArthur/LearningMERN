const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1: Cannot use in Production Code!!!
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });

    //Solution 2: Streams!
    // const readable = fs.createReadStream('testt-file.txt');
    // readable.on('data', (chunk) => {
    //     res.write(chunk);
    // });

    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', (err) => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File Not found!!');
    // });

    // Solution 3: The FINAL Solution!
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // Format of pipe: readableSource.pipe(writeableDestination)
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening....');
});
