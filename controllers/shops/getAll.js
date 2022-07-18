const { Shops } = require("../../models/shops");

const getAll = async (_, res, next) => {
        const result = await Shops.find({})
        console.log(result)
        res.json(result)
}

module.exports = getAll