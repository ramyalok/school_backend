'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject_name: {
        type: Sequelize.STRING
      },
      class_std :{
        type : Sequelize.INTEGER,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'class_sections',
          key: 'id'
        }
      },
      is_active:{
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
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
    },{underscored: true,timestamps:false});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subjects');
  }
};