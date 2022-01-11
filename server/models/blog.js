'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  blog.init({
    Title: DataTypes.STRING,
    Author: DataTypes.STRING,
    Date: DataTypes.STRING,
    Content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};