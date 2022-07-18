const { Shops } = require("../../models/shops");

const getAll = async (req, res, next) => {
        const result = await Shops.find({});
        console.log("result",result)
        res.json(result)
}

module.exports = getAll