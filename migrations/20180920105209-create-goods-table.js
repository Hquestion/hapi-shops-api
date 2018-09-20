module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('goods', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        discount_price: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        thumb_url: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        shop_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        is_delete: {
            type: Sequelize.STRING, // 1,0
            defaultValue: '0',
        },
        created_at: {
            type: Sequelize.DATE,
        },
        updated_at: Sequelize.DATE,
    }, {
        charset: 'utf8',
    }),

    down: queryInterface => queryInterface.dropTable('goods'),
};
