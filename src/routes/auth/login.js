const models = require( '../../../models')
const { generateToken } = require('../../jwt') ;
// var bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const { sendOutResp ,validate_email} = require("../../utils");

const sendOut = (res, payload) => {
    res.json({
        status: 201,
        success: true,
        auth_token: 'Bearer ' + generateToken({
            id: payload.id,
            first_name : payload.first_name,
            last_name: payload.last_name,
            role_id : payload.role_id,
            email : payload.email,
            mobile_no : payload.mobile_no
        }),
        user: payload
    });
}
module.exports = {
    login : async(req, res) => {
        console.log("=======LOGIN ENTRY===========")
        //Checking wheather username and password are sent as request body
        if (!req.body.user_name ) {
            //Sending Bad Request as response
           return res.status(400).json({
                status: 400,
                message: "Bad Request, Please send the username",
                success: false
            })
        }

        if (!req.body.password ) {
            //Sending Bad Request as response
           return res.status(400).json({
                status: 400,
                message: "Bad Request, Please send the password",
                success: false
            })
        }

    
       
        let where = {};

        let is_valid_email = await validate_email(req.body.user_name);
        let is_valid_mobile;
        if (is_valid_email) {
            where.email = req.body.user_name
        } else {
            is_valid_mobile = isNaN(req.body.user_name) === false && req.body.user_name.length ===10 ? true : false;
            if(!is_valid_mobile) {
                return sendOutResp(res,404,"Please send proper username",false)  
            }
            where.mobile_no = req.body.user_name;
        }
        where.is_active = true;
    
        models.user_profile.findOne({
            where: where,
            include: [
                {
                  model: models.user_role
                },
                {
                    model : models.class_section,
                    as :"standard_class"
                }
            ],
            // logging : true
        })
        .then(data => {
            //If user exist
            if (data) {
                const userData = JSON.parse(JSON.stringify(data));
                console.log(userData,"userdata")
                //Hashing the password in the request body and comparing it with the user password
                // const hashedPassword = Hash.createHmac('sha256', userData.password)
                //     .update(req.body.password)
                //     .digest('hex');

                // if (userData.password_hash !== hashedPassword) {
                
                // if (bcrypt.compareSync(`${req.body.password}`, userData.password) !== true) {
                //     console.log("INCORRECT PASSWORD")    
                //     res.status(401).json({
                //         status: 401,
                //         message: 'Invalid Password',
                //         success: false
                //     }).end();

                //     return false;
                // };
                sendOut(res, userData);
                
            } else {
                //No user found
                res.status(401).json({
                    status: 401,
                    message: 'Incorrect Password ! ',
                    success: false,
                    data:data
                }).end();
                return false;
            }
        })
        .catch(err => {
            console.log(err, "Error on login");

            res.status(500).json({
                status: 500,
                message: "Internal Server Error, Try agian later!",
                success: false
            }).end();

            return false;
        })
    },
    check_user_exist : async (req,res) => {
        try {
            if (!req.body.user_name ) {
                //Sending Bad Request as response
               return res.status(400).json({
                    status: 400,
                    message: "Bad Request, Please send the username and password",
                    success: false
                })
            }
            let where = {};

            let is_valid_email = await validate_email(req.body.user_name);
            let is_valid_mobile;
            if (is_valid_email) {
                where.email = req.body.user_name
            } else {
                is_valid_mobile = isNaN(req.body.user_name) === false && req.body.user_name.length ===10 ? true : false;
                if(!is_valid_mobile) {
                    return sendOutResp(res,404,"Please send proper username",false)  
                }
                where.mobile_no = req.body.user_name;
            }
            where.is_active = true;
    
            let is_exist = await models.user_profile.findOne({
                where: where
            });

            if (is_exist) {
                return sendOutResp(res,201,"User exist,you can login",true,{role_id : is_exist.role_id})  
            } else {
                return sendOutResp(res,404,"User not found",false)  
            }
        
        }
        catch (err) {
            console.log(err,"Error on user exist");
            return sendOutResp(res,404,"User not exist",false,err)        
        }
    }
}