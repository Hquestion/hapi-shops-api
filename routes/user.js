const Joi = require('joi');
const { generateJWT } = require('../utils/auth');
const userService = require('../service/userService');

const GROUP_NAME = 'user';

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
            tags: ['api', 'users'],
            description: '测试创建jwt token',
            auth: false,
        },
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/login`,
        handler: async (request, reply) => {
            try {
                const result = await userService.doLogin(request.payload);
                reply(result);
            } catch (e) {
                console.log(e);
            }
        },
        config: {
            tags: ['api', 'users'],
            description: '用户登陆等相关接口',
            auth: false,
            validate: {
                payload: Joi.object({
                    openid: Joi.string().required().description('微信openid'),
                    avatar: Joi.string().default('').description('用户头像').allow('')
                        .error(new Error('头像不能为空')),
                    name: Joi.string().required().description('用户名称'),
                    gender: Joi.string().default('').allow('').description('性别'),
                    address: Joi.string().default('').allow('').description('地址'),
                    unionid: Joi.string().default('').allow('').description('微信unionid'),
                }).required(),
            },
        },
    },
];
