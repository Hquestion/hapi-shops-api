module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
        queryInterface.addColumn('bargain_record', 'user_id', {
            type: Sequelize.STRING,
            allowNull: false,
        }),
    ]),

    down: queryInterface => Promise.all([
        queryInterface.removeColumn('bargain_record', 'user_id'),
    ]),

};
