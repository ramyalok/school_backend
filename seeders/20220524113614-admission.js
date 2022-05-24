'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert(
    { tableName: "admissions", schema: "public" },
    [
      {
        id:1,
        name :"sangeetha",
        email:"sangeetha211196@gmail.com",
        mobile_no:"9176266835",
        class_std:1,
        contact_type:"admission",
        address :"No.410, chennai-600039",
        query:"I need an class query ",
        created_at:new Date(),
        updated_at: new Date(),
        created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
        updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
      },
      {
        id:2,
        name :"Vani",
        email:"vani@gmail.com",
        mobile_no:"9876543210",
        class_std:2,
        contact_type:"contactus",
        address :"vani andhra",
        query:"Class standard total count",
        created_at:new Date(),
        updated_at: new Date(),
        created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
        updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
      },
      {
        id:3,
        name :"Siva",
        email:"siva@gmail.com",
        mobile_no:"9876543201",
        class_std:3,
        contact_type:"contactus",
        address :"no 410 , chennai , annanagar",
        query:"I want to check the updated",
        created_at:new Date(),
        updated_at: new Date(),
        created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
        updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
      },
      {
        id:4,
        name :"Sathish",
        email:"sathish@gmail.com",
        mobile_no:"9876543210",
        class_std:1,
        contact_type:"contactus",
        address :"Police MKB nagar , Chennai",
        query:"I want to know the fees structure",
        created_at:new Date(),
        updated_at: new Date(),
        created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
        updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
      },
    ]
   )
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete(
    { table: "admissions", schema: "public" },
    null,
    { timestamps: false }
   )
  }
};
