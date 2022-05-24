const  express = require('express');
const authRouter = express.Router();

const  Login = require('./login');
const  Refresh = require('./refresh');

authRouter.post('/user/login',Login.login);
authRouter.post('/check_user',Login.check_user_exist);
authRouter.get('/user/refresh',Refresh);

module.exports =  authRouter;   