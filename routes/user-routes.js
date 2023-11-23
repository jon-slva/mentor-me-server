const express = require('express');
const router = express.Router();
const userController = require("../controllers/user-controller");



router.route("/login")
    .post(userController.test)


module.exports = router;