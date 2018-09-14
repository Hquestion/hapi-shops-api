const { env } = process;

module.exports = {
    host: env.HOST,
    port: env.PORT,
    appSecret: env.JWT_SECRET,
};
