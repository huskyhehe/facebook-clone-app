const express = require("express");
const { home } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/user", home);

module.exports = userRouter;
