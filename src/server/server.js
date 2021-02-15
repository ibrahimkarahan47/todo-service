const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const healthController = require('../controllers/health');
const todoController = require('../controllers/todo');

const server = express();
server.use(cors())

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
global.TODOS = [];

server.use('/health', healthController);
server.use('/todo', todoController);


module.exports = server;
