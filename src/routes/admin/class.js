const models = require( '../../../models');
const { sendOutResp } = require('../../utils');

require("../../utils");

module.exports = {
    create_class : async (req,res,next) =>{
        try {
            if (Object.keys(req.body).length === 0 ) {
                return sendOutResp(res,404,"No Class data found",false)
            }
            var {class_data} = req.body;
            class_data.created_by =  res.locals.user_profile_id;
            class_data.updated_by =  res.locals.user_profile_id;
            class_data.created_at = new Date();
            class_data.updated_at = new Date();
            // await models.sequelize.query(`SELECT setval('class_sections_id_seq', (SELECT MAX(id) FROM "class_sections"))`)

            var class_result = await models.class_section.create(class_data);

            if(!class_result) {
                console.log("========CLASS DATA NOT CREATED========")
                return sendOutResp(res,404,"Class Section data not created",false)
            }
            return sendOutResp(res,201,"Class Section created successfully",true)
        }
        catch (err) {
            console.log("==Error on creating the class section",err);
            return sendOutResp(res,404,`No Class section data not created `,false)
        }
    },
    edit_class : async (req,res,next) => {
        try {
            if (!req.body.class_id) {
                return sendOutResp(res,404,"No Class Id found",false)
            }
            var {class_data} = req.body;
            
            class_data.updated_at =  new Date();
            class_data.updated_by =  res.locals.user_profile_id;

            let class_section_data = await models.class_section.update(class_data, {
                where: { id: req.body.class_id },
                returning: true,
            });
            return sendOutResp(res,201,"Class Data updated successfully",true)

        }
        catch (err) {
            console.log("Error on updating the class" ,err);
            return sendOutResp(res,404,`class data's are not updated`,false)

        }
    },
    delete_class : async (req,res,next) => {
        try {
            if (!req.body.delete_id) {
                return sendOutResp(res,404,"No Subject Id found",false)
            }
            var class_section = {}
            class_section.is_active = false;
            let class_section_data = await models.class_section.update(class_section, {
                where: { id: req.body.delete_id },
                returning: true,
            });
            return sendOutResp(res,201,"Class data deleted successfully",true)

        }
        catch (err) {
            console.log("Error on updating the class" ,err);
            return sendOutResp(res,404,`Class data's are not deleted`,false)

        }
    },
    create_admission : async (req,res,next) =>{
        try {
            if (Object.keys(req.body).length === 0 ) {
                return sendOutResp(res,404,"No Admission found",false)
            }
            var {admission} = req.body;
            var admission_data = admission;
            if (res.locals.user_profile_id) {
                admission_data.created_by =  res.locals.user_profile_id;
                admission_data.updated_by =  res.locals.user_profile_id;    
            }
            admission_data.created_at = new Date();
            admission_data.updated_at = new Date();
            admission_data.contact_type = "admission"
            // admission_data.createdAt = new Date(),
            // admission_data.updatedAt = new Date()

 
            var admission_result = await models.admission.create(admission_data,{
                returning:true
            });

            if(!admission_result) {
                console.log("========Admission Data NOT CREATED========")
                return sendOutResp(res,404,"Admission data not created",false)
            }
            return sendOutResp(res,201,"Admission created successfully",true)
        }
        catch (err) {
            console.log("==Error on creating the Admission",err);
            return sendOutResp(res,404,`No Admission data not created `,false)
        }
    },
    edit_admission : async (req,res,next) => {
        try {
            if (!req.body.admission_id) {
                return sendOutResp(res,404,"No Class Id found",false)
            }
            var {admission} = req.body;
            
            admission.updated_at =  new Date();
            admission.updated_by =  res.locals.user_profile_id;

            let admission_data = await models.admission.update(admission, {
                where: { id: req.body.admission_id },
                returning: true,
            });
            return sendOutResp(res,201,"Admission updated successfully",true)

        }
        catch (err) {
            console.log("Error on updating the subject" ,err);
            return sendOutResp(res,404,`Subject data's are not updated`,false)

        }
    },
    status_admission : async (req,res,next) => {
        try {
            if (!req.body.admission_id) {
                return sendOutResp(res,404,"No Class Id found",false)
            }
            var {admission} = req.body;
            
            admission.updated_at =  new Date();
            admission.updated_by =  res.locals.user_profile_id;
            admission.is_approved = true;

            let admission_data = await models.admission.update(admission, {
                where: { id: req.body.admission_id },
                returning: true,
            });
            return sendOutResp(res,201,"Admission updated successfully",true)

        }
        catch (err) {
            console.log("Error on updating the subject" ,err);
            return sendOutResp(res,404,`Subject data's are not updated`,false)

        }
    },
    delete_admission : async (req,res,next) => {
        try {
            if (!req.body.delete_id) {
                return sendOutResp(res,404,"No Class Id found",false)
            }
            var admission = {};
            
            admission.updated_at =  new Date();
            admission.updated_by =  res.locals.user_profile_id;
            admission.is_active = false;

            let admission_data = await models.admission.update(admission, {
                where: { id: req.body.delete_id },
                returning: true,
            });
            return sendOutResp(res,201,"Admission updated successfully",true)

        }
        catch (err) {
            console.log("Error on updating the subject" ,err);
            return sendOutResp(res,404,`Subject data's are not updated`,false)

        }
    }
}