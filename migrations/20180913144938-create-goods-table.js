module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('goods', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        thumb_url: {
            type: Sequelize.STRING,
        },
        shop_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
    }),

    down: queryInterface => queryInterface.dropTable('shops'),
};
