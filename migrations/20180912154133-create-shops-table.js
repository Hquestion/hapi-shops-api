module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('shops', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        thumb_url: Sequelize.STRING,
        address: Sequelize.STRING,
        description: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
        is_delete: {
            type: Sequelize.STRING, // 1,0
            defaultValue: '0',
        },
    }, {
        charset: 'utf8',
    }),
    down: queryInterface => queryInterface.dropTable('shops'),
};
