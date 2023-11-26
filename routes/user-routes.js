const express = require('express');
const router = express.Router();
const userController = require("../controllers/user-controller");



router.route("/login")
    .post(userController.loginFunc)
    .get(userController.authorizeUser)

router.route("/signup")
    .post(userController.addUser)


module.exports = router;