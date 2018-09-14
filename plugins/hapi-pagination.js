const hapiPagination = require('hapi-pagination');

const options = {
    query: {
        page: {
            name: 'page',
            default: 1,
        },
        limit: {
            name: 'limit',
            default: 25,
        },
        pagination: {
            name: 'pagination',
            default: true,
        },
        invalid: 'badRequest',
    },
    meta: {
        name: 'meta',
    },
    results: {
        name: 'results',
    },
    reply: {
        paginate: 'paginate',
    },
    routes: {
        include: [
            '/shops',
        ],
        exclude: [],
    },
};

module.exports = {
    register: hapiPagination,
    options,
};
