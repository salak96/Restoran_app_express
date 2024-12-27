const express = require('express');

const app = express();

// Middleware function to log request details
const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// Middleware function to handle errors
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};

// Use the middleware functions
app.use(requestLogger);
app.use(errorHandler);

module.exports = {
    requestLogger,
    errorHandler
};