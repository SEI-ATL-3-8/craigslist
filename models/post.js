'use strict';
const {
    Model
} = require('sequelize');
const connection = require('./connection');
module.exports = (sequelize, DataTypes) => {
    class post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.post.belongsTo(models.catagory)
            models.post.belongsToMany(models.tags, { through: 'connection' })
        }
    };
    post.init({
        title: DataTypes.STRING,
        categoryId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'post',
    });
    return post;
};