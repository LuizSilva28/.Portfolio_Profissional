const express = require("express");
const getController = require("./controllers/getControllers.js");

const router = express.Router();

router.get("/", getController.indexFrellancers);
//router.get("/consultsrh", getController.indexConsultsRH);

module.exports = router;
