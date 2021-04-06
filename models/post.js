'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const {post, category} = models;
      post.belongsTo(category);
    }
  };
  post.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};