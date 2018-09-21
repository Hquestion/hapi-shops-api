const jwt = require('jsonwebtoken');

exports.generateJWT = (jwtInfo) => {
    const payload = {
        userId: jwtInfo.userId,
        exp: Math.floor(+new Date() / 1000) + 60 * 60,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
};
