const express = require('express');
const router = express.Router();
const menteesController = require("../controllers/mentees-controller");

router.route("/")
    .get(menteesController.search);

router.route("/:menteeId")
    .get(menteesController.getMentee);


module.exports = router;