const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            err
                ? reject(console.log('I could not read that file'))
                : resolve(data);
        });
    });
};

// console.log(readFilePro(`${__dirname}/dogg.txt`));

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            err
                ? reject(console.log('Could not write file 💩'))
                : resolve('Success!');
        });
    });
};

// Using async/await
const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/doggg.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
        );
        console.log(res.body.message);

        await writeFilePro('dog-img.txt', res.body.message);
        console.log('Random dog image saved to file');
    } catch (err) {
        console.log(err);
        throw err;
    }
    return '2: READY 🐶';
};

(async () => {
    try {
        console.log('1: Will get dog pics!');

        console.log('3: Done getting dog pics!');
    } catch (err) {
        console.log('ERROR 💥');
    }
})();

/*
console.log('1: Will get dog pics!');
getDogPic()
    .then((x) => {
        console.log(x);
        console.log('3: Done getting dog pics!');
    })
    .catch((err) => {
        console.log('ERROR 💥');
    }); 
*/

// The exact same thing using Promises and chaining .then
/*readFilePro(`${__dirname}/dog.txt`)
    .then((data) => {
        console.log(`Breed: ${data}`);

        return superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
        );
    })
    .then((res) => {
        console.log(res.body.message);
        return writeFilePro('dog-img.txt', res.body.message);
    })
    .then(() => {
        console.log('Random dog image saved to file');
    })
    .catch((err) => {
        console.log(err.message);
    });*/
