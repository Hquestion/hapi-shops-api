module.exports = {
    up: (queryInterface) => {
        const time = {
            created_at: new Date(),
            updated_at: new Date(),
        };
        queryInterface.bulkInsert(
            'shops',
            [
                {
                    id: 1, name: 'NIKE', thumb_url: '1.jpg', address: '广东莆田', ...time,
                },
                {
                    id: 2, name: 'ADIDAS', thumb_url: '2.jpg', address: '苏州太仓', ...time,
                },
                {
                    id: 3, name: 'PUMA', thumb_url: '3.jpg', address: '美国硅谷', ...time,
                },
            ],
            {},
        );
    },

    down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
        const { Op } = Sequelize;
        return queryInterface.bulkDelete('shops', {
            id: {
                [Op.in]: [1, 2, 3],
            },
        }, {});
    },
};
