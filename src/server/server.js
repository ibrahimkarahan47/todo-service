const express = require('express');
const bodyParser = require('body-parser');

const healthController = require('../controllers/health');

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/health', healthController);


module.exports = server;
