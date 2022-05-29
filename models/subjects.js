'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subjects.beforeCreate(async(subject_data) => {
        var count = await subjects.count({});
        subject_data.id = count+1;
      })
    }
  }
  subjects.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    class_std :{
      type : DataTypes.INTEGER,
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
    timestamps:false,
    underscored:true,
    modelName: 'subjects',
  });
  return subjects;
};