'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_profiles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name : {
        type :Sequelize.STRING,
        allowNull: false
      },
      // class_std :{
      //   type: Sequelize.INTEGER,
      //   onDelete: 'SET NULL',
      //   onUpdate: 'CASCADE',
      //   references: {
      //     model: 'class_sections',
      //     key: 'id'
      //   }
      // },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      mobile_no:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      password:{
        type:Sequelize.TEXT,
        allowNull:false
      },
      role_id:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      is_active:{
        type: Sequelize.BOOLEAN,
        defaultValue: true
       },
       created_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.UUID,
        allowNull:true
      },
      updated_by: {
        type: Sequelize.UUID,
        allowNull:true
      }
    },{ timestamps:false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_profiles');
  }
};