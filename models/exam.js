'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      exam.belongsTo(models.class_section, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'class_std'
      })
    }
  }
  exam.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    exam_name: {
      type: DataTypes.STRING, allowNull: false
    },
    exam_at:{
      allowNull: true,
      type: DataTypes.DATE
    },
    subject_name:{
      type: DataTypes.STRING,
      allowNull:false
    },
    class_std:{
      type: DataTypes.INTEGER,
      allowNull:false
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
    created_by: {
      type: DataTypes.UUID,
      allowNull:true
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'exam',
    underscored: true,
  });
  return exam;
};