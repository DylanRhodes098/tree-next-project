'use-strict'

export async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('groups', [
        {
                id: 'd6f5d3b0-12ab-4c9f-bbbb-1234567890ab',
                name: "grangerdang",
                linkedin: " ",
                whatsapp: "grangerdang",
                instagram: "grangerdang",
                snapchat: "grangerdang",
                tiktok: "grangerdang",
                notes: "Me, arrows, biggs, dom"
    }])
}

export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('groups')};

