'use strict';
var mockup = require("./mockup.js");

module.exports.list = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            products: mockup.products
        }),
    };
};

module.exports.getById = async (event, context) => {
    let id = parseInt(event.pathParameters.id);
    let product;

    if (!isNaN(id)) {
        product = mockup.products[id - 1]
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            product: product
        }),
    };
};