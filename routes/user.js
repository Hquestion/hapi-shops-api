const jwt = require('jsonwebtoken');

const GROUP_NAME = 'user';

const generateJWT = (jwtInfo) => {
    const payload = {
        userId: jwtInfo.userId,
        exp: Math.floor(+new Date() / 1000) + 60 * 60,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
};

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP_NAME}/createJWT`,
        handler: async (request, reply) => {
            try {
                const result = generateJWT({
                    userId: 1,
                });
                reply(result);
            } catch (e) {
                console.log(e);
                reply(e);
            }
        },
        config: {
            tags: ['api', 'test'],
            description: '测试创建jwt token',
            auth: false,
        },
    },
];
