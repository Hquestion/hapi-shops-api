module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
        queryInterface.addColumn('shops', 'address', {
            type: Sequelize.STRING,
        }, {
            charset: 'utf8',
        }),
    ]),

    down: queryInterface => Promise.all([
        queryInterface.removeColumn('shops', 'address'),
    ]),
};
