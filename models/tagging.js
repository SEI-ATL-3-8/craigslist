'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tagging extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.tagging.belongsTo(models.tag)
      // models.tagging.belongsTo(models.post)
      // models.tagging.belongsToMany(models.post, { through: 'tag' })
      models.tagging.belongsToMany(models.category, { through: 'post' })

    }
  };
  tagging.init({
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tagging',
  });
  return tagging;
};
