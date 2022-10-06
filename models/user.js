const { Schema, model } = require("mongoose")
const Joi = require("joi");

// const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        phone: {
            type: Number,
        },
        token: {
            type: String,
            default: '',
        },
    },
    { versionKey: false, timestamps: true },
)

const User = model("user", userSchema)

const joiUserRegisterSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30),
    email: Joi.string()
        .email()
        .required(),
    phone: Joi.number(),
    password: Joi.string()
        .min(8),
    repeat_password: Joi.ref('password'),
});

const joiUserLoginSchema = Joi.object({
    email: Joi.string()
        .email(),
    password: Joi.string()
        .min(8),
});

module.exports = {
    User,
    joiUserRegisterSchema,
    joiUserLoginSchema
}
