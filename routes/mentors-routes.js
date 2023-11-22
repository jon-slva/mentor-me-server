const express = require('express');
const router = express.Router();
const mentorsController = require("../controllers/mentors-controller");
// const usersController = require("../controllers/users-controller");


router.route("/")
    .get(mentorsController.search)
    .post(mentorsController.addUser)
    ;

// router.route("/user")
//     .post(usersController.test)
// .post(mentorsController.test)
;

// router.route("/:id").delete(warehouseController.remove).put(warehouseController.update).get(warehouseController.findOne);
// router.route("/:id/inventories").get(warehouseController.whInventories);

module.exports = router;