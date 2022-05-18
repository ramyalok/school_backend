'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      { tableName: "exams", schema: "public" },
      [
        {
          id:1,
          exam_name:"halfyearly",
          exam_at:new Date(),
          subject_name:"science",
          class_std:1,
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:2,
          exam_name:"halfyearly",
          exam_at:new Date(),
          subject_name:"tamil",
          class_std:2,
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:3,
          exam_name:"halfyearly",
          exam_at:new Date(),
          subject_name:"science",
          class_std:1,
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:4,
          exam_name:"mid",
          exam_at:new Date(),
          subject_name:"science",
          class_std:1,
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:5,
          exam_name:"annual",
          exam_at:new Date(),
          subject_name:"maths",
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
    { table: "exams", schema: "public" },
    null,
    { timestamps: false }
  )
  }
};
