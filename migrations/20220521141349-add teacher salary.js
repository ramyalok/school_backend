'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn('user_profiles', 'teacher_salary', {
      type: Sequelize.STRING,
      allowNull : true
    })
    queryInterface.addColumn('user_profiles', 'teacher_experience', {
      type: Sequelize.STRING,
      allowNull : true
    })
    queryInterface.addColumn('user_profiles', 'address', {
      type: Sequelize.STRING,
      allowNull : true
    })
    queryInterface.addColumn('user_profiles', 'dob', {
      type: Sequelize.DATE,
      allowNull : true
    })



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     queryInterface.removeColumn('user_profiles', 'teacher_salary')
     queryInterface.removeColumn('user_profiles', 'teacher_experience')
     queryInterface.removeColumn('user_profiles', 'address')
     queryInterface.removeColumn('user_profiles', 'dob')


  }
};
