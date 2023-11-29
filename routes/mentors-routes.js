const express = require('express');
const router = express.Router();
const mentorsController = require("../controllers/mentors-controller");


router.route("/")
    .get(mentorsController.search);

router.route("/mentor/:mentorId")
// .get(mentorsController.get);



// router.route("/:id").delete(warehouseController.remove).put(warehouseController.update).get(warehouseController.findOne);
// router.route("/:id/inventories").get(warehouseController.whInventories);

module.exports = router;