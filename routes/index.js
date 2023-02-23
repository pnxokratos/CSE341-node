/* W01const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.testingFunction);*/

const router = require("express").Router();

router.use("/contacts", require("./contacts"));

module.exports = router;