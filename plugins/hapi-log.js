const good = require('good');

module.exports = {
    register: good,
    options: {
        ops: {
            interval: 1000,
        },
        reporters: {
            myConsoleReporter: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    log: '*',
                    response: '*',
                    error: '*',
                }],
            }, {
                module: 'good-console',
                args: [{
                    format: 'YYYY-MM-DD HH:mm:ss',
                }],
            }, 'stdout'],
            myFileReporter: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    // ops: '*',
                    log: '*',
                    request: '*',
                    response: '*',
                    error: '*',
                }],
            }, {
                module: 'good-squeeze',
                name: 'SafeJson',
            }, {
                module: 'good-file',
                args: ['./logs/log.txt'],
            }],
        },
    },
};
