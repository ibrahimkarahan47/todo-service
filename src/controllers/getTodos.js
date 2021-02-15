const express = require('express');

const router = express.Router();
const { getTodos } = require('../services/getTodos');

router.get('/', (request, respond) => {
  respond.status(200).send(getTodos());
});

module.exports = router;
