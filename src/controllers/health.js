const express = require("express");
const router = express.Router();
const { getHealth } = require("../services/health");

router.get('/',(request,respond) => {
    respond.status(200).send(getHealth());
});

module.exports = router;
