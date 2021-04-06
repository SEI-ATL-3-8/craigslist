'use strict';

const e = require("cors");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
      title: "bike for sale",
      body: "you can do really cool tricks on it",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "1996 Toyota Camry - Green",
      body: "An absolute delight to drive",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Free broken refrigerator!",
      body: "Really nice fridge. DOES NOT WORK",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Requesting amazing lawn mowing service",
      body: "Only got five bucks tho",
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
