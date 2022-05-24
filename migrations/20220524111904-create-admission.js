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
      name: {
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
      query:{
        type:Sequelize.STRING
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
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'user_profiles',
          key: 'id'
        }
      },
      updated_by: {
        type: Sequelize.UUID,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'user_profiles',
          key: 'id'
        }
      }    
    },{underscored:true});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('admissions');
  }
};