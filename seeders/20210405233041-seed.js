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

     await queryInterface.bulkInsert('categories', [
      {
         name: "Services",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         name: "For Sale",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         name: "Discussions",
         createdAt: new Date(),
         updatedAt: new Date()
      }
     ])

     await queryInterface.bulkInsert('tags', [
      {
         name: "Clothes",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         name: "Thieves",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         name: "Plumbing",
         createdAt: new Date(),
         updatedAt: new Date()
      }
     ])

     await queryInterface.bulkInsert('posts', [
      {
        title: "Plumbing Service",
        description: "Are your pipes clogged? Boy do we have the solution for you..",
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Everything must go!",
        description: "Got fat during the pandemic, none of my clothes fit, y'all can have it.",
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Bandits and Thieves!",
        description: "Have you seen them? They are everywhere! My trash got stolen!",
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
