'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class taggedPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.taggedPost.belongsTo(models.post)
      models.taggedPost.belongsTo(models.tag)
      // define association here
    }
  };
  taggedPost.init({
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'taggedPost',
  });
  return taggedPost;
};