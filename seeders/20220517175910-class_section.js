'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      { tableName: "class_sections", schema: "public" },
      [
        {
          id:1,
          class_std:6,
          section:"a",
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:2,
          class_std:7,
          section:"a",
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:3,
          class_std:8,
          section:"a",
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:4,
          class_std:8,
          section:"b",
          created_at:new Date(),
          updated_at: new Date(),
          created_by:"c21c00d6-66d3-11eb-ae93-0242ac130002",
          updated_by:"c21c00d6-66d3-11eb-ae93-0242ac130002"
        },
        {
          id:5,
          class_std:9,
          section:"c",
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
    { table: "class_sections", schema: "public" },
    null,
    { timestamps: false }
  )
  }
};
