'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING
      },
      mobile_no:{
        type:Sequelize.STRING
      },
      address:{
        type:Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING
      },
      mobile:{
        type:Sequelize.STRING
      },
      description:{
        type:Sequelize.STRING
      },
      query:{
        type:Sequelize.STRING
      },
      father_name:{
        type:Sequelize.STRING
      },
      mother_name:{
        type:Sequelize.STRING
      },
      parent_email:{
        type:Sequelize.STRING
      },
      father_qualification:{
        type:Sequelize.STRING
      },
      mother_qualification:{
        type:Sequelize.STRING
      },
      father_monthly_income:{
        type:Sequelize.STRING
      },
      mother_monthly_income:{
        type:Sequelize.STRING
      },
      no_of_childrens:{
        type:Sequelize.INTEGER
      },
      is_approved:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      class_std: {
        type: Sequelize.INTEGER,
        allowNull:true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'class_sections',
          key: 'id'
        }
      },
      contact_type:{
        type:Sequelize.STRING,
        allowNull:true
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
        allowNull:true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'user_profiles',
          key: 'id'
        }
      },
      updated_by: {
        type: Sequelize.UUID,
        allowNull:true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'user_profiles',
          key: 'id'
        }
      }    
    },{underscored:true,timestamps:false});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('admissions');
  }
};