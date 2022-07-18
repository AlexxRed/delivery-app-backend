const express = require("express");

const ctrl = require("../../controllers/shops");

const { ctrlWrapper } = require("../../services");

// const authenticate = require("../../middlewares/authenticate");

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:shopId', ctrl.getById)


module.exports = router