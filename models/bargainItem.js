module.exports = (sequelize, DataTypes) => sequelize.define(
    'bargainItem',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        bargain_record_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        helper_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        help_bargain_price: DataTypes.FLOAT,
    },
    {
        tableName: 'bargain_helper',
    },
);
