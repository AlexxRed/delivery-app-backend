const { Order } = require("../../models/order")


const addOrders = async (req, res) => {
    await Order.create({ ...req.body, number: Date.now() });
    res.status(201).json();
};

module.exports = addOrders