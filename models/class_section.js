'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class class_section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      class_section.belongsTo(models.user_profile, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'created_by'
      })
      class_section.belongsTo(models.user_profile, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'updated_by'
      })
      class_section.hasMany(models.exam, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'class_std'
      })

      class_section.hasMany(models.user_profile, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'class_std',
        as:"standard_class"
      })
      class_section.hasMany(models.admission, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'class_std'
      })
    }
  }
  class_section.init({
   id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
   },
   class_std:{
    type: DataTypes.INTEGER,
    allowNull:false
   },
   section:{
     type:DataTypes.STRING,
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
    modelName: 'class_section',
    underscored: true,
  });
  return class_section;
};