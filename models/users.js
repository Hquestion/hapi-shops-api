module.exports = (sequelize, DataTypes) => sequelize.define(
    'users',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gender: DataTypes.STRING,
        address: DataTypes.STRING,
        openid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unionid: DataTypes.STRING,
    },
    {
        tableName: 'users',
    },
);
