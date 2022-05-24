const express = require('express');

//Auth Middleware
const {authMiddleware ,adminMiddleware} = require("./../middlewares/auth");

//consting all the routes
const authRouter = require('./auth');
const adminRouter = require("./admin");

const routers = express.Router();

routers.use('/auth',authRouter);

routers.use(authMiddleware);

routers.use(adminMiddleware)
routers.use('/admin',adminRouter);

//INVALID ROUTES
routers.use('*', function(req, res) {
    return res.json({
        type:"error",
        status: false,
        code:404,
        message:"Invalid Routes"
    })
});
 
 
module.exports= routers;

