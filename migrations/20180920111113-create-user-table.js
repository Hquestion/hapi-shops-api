module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        gender: Sequelize.STRING,
        avatar: Sequelize.STRING,
        address: Sequelize.STRING,
        openid: Sequelize.STRING,
        unionid: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
    }, {
        charset: 'utf8',
    }),

    down: queryInterface => queryInterface.dropTable('users')
    ,
};
