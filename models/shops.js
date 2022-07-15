const { Schema, model } = require('mongoose');

const shopSchema = new Schema(
    {
        shop: {
        type: String,
        },
        products: {
        type: Array,
        },
        added: {
        type: Boolean,
        default: false,
        },
    },
    { versionKey: false, timestamps: true },
);

const Shop = model('shop', shopSchema);

module.exports = Shop