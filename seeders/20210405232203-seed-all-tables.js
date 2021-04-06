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
        name: "For Sale",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: "Community",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: "Discussion",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: "Free",
        createdAt: new Date(),
        updatedAt: new Date()
     }
   ])

   await queryInterface.bulkInsert('posts', [
      {
        title: 'Fishing Boat',
        description: 'The best darn boat ya ever seen',
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Couch LIKE NEW',
        description: 'Only used 5 years, by 5 college roomates',
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lamp',
        description: 'I love lamp',
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Tv',
        description: 'Some 400lb block from 2011',
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])

    await queryInterface.bulkInsert('tags', [
      {
        name: "Best-Of",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Offensive",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Do not waist your time",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

    await queryInterface.bulkInsert('hashtags', [
      {
        tagId: 1,
        postId: 1,
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
    return await queryInterface.bulkDelete('categories', null, {})
  }
};
