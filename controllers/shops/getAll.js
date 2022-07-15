const { Shop } = require("../../models");

const getAll = async (_, res, next) => {
        const result = await Shop.find({})
        res.json(result)
}

module.exports = getAll