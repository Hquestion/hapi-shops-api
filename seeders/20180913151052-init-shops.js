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
                {
                    id: 2, name: 'ADIDAS', thumb_url: '2.jpg', address: 'Suzhou', ...time,
                },
                {
                    id: 3, name: 'PUMA', thumb_url: '3.jpg', address: '中国香港', ...time,
                },
            ],
            {},
        );
    },

    down: (queryInterface, Sequelize) => {
        const { Op } = Sequelize;
        return queryInterface.bulkDelete('shops', {
            id: {
                [Op.in]: [1, 2, 3],
            },
        }, {});
    },
};
