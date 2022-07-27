const { Order } = require("../../models/order")

const getOrders = async (req, res) => {
    const { _id: owner } = req.user
    const result = await Order.find({ owner }, "-createdAt -updatedAt",)
    res.json(result)
}

module.exports = getOrders