const env2 = require('env2');

if (process.env.NODE_ENV === 'production') {
    env2('./.env.prod');
} else {
    env2('./.env');
}
const { env } = process;

module.exports = {
    development: {
        username: env.MYSQL_USERNAME,
        password: env.MYSQL_PASSWORD,
        database: env.MYSQL_DB_NAME,
        host: env.MYSQL_HOST,
        port: env.MYSQL_PORT,
        dialect: 'mysql',
        timezone: '+08:00',
        define: {
            charset: 'utf8',
            dialectOptions: {
                collate: 'utf8_general_ci',
            },
        },
    },
    production: {
        username: env.MYSQL_USERNAME,
        password: env.MYSQL_PASSWORD,
        database: env.MYSQL_DB_NAME,
        host: env.MYSQL_HOST,
        port: env.MYSQL_PORT,
        dialect: 'mysql',
        timezone: '+08:00',
        define: {
            charset: 'utf8',
            dialectOptions: {
                collate: 'utf8_general_ci',
            },
        },
    },
};
