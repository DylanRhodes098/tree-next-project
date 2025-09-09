'use-strict';

// Initiate async up function //
export async function up(queryInterface, Sequelize) {

// Define queryinterface method //
await queryInterface.createTable('groups', {
// Add data //
id: {
      type: Sequelize.DataTypes.UUIDV,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    // social platforms
    linkedin: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    whatsapp: {
      type: Sequelize.STRING, 
      allowNull: true,
    },
    instagram: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    snapchat: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tiktok: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    // extra info
    notes: {
      type: Sequelize.TEXT, 
      allowNull: true,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
})
}

// Initiate async up function //
export async function down(queryInterface, Sequelize) {

    // Define queryinterface method //
    await queryInterface.dropTable('groups')};