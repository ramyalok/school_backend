'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_profile.hasOne(models.class_section, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'created_by'
      })
      user_profile.hasOne(models.class_section, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'updated_by'
      })

      user_profile.hasOne(models.class_section, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'created_by'
      })
      user_profile.hasOne(models.class_section, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'updated_by'
      })

      user_profile.belongsTo(models.user_role, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'role_id'
      })
      user_profile.belongsTo(models.class_section, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'class_std'
      })

    }
  }
  user_profile.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    last_name : {
      type :DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      // unique:{
      //   msg:"Email already exist"
      // },
      // validate:{
      //   isEmail:{
      //     msg:"Email should contains like abc@gmail.com"
      //   }
      // }
    },
    mobile_no:{
      type: DataTypes.STRING,
      // unique:{
      //   msg:"Mobile Number already exist"
      // },
      allowNull:false,
      // validate:{
      //   len:{
      //     args:[10,13],
      //     msg:"Mobile Number should atleast contains 10 digits"
      //   } ,
      //   isInt:{
      //     msg:"Mobile Number should contains digits"
      //   }
      // }
    },
    password:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    role_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    class_std:{
      type:DataTypes.INTEGER,
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
    modelName: 'user_profile',
    underscored: true,
  });
  return user_profile;
};