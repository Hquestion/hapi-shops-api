/**
 * 用户模块服务层
 */
const models = require('../models');
const ResponseData = require('../base/ResponseData');
const { generateJWT } = require('../utils/auth');

// 处理登陆业务逻辑，如果存在openid，则更新用户信息，返回jwt认证token
// 如果不存在openid，则创建用户信息，用新用户id创建jwt认证token并返回
exports.doLogin = async (info) => {
    const {
        openid, name, address, gender, avatar, unionid,
    } = info;
    const user = await models.users.findOne({
        where: {
            openid,
        },
    });
    if (user) {
        // 用户已注册
        const token = generateJWT({
            userId: user.id,
        });
        return new ResponseData(token, '登陆成功');
    }
    const newUser = await models.users.build({
        name,
        address,
        gender,
        avatar,
        openid,
        unionid,
    });
    try {
        await newUser.save();
        const token = generateJWT({
            userId: newUser.id,
        });
        return new ResponseData(token, '登陆成功');
    } catch (e) {
        return new ResponseData(null, '保存用户失败', '1002');
    }
};
