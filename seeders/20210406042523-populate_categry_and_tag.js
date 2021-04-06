'use strict';

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

    await queryInterface.bulkInsert('categories',[
      {
        name: "For Sale",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "For Free",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jobs",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Housing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Discussions",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ]);

    await queryInterface.bulkInsert('tags',[
      {
        word: "free",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        word: "sell",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        word: "house",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        word: "politics",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        word: "wanted",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ]);

    
  },

  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('categories', null, {});
     await queryInterface.bulkDelete('tags', null, {});
  }
};
