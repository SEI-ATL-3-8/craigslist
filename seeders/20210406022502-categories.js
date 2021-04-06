'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [{
      name: "For Sale",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Services",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Free stuff",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
