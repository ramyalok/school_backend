const  express = require('express');
const authRouter = express.Router();

const  Login = require('./login');
const  Refresh = require('./refresh');
const  Admission = require("../admin/class")

authRouter.post('/user/login',Login.login);
authRouter.post('/check_user',Login.check_user_exist);
authRouter.get('/user/refresh',Refresh);

// ADMISSION
authRouter.post("/admission/create",Admission.create_admission);
authRouter.post("/admission/edit",Admission.edit_admission)

module.exports =  authRouter;   