const Hapi = require('hapi');
const HapiAuthJWT2 = require('hapi-auth-jwt2');
require('env2')('./.env');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routersShop = require('./routes/shops');
const routersOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const paginationPlugin = require('./plugins/hapi-pagination');
const routerUser = require('./routes/user');
const pluginHapiAuthJWT2 = require('./plugins/hapi-jwtAuth');

const server = new Hapi.Server();
// 配置服务器启动host与端口
server.connection({
    port: config.port,
    host: config.host,
});

const init = async () => {
    await server.register([
        ...pluginHapiSwagger,
        paginationPlugin,
        HapiAuthJWT2,
    ]);
    pluginHapiAuthJWT2(server);
    server.route([
    // 创建一个简单的hello hapi接口
        ...routesHelloHapi,
        ...routersShop,
        ...routersOrders,
        ...routerUser,
    ]);
    // 启动服务
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();
