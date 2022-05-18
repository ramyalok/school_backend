'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_role.hasOne(models.user_profile, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'role_id'
      })
    }
  }
  user_role.init({
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull : false,
      unique: true
    },
    is_active:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
     },
     created_at: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: true,
      type: DataTypes.DATE
    },
    // created_by: {
    //   type: DataTypes.UUID,
    //   allowNull:true
    // },
    // updated_by: {
    //   type: DataTypes.UUID,
    //   allowNull:true
    // }
  }, {
    sequelize,
    modelName: 'user_role',
    underscored: true,
  });
  return user_role;
};