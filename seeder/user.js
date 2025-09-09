'use strict';

export async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
        {
            full_name: "james barret",
            email : "jamesbarret@gmail.com",
            password : "imjames123"
        },
        {
            full_name: "Alice Example",
            email: "alice@example.com",
            password: "password123"
          },
          {
            full_name: "Bob Test",
            email: "bob@example.com",
            password: "password456"
          }
    ]);
  };

  export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { email: 'demo@example.com' });
  };
