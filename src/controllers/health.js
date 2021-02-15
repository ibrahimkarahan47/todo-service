const express = require('express');
const router = express.Router();
const log = require('../utils/logger');
const { getHealth } = require('../services/health');

router.get('/', (request, respond) => {
  log.info('GET /health triggered.');
  respond.status(200).send(getHealth());
});

module.exports = router;
