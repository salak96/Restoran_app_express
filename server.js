const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

//config configurasi
dotenv.config();

//rest object
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1>');
});
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

//import routes
app.listen(port, () => {
    console.log(`Server runing on port ${port}`.bgGreen.white.bold);
});

app.use('/api/v1/', require('./routes/testroute'));