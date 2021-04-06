// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//     await queryInterface.bulkInsert('categories', [
//      {
//         name: "For sale",
//         createdAt: new Date(),
//         updatedAt: new Date()
//      },
//      {
//         name: "Community",
//         createdAt: new Date(),
//         updatedAt: new Date()
//      }     
//     ])

//    await queryInterface.bulkInsert('posts', [
//       {
//          title: 'Office DVD set',
//          description: 'Like-new condition',
//          createdAt: new Date(),
//          updatedAt: new Date()
//       },
//       {
//          title: 'Rescue animal',
//          description: 'donate some food and items for animal shelter',
//          createdAt: new Date(),
//          updatedAt: new Date()
//       },
//       {
//         title: 'Used car',
//         description: 'Like-new condition',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//    ])
//    await queryInterface.bulkInsert('tags', [
//     {
//         name:'itme'
//         createdAt: new Date(),
//         updatedAt: new Date()
//     },
//     {
//         name:'help community'
//         createdAt: new Date(),
//         updatedAt: new Date()
//     },
//     {
//         name:'car'
//         createdAt: new Date(),
//         updatedAt: new Date()
//     }
//  ])
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
