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
    {name: 'For Sale',
    createdAt: new Date(),
    updatedAt: new Date()},
    {name: 'Community',
    createdAt: new Date(),
    updatedAt: new Date()},
    {name: 'Discussion',
    createdAt: new Date(),
    updatedAt: new Date()}
  ])
  
   await queryInterface.bulkInsert('tags',[
    {name: 'Best-Of',
    createdAt: new Date(),
    updatedAt: new Date()},
    {name: 'Offensive',
    createdAt: new Date(),
    updatedAt: new Date()}
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
