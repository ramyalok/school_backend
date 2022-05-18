'use strict';
// var bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password_hash = () => {
      var new_password = "1234567890";
      // var salt = bcrypt.genSaltSync(8);
      // var hash = bcrypt.hashSync(new_password.toString(), salt);
      return new_password;
    };

    return queryInterface.bulkInsert(
      { tableName: "user_profiles", schema: "public" },
      [
        {
          id:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          role_id:1,
          first_name:"Pradeep",
          // class_std:1,
          last_name:"kumaresan",
          email:"mailtopradeepk.1996@gmail.com",
          mobile_no:"9176266835",
          password: password_hash(),
          created_at:new Date(),
          updated_at: new Date(),
        },
        {
          id:"c21c032e-66d3-11eb-ae93-0242ac130002",
          role_id:2,
          first_name:"Sathish",
          // class_std:2,
          last_name:"kumaresan",
          email:"mailtosathishk.2001@gmail.com",
          mobile_no:"8124701416",
          password: password_hash(),
          created_at:new Date(),
          updated_at: new Date(),
        },  {
          id:"9890a3c0-66e2-11eb-ae93-0242ac130002",
          role_id:3,
          first_name:"Ramya",
          // class_std:3,
          last_name:"kumaresan",
          email:"psramlok@gmail.com",
          mobile_no:"8248397640",
          password: password_hash(),
          created_at:new Date(),
          updated_at: new Date(),
        },  {
          id:"9890a4b0-66e2-11eb-ae93-0242ac130002",
          role_id:4,
          first_name:"Lokesh",
          // class_std:4,
          last_name:"Narayanan",
          email:"lokeshkannan1986@gmail.com",
          mobile_no:"9840584074",
          password: password_hash(),
          created_at:new Date(),
          updated_at: new Date(),
        },  {
          id:"9890a8e8-66e2-11eb-ae93-0242ac130002",
          role_id:4,
          // class_std:1,
          first_name:"Pradeep",
          last_name:"kumaresan buna",
          email:"kumarapypradeep@gmail.com",
          mobile_no:"9176266836",
          password: password_hash(),
          created_at:new Date(),
          updated_at: new Date(),
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete(
    { table: "user_profiles", schema: "public" },
    null,
    { timestamps: false }
  )
  }
};
