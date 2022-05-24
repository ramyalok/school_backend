const models = require( '../../../models');
const { sendOutResp } = require('../../utils');

module.exports = {
    create_subjects : async (req,res,next) =>{
        try {
            if (Object.keys(req.body).length === 0 ) {
                return sendOutResp(res,404,"No Subject data found",false)
            }
            var subject = req.body;
            
            subject.created_by =  res.locals.user_profile_id;
            subject.updated_by =  res.locals.user_profile_id;
 
            var subject_result = await models.subjects.create(subject);

            if(!subject_result) {
                console.log("========SUBJECT DATA NOT CREATED========")
                return sendOutResp(res,404,"Subject data not created",false)
            }
            return sendOutResp(res,201,"Subject created successfully",true)
        }
        catch (err) {
            console.log("==Error on creating the subject");
            return sendOutResp(res,404,`No Subjects data not created `,false)
        }
    },
    edit_subject : async (req,res,next) => {
        try {
            if (!req.body.subject_id) {
                return sendOutResp(res,404,"No Subject Id found",false)
            }
            var {subject} = req.body;
            
            subject.updated_at =  new Date();
            subject.updated_by =  res.locals.user_profile_id;

            let subject_data = await models.subjects.update(subject, {
                where: { id: req.body.subject_id },
                returning: true,
            });
            return sendOutResp(res,201,"Subject updated successfully",true)

        }
        catch (err) {
            console.log("Error on updating the subject" ,err);
            return sendOutResp(res,404,`Subject data's are not updated`,false)

        }
    },
    delete_subject : async (req,res,next) => {
        try {
            if (!req.body.subject_id) {
                return sendOutResp(res,404,"No Subject Id found",false)
            }
            var {subject} = req.body;
            subject.is_active = false
            let subject_data = await models.subjects.update(subject, {
                where: { id: req.body.subject_id },
                returning: true,
            });
            return sendOutResp(res,201,"Subject data deleted successfully",true)

        }
        catch (err) {
            console.log("Error on updating the subject" ,err);
            return sendOutResp(res,404,`Subject data's are not deleted`,false)

        }
    }
}