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
     await models.tag.bulkCreate([
      { name: 'Best-Of' },
      { name: 'Offensive' },
    ]),
    await models.post.bulkCreate([
      {title: 'Chair For Sale', description: 'lighty-use, purple velvet chair: $40', categoryId: 1, tagIds: []}
    ]),
    await models.category.bulkCreate([
      { name: 'ForSale', description: 'posts about items ppl are selling', tagIds: []},
      { name: 'Community', description: 'posts where ppl talk about their local community', tagIds: []},
      { name: 'Discussion', description: 'debates, can get heated', tagIds: []}
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
