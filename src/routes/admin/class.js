const models = require( '../../../models');
const { sendOutResp } = require('../../utils');

require("../../utils");

module.exports = {
    create_class : async (req,res,next) =>{
        try {
            if (Object.keys(req.body).length === 0 ) {
                return sendOutResp(res,404,"No Class data found",false)
            }
            var class_data = req.body;
            class_data.created_by =  res.locals.user_profile_id;
            class_data.updated_by =  res.locals.user_profile_id;
 
            var class_result = await models.class_section.create(class_data);

            if(!class_result) {
                console.log("========CLASS DATA NOT CREATED========")
                return sendOutResp(res,404,"Class Section data not created",false)
            }
            return sendOutResp(res,201,"Class Section created successfully",true,v_data)
        }
        catch (err) {
            console.log("==Error on creating the class section");
            return sendOutResp(res,404,`No Class section data not created `,false)
        }
    },
    edit_class : async (req,res,next) => {
        try {
            if (!req.body.class_id) {
                return sendOutResp(res,404,"No Class Id found",false)
            }
            var {class_section} = req.body;
            
            class_section.updated_at =  new Date();
            class_section.updated_by =  res.locals.user_profile_id;

            let class_section_data = await models.class_section.update(class_section, {
                where: { id: req.body.class_id },
                returning: true,
            });
            return sendOutResp(res,201,"Subject updated successfully",true)

        }
        catch (err) {
            console.log("Error on updating the subject" ,err);
            return sendOutResp(res,404,`Subject data's are not updated`,false)

        }
    },
    delete_class : async (req,res,next) => {
        try {
            if (!req.body.class_id) {
                return sendOutResp(res,404,"No Subject Id found",false)
            }
            var {class_section} = req.body;
            class_section.is_active = false;
            let class_section_data = await models.class_section.update(class_section, {
                where: { id: req.body.class_id },
                returning: true,
            });
            return sendOutResp(res,201,"Class data deleted successfully",true)

        }
        catch (err) {
            console.log("Error on updating the class" ,err);
            return sendOutResp(res,404,`Class data's are not deleted`,false)

        }
    }
}