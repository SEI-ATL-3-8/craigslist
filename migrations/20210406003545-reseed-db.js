'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('hashtags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tagId: {
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.createTable('tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
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
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('categories')
    await queryInterface.dropTable('hashtags')
    await queryInterface.dropTable('tags')
    await queryInterface.dropTable('posts')


  }
};
