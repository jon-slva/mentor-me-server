const express = require('express');
const router = express.Router();

router.route("/").get(warehouseController.index).post(warehouseController.add)
router.route("/:id").delete(warehouseController.remove).put(warehouseController.update).get(warehouseController.findOne);
router.route("/:id/inventories").get(warehouseController.whInventories);