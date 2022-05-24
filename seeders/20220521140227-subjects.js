'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      { tableName: "subjects", schema: "public" },
      [
        {
          id:1,
          subject_name:"science",
          class_std:1,
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:2,
          subject_name:"tamil",
          class_std:2,
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:3,
          subject_name:"science",
          class_std:1,
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:4,
          subject_name:"geography",  
          class_std:1,
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:5,
          subject_name:"history",
          class_std:4,
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete(
    { table: "subjects", schema: "public" },
    null,
    { timestamps: false }
  )
  }
};
