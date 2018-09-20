module.exports = {
    up: (queryInterface) => {
        const time = {
            created_at: new Date(),
            updated_at: new Date(),
        };
        return queryInterface.bulkInsert(
            'shops',
            [
                {
                    id: 1, name: 'NIKE', thumb_url: '1.jpg', address: 'America', ...time,
                },
            ],
            {},
        );
    },

    down: (queryInterface, Sequelize) => {
        const { Op } = Sequelize;
        return queryInterface.bulkDelete('shops', {
            id: {
                [Op.in]: [1],
            },
        }, {});
    },
};
