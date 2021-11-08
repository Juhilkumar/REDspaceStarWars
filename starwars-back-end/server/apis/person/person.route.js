var router = require('express').Router();
var PersonController = require('./person.controller');

router.get("/:id", PersonController.getPerson);

module.exports = router;