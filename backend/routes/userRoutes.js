const { USER_REGISTER, USER_LOGIN, FORGOT_PASSWORD, RESET_PASSWORD } = require("../controllers/Authentication.controller")

const userRouter = require("express").Router();


//  signup
userRouter.post("/register", USER_REGISTER);

//login
userRouter.post("/login", USER_LOGIN);

//forgot-password
userRouter.post('/forgot-password', FORGOT_PASSWORD);

//reset-password
userRouter.post('/reset-password/:id/:token', RESET_PASSWORD)

module.exports = userRouter