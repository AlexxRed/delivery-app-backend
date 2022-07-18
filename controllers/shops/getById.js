const  Shops  = require("../../models/shops");

const getById = async (req, res, next) => {
    try {
        const {shopId} = req.params
        const result = await Shops.findById(shopId)
        if (!result) {
        const error = new Error("Not found")
        error.status = 404
        throw error
        }
        res.json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = getById