const jwt = require("jsonwebtoken");

const {User} = require("../models/user");

const { createError } = require("../services/createError");

const {SECRET_KEY} = process.env;

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    try {
        if (bearer !== "Bearer") {
            throw createError(401);
        }
        try {
            const { id } = jwt.verify(token, SECRET_KEY);
            const user = await User.findById(id);
            if (!user || !user.token) {
                throw createError(401);
            }
            req.user = user;
            next();
        } catch (error) {
            error.status = 401;
            throw error;
        }
    } catch (error) {
        next(error);
    };
};

module.exports = authenticate;