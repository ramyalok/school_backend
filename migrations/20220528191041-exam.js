'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    //  queryInterface.addColumn('exams', 'is_active', {
    //   type: Sequelize.BOOLEAN,
    //   defaultValue:true,
    //   allowNull : true
    // })
    queryInterface.addColumn('user_profiles', 'gender', {
      type: Sequelize.ENUM('male','female','others'),
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
    //  queryInterface.removeColumn('exams', 'is_active');
    //  queryInterface.removeColumn('user_profiles', 'gender')


  }
};
