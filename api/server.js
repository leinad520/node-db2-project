const express = require('express');
const server = express();

const carRouter = require('../cars/cars-router.js');

// middleware
server.use(express.json());

// Router
server.use('/cars', carRouter);

module.exports = server;