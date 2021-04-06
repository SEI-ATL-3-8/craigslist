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
        name: 'Jobs',
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
        name: 'pets',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'software',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    await queryInterface.bulkInsert('posts', [
      {
        title: 'Plush Snorlax',
        description: '7ft plush snorlax beanbag chair/bed',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Happy Dog',
        description: 'never fails to cheer you up',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'GA TA Position',
        description: 'wholesome work for people with a passion for coding',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    await queryInterface.bulkInsert('postTags', [
      {
        tagId: 1,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tagId: 2,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tagId: 3,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    await queryInterface.bulkInsert('categoryTags', [
      {
        categoryId: 1,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        tagId: 3,
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
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('posts', null, {});
    await queryInterface.bulkDelete('tags', null, {});
    await queryInterface.bulkDelete('postTags', null, {});
  }
};
