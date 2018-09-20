

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('bargain_helper', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        bargain_record_id: Sequelize.STRING,
        helper_id: Sequelize.STRING,
        help_bargain_price: Sequelize.FLOAT,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
    }, {
        charset: 'utf8',
    }),

    down: queryInterface => queryInterface.dropTable('bargain_helper')
    ,
};
