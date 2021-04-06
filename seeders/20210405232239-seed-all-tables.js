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
       name: 'For Sale',
       createdAt: new Date(),
       updatedAt: new Date()
     },

     {
       name: 'Community',
       createdAt: new Date(),
       updatedAt: new Date()
     },

     {
       name: 'Discussion',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])

   await queryInterface.bulkInsert('posts', [
     {
       title: 'Dinner Table',
       description: '1965 oak table. Well worn and seen better days',
       createdAt: new Date(),
       updatedAt: new Date()
     },

     {
       title: 'Chairty Fundraiser for Homeless',
       description: 'Come support the homeless this Saturday',
       createdAt: new Date(),
       updatedAt: new Date()
     },

     {
       title: 'Haunted Painting',
       description: 'Is the painting really haunted? Or his is life just a mess?',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])

   await queryInterface.bulkInsert('tags', [
     {
       name: 'furniture',
       createdAt: new Date(),
       updatedAt: new Date()
     },

     {
       name: 'nonprofit',
       createdAt: new Date(),
       updatedAt: new Date()
     },

     {
       name: 'weird stuff',
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
