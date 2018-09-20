

module.exports = {
    up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        const time = {
            created_at: new Date(),
            updated_at: new Date(),
        };
        return queryInterface.bulkInsert(
            'goods',
            [
                {
                    id: 1,
                    name: 'Air JORDAN 空军一号',
                    thumb_url: '1.jpg',
                    price: 100.00,
                    discount_price: 100.00,
                    shop_id: 1,
                    ...time,
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
        return queryInterface.bulkDelete('goods', {
            id: {
                [Op.in]: [1],
            },
        }, {});
    },
};
