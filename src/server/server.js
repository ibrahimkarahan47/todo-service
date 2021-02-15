const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const healthController = require('../controllers/health');
const getTodosController = require('../controllers/getTodos');

const server = express();
server.use(cors())

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
global.TODOS = [
  {
    id: "1",
    task: "write unit test",
    done: false,
  }
];

server.use('/health', healthController);
server.use('/todos', getTodosController);


module.exports = server;
