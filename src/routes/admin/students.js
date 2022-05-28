const models = require( '../../../models');
const { sendOutResp } = require('../../utils');

module.exports = {
    create_students : async (req,res,next) =>{
        try {
            if (Object.keys(req.body).length === 0 ) {
                return sendOutResp(res,404,"No Student data found",false)
            }
            var {student} = req.body;
            console.log("=========student created=========")
            student.created_by =  res.locals.user_profile_id;
            student.updated_by =  res.locals.user_profile_id;
            student.role_id = 4;
            student.password = "12345678";

            var student_data = await models.user_profile.create(student);

            if(!student_data) {
                console.log("========STUDENT DATA NOT CREATED========")
                return sendOutResp(res,404,"Student data not created",false)
            }
            return sendOutResp(res,201,"Student created successfully",true)
        }
        catch (err) {
            console.log("Error on creating the Student",err);
            return sendOutResp(res,404,`No Student data not created `,false)
        }
    },
    edit_student : async (req,res,next) => {
        try {
            if (!req.body.student_id) {
                return sendOutResp(res,404,"No Student Id found",false)
            }
            var {student} = req.body;
            
            student.updated_at =  new Date();
            student.updated_by =  res.locals.user_profile_id;

            let student_data = await models.user_profile.update(student, {
                where: { id: req.body.student_id },
                returning: true,
            });
            return sendOutResp(res,201,"Student updated successfully",true,student_data)

        }
        catch (err) {
            console.log("Error on updating the student" ,err);
            return sendOutResp(res,404,`student data's are not updated`,false)

        }
    },
    delete_student : async (req,res,next) => {
        try {
            if (!req.body.student_id) {
                return sendOutResp(res,404,"No Student Id found",false)
            }
            var {subject} = req.body;
            subject.is_active = false
            let subject_data = await models.subjects.update(subject, {
                where: { id: req.body.student_id },
                returning: true,
            });
            return sendOutResp(res,201,"Student data deleted successfully",true)

        }
        catch (err) {
            console.log("Error on updating the subject" ,err);
            return sendOutResp(res,404,`Subject data's are not deleted`,false)

        }
    }
}