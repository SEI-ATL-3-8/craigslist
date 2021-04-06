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
     ])
     await queryInterface.bulkInsert('posts', [
      {
        name: "Snare Drum",
        description: "ludwig black beauty",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Neighborhood Talk",
        description: "ormewood park talk",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      name: "The Falcons",
      description: "Maybe the falcons won't suck ass this year",
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    ])
    await queryInterface.bulkInsert('tags', [
      {
        name: "Music",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
       name: "Atlanta",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Sports",
       createdAt: new Date(),
       updatedAt: new Date()
     }
    ])
    await queryInterface.bulkInsert('joins', [
      {
        postId: 1,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 2,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      postId: 3,
      tagId: 3, 2,
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ])
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
}
