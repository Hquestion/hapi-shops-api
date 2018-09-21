/**
 * 砍价模块服务层
 */
const models = require('../models');
const ResponseData = require('../base/ResponseData');

const isBarginUserSelf = async (userId, bargainRecordId) => {
    const bargainRecord = await models.bargain.findById(bargainRecordId);
    return (bargainRecord && bargainRecord.user_id === userId) || false;
};

const isUserBargained = async (userId, bargainRecordId) => {
    const helpHistory = await models.bargainItem.findOne({
        where: {
            bargain_record_id: bargainRecordId,
            helper_id: userId,
        },
    });
    return !!helpHistory;
};

exports.createBargain = async (goodsId, userId) => {
    const goods = await models.goods.findOne({
        where: {
            id: goodsId,
        },
    });
    if (goods) {
        const bargainRecord = await models.bargain.build({
            goods_id: goodsId,
            goods_name: goods.name,
            goods_price: goods.price,
            bargain_price: goods.price,
            user_id: userId,
        });
        try {
            await bargainRecord.save();
            return new ResponseData(bargainRecord.id, '创建砍价分享成功');
        } catch (e) {
            console.log(e);
            return new ResponseData(null, '创建失败！', '1002');
        }
    } else {
        return new ResponseData(null, '商品不存在！', '4000');
    }
};

exports.helpBargain = async (bargainRecordId, userId) => {
    const isBargainSelf = await isBarginUserSelf(userId, bargainRecordId);
    if (isBargainSelf) {
        return new ResponseData(null, '不能对自己的砍价分享进行砍价', '1003');
    }
    const isHelped = await isUserBargained(userId, bargainRecordId);
    if (isHelped) {
        return new ResponseData(null, '您已经帮助好友砍了一刀', '1004');
    }
    const bargainRecord = await models.bargain.findOne({
        where: {
            id: bargainRecordId,
            is_delete: '0',
            is_expire: '0',
        },
    });
    if (bargainRecord) {
        let { goods_id, goods_price, bargain_price } = bargainRecord;
        const goods = await models.goods.findOne({
            where: {
                id: goods_id,
            },
        });
        // 随机帮砍10-20元和当前价格与折扣价差的最小值
        const randomNumber = Math.floor((Math.random() * 10 + 10) * 100) / 100;
        const randomPrice = Math.min(randomNumber, bargain_price - goods.discount_price);
        if (bargain_price > goods.discount_price) {
            // 更新砍过之后的价格，新增砍价记录
            try {
                await models.bargain.update({
                    bargain_price: bargain_price - randomPrice,
                }, {
                    where: {
                        id: bargainRecordId,
                    },
                });
                const bargainItem = await models.bargainItem.build({
                    bargain_record_id: bargainRecordId,
                    helper_id: userId,
                    help_bargain_price: randomPrice,
                });
                await bargainItem.save();
                return new ResponseData(randomPrice, '帮好友砍价成功！');
            } catch (e) {
                console.log(e);
                return new ResponseData(null, '数据库操作失败！', '1002');
            }
        } else {
            // 已经不能再砍价，提示用户砍价失败
            return new ResponseData(null, '已达商品最低价，无法继续砍价！', '4000');
        }
    } else {
        return new ResponseData(null, '砍价记录不存在或者已失效！', '4000');
    }
};

exports.isUserBargained = isUserBargained;
exports.isBarginUserSelf = isBarginUserSelf;
