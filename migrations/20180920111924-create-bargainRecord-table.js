

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('bargain_record', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        goods_id: Sequelize.STRING,
        goods_name: Sequelize.STRING,
        goods_price: Sequelize.FLOAT,
        bargain_price: Sequelize.FLOAT,
        is_expire: Sequelize.STRING, // 1,0
        is_delete: {
            type: Sequelize.STRING, // 1,0
            defaultValue: '0',
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
    }, {
        charset: 'utf8',
    }),

    down: queryInterface => queryInterface.dropTable('bargain_record'),

};
