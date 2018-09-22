const Joi = require('joi');
const { jwtHeaderDefine } = require('../utils/router-helper');
const {
    createBargain,
    helpBargain,
    isUserBargained,
    isBarginUserSelf,
} = require('../service/bargainService');
const ResponseData = require('../base/ResponseData');

const GROUP_NAME = 'bargain';

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP_NAME}/createBargain`,
        handler: async (request, reply) => {
            const auth = request.auth.credentials;
            const { goodsId } = request.payload;
            try {
                const result = await createBargain(goodsId, auth.userId);
                reply(result);
            } catch (e) {
                console.log(e);
            }
        },
        config: {
            tags: ['api', 'bargain'],
            description: '用户创建砍价分享',
            validate: {
                ...jwtHeaderDefine,
                payload: Joi.object({
                    goodsId: Joi.number().integer().required().description('商品id'),
                }).required().description('创建砍价信息传参，如商品信息等'),
            },
        },
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/helpBargain`,
        handler: async (request, reply) => {
            const auth = request.auth.credentials;
            const { bargainRecordId } = request.payload;
            try {
                const result = await helpBargain(bargainRecordId, auth.userId);
                request.log('info', '帮砍成功！');
                reply(result);
            } catch (e) {
                request.log(e);
                console.log(e);
            }
        },
        config: {
            tags: ['api', 'bargain'],
            description: '用户帮助好友砍价',
            validate: {
                ...jwtHeaderDefine,
                payload: Joi.object({
                    bargainRecordId: Joi.number().integer().required().description('砍价记录Id'),
                }).required(),
            },
        },
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/isBargainUserSelf`,
        handler: async (request, reply) => {
            const auth = request.auth.credentials;
            const { bargainRecordId } = request.query;
            try {
                const result = await isBarginUserSelf(auth.userId, bargainRecordId);
                reply(new ResponseData(result));
            } catch (e) {
                console.log(e);
            }
        },
        config: {
            tags: ['api', 'bargain'],
            description: '判断用户是否是自己砍自己',
            validate: {
                ...jwtHeaderDefine,
                query: {
                    bargainRecordId: Joi.number().integer().required().description('砍价记录Id'),
                },
            },
        },
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/isBargained`,
        handler: async (request, reply) => {
            const auth = request.auth.credentials;
            const { bargainRecordId } = request.query;
            try {
                const result = await isUserBargained(auth.userId, bargainRecordId);
                reply(new ResponseData(result));
            } catch (e) {
                console.log(e);
            }
        },
        config: {
            tags: ['api', 'bargain'],
            description: '判断用户是否已经帮助砍过价',
            validate: {
                ...jwtHeaderDefine,
                query: {
                    bargainRecordId: Joi.number().integer().required().description('砍价记录Id'),
                },
            },
        },
    },
];
