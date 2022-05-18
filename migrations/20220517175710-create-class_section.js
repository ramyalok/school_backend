'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('class_sections', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      class_std: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      section:{
        type:Sequelize.STRING,
        allowNull:false
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('class_sections');
  }
};