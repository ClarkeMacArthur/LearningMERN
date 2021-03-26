const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// NOTE: on Windows you have to enter SET NODE_ENV=development and then nodemon server.js - Jonas is running on Mac so  can do this all on one line and without the SET keyword.
// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on ${port}...`);
});
