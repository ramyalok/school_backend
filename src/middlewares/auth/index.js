const { verifyToken }  = require('./../../jwt');
const models = require('../../../models');


const authMiddleware=(req,res,next) => {
    if(req.headers.authorization)
    {
        verifyToken(req.headers.authorization.split(" ")[1]).then((data)=>{
            res.locals.user_profile_id = data.id;
            res.locals.role_id = data.role_id

            next();
        }).catch((err)=>{
            console.log(err,"Erron on Auth Middleware")
            res.send({
                status:401,
                type:"error",
                success:false,
                message:"Unauthorized Access!"
            });
        })
    }
    else{
        res.send({
            status:401,
            type:"error",
            success:false,
            message : 'No Authorized Token found!'
        })
    }
}

const adminMiddleware =  (req,res,next) => {
    if(req.headers.authorization) 
    {
        verifyToken(req.headers.authorization.split(" ")[1]).then(async(data)=>{

            console.log(data,"Data on auth middleware ")

            //Checking the user valid or not
            var is_admin = await models.user_profile.findOne({
                where: {
                    id: data.id,
                    is_active: true,
                    role_id: 1
                }
            });

            if(is_admin) {
                res.locals.user_profile_id = is_admin.id
                res.locals.role_id = is_admin.role_id
                next();
            } else {
                res.send({
                    status:401,
                    type:"error",
                    success:false,
                    message:"Failure! Unauthorized Access"
                });
            }

        }).catch((err)=>{
            console.log(err,"Error on ADMIN Access")
            res.send({
                status:401,
                type:"error",
                success:false,
                message:"Unauthorized Access!"
            });
        })
    } else {
        res.send({
            status:401,
            type:"error",
            success:false,
            message:"No Authorization found!"
        });
    }
}

module.exports = {
    authMiddleware ,
    adminMiddleware 
}