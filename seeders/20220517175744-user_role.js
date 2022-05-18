'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      { tableName: "user_roles", schema: "public" },
      [
        {
          id:1,
          role_name:"admin",
          created_at:new Date(),
          updated_at: new Date(),
        },
        {
          id:2,
          role_name:"teacher",
          created_at:new Date(),
          updated_at: new Date(),
        },
        {
          id:3,
          role_name:"parent",
          created_at:new Date(),
          updated_at: new Date(),
        },
        {
          id:4,
          role_name:"student",
          created_at:new Date(),
          updated_at: new Date(),
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete(
    { table: "user_roles", schema: "public" },
    null,
    { timestamps: false }
  )
  }
};
