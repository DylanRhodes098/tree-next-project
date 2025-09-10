'use-strict'

export async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profile', [
        {
            
                id: 'd6f5d3b0-12ab-4c9f-bbbb-1234567890ab',
                full_name: "Sophie Lane",
                address: "123 High Street, London",
                mobile_number: "447911223344",
                email: "sophie@example.com",
                date_of_birth: new Date("1998-06-12"),
                linkedin: "https://linkedin.com/in/sophielane",
                whatsapp: "447911223344",
                instagram: "sophie_fit",
                snapchat: "sophie_snap",
                tiktok: "sophie_tok",
                interests: "Yoga, Hiking, Cooking",
                notes: "Met at the gym, loves yoga and hiking",
                groupsId:'d6f5d3b0-12ab-4c9f-bbbb-1234567890ab', 
    }])
}

export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profile')};

