'use strict';

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await models.category.bulkCreate([
      {
        name: 'Community',
        description: 'Share community highlights or happenings here!'
      },
      {
        name: 'Discussion',
        description: 'Discuss, debate, and deconstruct the mysteries of the world!'
      },
      {
        name: 'Marketplace',
        description: 'Supply and demand, sellers and buyers!'
      }
    ])
    await models.tag.bulkCreate([
      { name: 'Greatest Hits' },
      { name: 'Offensive' },
      { name: 'Comedy Gold' },
      { name: 'Useful AF' },
      { name: 'Spoilers' }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
