const { Schema, model } = require("mongoose");

const shopsSchema = new Schema(
    {
        shop: {
        type: String,
        },
        products: { any: [] },
        added: {
        type: Boolean,
        default: false,
        },
    },
    { versionKey: false, timestamps: true },
);

const Shops = model('shops', shopsSchema);

module.exports = Shops