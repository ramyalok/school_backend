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
    create_students : async (req,res,next) =>{
        try {
            if (Object.keys(req.body).length === 0 ) {
                return sendOutResp(res,404,"No Student data found",false)
            }
            var student = req.body;
            student.created_by =  res.locals.user_profile_id;
            student.updated_by =  res.locals.user_profile_id;
            student.role_id = 4;

            var student_data = await models.user_profile.create(student);

            if(!student_data) {
                console.log("========STUDENT DATA NOT CREATED========")
                return sendOutResp(res,404,"Student data not created",false)
            }
            return sendOutResp(res,201,"Student created successfully",true,v_data)
        }
        catch (err) {
            console.log("==Error on creating the Student");
            return sendOutResp(res,404,`No Student data not created `,false)
        }
    }
}