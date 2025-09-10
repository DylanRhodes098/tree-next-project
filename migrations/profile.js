'use-strict';

// Initiate async up function //
export async function up(queryInterface, Sequelize) {

// Define queryinterface method //
await queryInterface.createTable('profile', {
// Add data //
 id: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4,
          },
        full_name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        mobile_number: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        date_of_birth: {
            type: Sequelize.DATE,
            allowNull: false,
          },

          // social platforms //
        linkedin: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        whatsapp: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        instagram: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        snapchat: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        tiktok: {
            type: Sequelize.STRING,
            allowNull: false,
          },

          // extra info //
        interests: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        notes: {
            type: Sequelize.STRING,
            allowNull: false,
          },

          // metadata
          groupsId: {
            type: Sequelize.UUID,
            allowNull: false,
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
    await queryInterface.dropTable('profile')};