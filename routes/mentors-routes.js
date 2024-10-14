const express = require('express');
const router = express.Router();
const mentorsController = require("../controllers/mentors-controller");


router.route("/")
    .get(mentorsController.search);

router.route("/:mentorId")
    .get(mentorsController.getMentor);

module.exports = router;