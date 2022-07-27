const express = require("express");

const ctrl = require("../../controllers/orders");

const { ctrlWrapper } = require("../../services");

const router = express.Router();

const validation = require("../../middlewares/validationUser");


const authenticate = require("../../middlewares/authenticate");

const { joiAddOrderSchema, joigetOrdersSchema } = require("../../models/order");

router.post("/",  validation(joiAddOrderSchema), ctrlWrapper(ctrl.addOrders));

router.get("/", authenticate, validation(joigetOrdersSchema), ctrlWrapper(ctrl.getOrders));

module.exports = router;