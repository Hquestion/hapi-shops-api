const GROUP_NAME = 'shops';
const Joi = require('joi');
const models = require('../models');
const { paginationDefine, jwtHeaderDefine } = require('../utils/router-helper');

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            try {
                const { rows: results, count: totalCount } = await models.shops.findAndCountAll({
                    attributes: {
                        exclude: ['updated_at', 'created_at'],
                    },
                    limit: request.query.limit,
                    offset: (request.query.page - 1) * request.query.limit,
                });
                console.log(results);
                reply({ results, totalCount });
            } catch (e) {
                console.log(e);
                reply();
            }
        },
        config: {
            tags: ['api', `${GROUP_NAME}`],
            description: '获取商店列表接口',
            validate: {
                ...jwtHeaderDefine,
                query: {
                    ...paginationDefine,
                },
            },
            auth: false,
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
