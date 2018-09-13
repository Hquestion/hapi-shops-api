const GROUP_NAME = 'shops';
const Joi = require('joi');
const models = require('../models');

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            try {
                const result = await models.shops.findAll();
                reply(result);
            } catch (e) {
                reply();
            }
        },
        config: {
            tags: ['api', `${GROUP_NAME}`],
            description: '获取商店列表接口',
            validate: {
                query: {
                    limit: Joi.number().integer().min(1).default(10)
                        .description('每页条目数'),
                    page: Joi.number().integer().min(1).default(1)
                        .description('当前页码'),
                },
            },
        },
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: async (request, reply) => {
            reply();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺的商品列表',
            validate: {
                params: {
                    shopId: Joi.string().required(),
                },
            },
        },
    },
];
