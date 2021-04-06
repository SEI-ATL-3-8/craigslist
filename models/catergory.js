'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class catergory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.catergory.hasMany(models.post)
      models.catergory.belongsToMany(models.tag, {through:'tagging'})
    }
  };
  catergory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'catergory',
  });
  return catergory;
};