const models = require( '../../../models');
const { sendOutResp } = require('../../utils');

require("../../utils");

module.exports = {
    create_exam : async (req,res,next) =>{
        try {
            if (Object.keys(req.body).length === 0 ) {
                return sendOutResp(res,404,"No Exam Data found",false)
            }
            var {exam_data} = req.body;
            exam_data.created_by =  res.locals.user_profile_id;
            exam_data.updated_by =  res.locals.user_profile_id;
            exam_data.created_at = new Date();
            exam_data.updated_at = new Date();

            var exam_data_result = await models.exam.create(exam_data);

            if(!exam_data_result) {
                console.log("========EXAM DATA NOT CREATED========")
                return sendOutResp(res,404,"EXAM data not created",false)
            }
            return sendOutResp(res,201,"Exam Data created successfully",true)
        }
        catch (err) {
            console.log("==Error on creating the Exam",err);
            return sendOutResp(res,404,`No Exam data not created `,false)
        }
    },
    edit_exam : async (req,res,next) => {
        try {
            if (!req.body.exam_id) {
                return sendOutResp(res,404,"No Exam Id found",false)
            }
            var {exam_data} = req.body;
            
            exam_data.updated_at =  new Date();
            exam_data.updated_by =  res.locals.user_profile_id;

            let class_section_data = await models.exam.update(exam_data, {
                where: { id: req.body.exam_id },
                returning: true
            });
            return sendOutResp(res,201,"Exam Data updated successfully",true)

        }
        catch (err) {
            console.log("Error on updating the class" ,err);
            return sendOutResp(res,404,`Exam Data's are not updated`,false)

        }
    },
    delete_exam : async (req,res,next) => {
        try {
            if (!req.body.delete_id) {
                return sendOutResp(res,404,"No Exam Id found",false)
            }
            var exam_data ={}
            
            exam_data.updated_at =  new Date();
            exam_data.updated_by =  res.locals.user_profile_id;
            exam_data.is_active = false
            let class_section_data = await models.exam.update(exam_data, {
                where: { id: req.body.delete_id },
                returning: true
            });
            return sendOutResp(res,201,"Exam Data deleted successfully",true)

        }
        catch (err) {
            console.log("Error on updating the class" ,err);
            return sendOutResp(res,404,`Exam Data's are not deleted`,false)

        }
    }
}