const { User } = require("../../models/user")
const { createError } = require("../../services")
const bcrypt = require("bcryptjs");
const gravatar = require('gravatar');
const jwt = require("jsonwebtoken");

const {SECRET_KEY} = process.env;


const register = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email });
    if (user) {
        throw createError(409, 'Email is already in use')
    }
    const hashPassword = await bcrypt.hash(password, 15);
    const avatarURL = gravatar.url(email);

    
    const result = await User.create({ ...req.body, password: hashPassword, avatarURL });
    const createdUser = await User.findOne({ email });

    const payload = {
        id: createdUser._id
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

    const foundUser = await User.findByIdAndUpdate(user._id,{token})

    res.status(201).json({
        ...foundUser,
        token
    })
}


module.exports = register