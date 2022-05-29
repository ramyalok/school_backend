'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // queryInterface.addColumn('admissions', 'gender', {
    //   type: Sequelize.ENUM("male","female","others"),
    //   allowNull : true
    // })
    queryInterface.addColumn('admissions', 'gender_name', {
      type: Sequelize.ENUM("male","female","others"),
      allowNull : true
    })
    queryInterface.addColumn('admissions', 'dob', {
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
     queryInterface.removeColumn('admissions', 'dob')
     queryInterface.removeColumn('admissions', 'gender_name')


  }
};
