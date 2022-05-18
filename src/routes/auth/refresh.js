const models = require('../../../models');
const { generateToken, verifyToken } = require('../../jwt');
const { hash,sendOutResp:sendResp, generateSalt } = require("../../utils");

const sendout = (res, status, msg, success, data) => {

    res.json({
      status: status,
      success: success,
      message: msg,
      user: data
    });
}

const giveMeUserId = (token) => {
    return new Promise((resolve, reject) => {
        verifyToken(token).then(res => {
            resolve(res.id)
        }).catch(err => {                 
            resolve('')
        })
    });
}

const Refresh = async (req, res) => {

    //Getting the user_id from the auth token
    const user_id = await giveMeUserId(req.headers.authorization ? req.headers.authorization.split(" ")[1] : '');

    //Fetching the username
    models.user_profile.findOne({
        where: {
            id: user_id,
            is_active: true
        },
        attributes : { exclude: ["password"] }, 
        include: [
           
            {
                model: models.user_roles,
            },
            {
                model : models.class_sections
            }
        ]
    })
    .then(data => {
        //If user exist
        if (data) {
            const userData = JSON.parse(JSON.stringify(data));
            if (!userData) {
                res.status(401).json({
                    status: 401,
                    message: 'Invalid user or user not active, Please contact administrator!',
                    success: false
                }).end();
            }

            sendout(res,201,"user data",true,userData);
        } else {
            //No user found
            res.status(401).json({
                status: 401,
                message: 'Invalid user!',
                success: false
            }).end();
            
            return false;
        }
    })
    .catch(err => {
        console.log(err);

        res.status(500).json({
            status: 500,
            message: "No authorization token found or internal error!",
            success: false
        }).end();

        return false;
    })
}

module.exports= Refresh;