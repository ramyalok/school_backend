const  models = require("../../../models")
const { v4: uuidv4 } = require('uuid');
const sequelize = require("sequelize");

require("../../utils");
var t_sequelize = new sequelize(
    config.database,
    config.username,
    config.password,
    config
);

module.exports = {
    create_teachers : async (req,res,next) =>{
        try {
            if (Object.keys(req.body).length === 0 ) {
                return sendOutResp(res,404,"No Teacher data found",false)
            }
            var teacher = req.body;
            teacher.created_by =  res.locals.user_profile_id;
            teacher.updated_by =  res.locals.user_profile_id;
            teacher.role_id = 2;

            var teacher_data = await models.user_profile.create(teacher);

            if(!teacher_data) {
                console.log("========STUDENT DATA NOT CREATED========")
                return sendOutResp(res,404,"teacher data not created",false)
            }
            return sendOutResp(res,201,"teacher created successfully",true)
        }
        catch (err) {
            console.log("==Error on creating the Teacher");
            return sendOutResp(res,404,`No teacher data not created `,false)
        }
    }
}