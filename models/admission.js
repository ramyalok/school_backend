'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      admission.belongsTo(models.user_profile, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'created_by'
      })
      admission.belongsTo(models.user_profile, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'updated_by'
      })    
      admission.belongsTo(models.class_section, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'class_std'
      })    
    }
  }
  admission.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email:{
      type:DataTypes.STRING
    },
    is_approved:{
      defaultValue:false,
      type:DataTypes.BOOLEAN
    },
    description:{
      type:DataTypes.STRING
    },
    mobile_no:{
      type:DataTypes.STRING
    },
    address:{
      type:DataTypes.STRING
    },
    class_std:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    query:{
      type:DataTypes.STRING,
      allowNull:true
    },
    father_name:{
      allowNull:false,
      type:DataTypes.STRING
    },
    mother_name:{
      allowNull:false,
      type:DataTypes.STRING
    },
    parent_email:{
      allowNull:false,
      type:DataTypes.STRING
    },
    father_qualification:{
      allowNull:false,
      type:DataTypes.STRING
    },
    mother_qualification:{
      allowNull:false,
      type:DataTypes.STRING
    },
    father_monthly_income:{
      allowNull:false,
      type:DataTypes.STRING
    },
    mother_monthly_income:{
      allowNull:false,
      type:DataTypes.STRING
    },
    no_of_childrens:{
      allowNull:false,
      type:DataTypes.INTEGER
    },

    contact_type:{
      type:DataTypes.STRING,
      allowNull:true
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
    // createdAt: {
    //   allowNull: true,
    //   type: DataTypes.DATE
    // },
    // updatedAt: {
    //   allowNull: true,
    //   type: DataTypes.DATE
    // },
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
    modelName: 'admission',
  });
  return admission;
};