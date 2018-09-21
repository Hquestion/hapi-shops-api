module.exports = (sequelize, DataTypes) => sequelize.define(
    'bargain',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        goods_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        goods_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        goods_price: DataTypes.FLOAT,
        bargain_price: DataTypes.FLOAT,
        is_expire: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '0',
        },
        is_delete: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '0',
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'bargain_record',
    },
);
