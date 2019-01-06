'use strict';
var mockup = require("./mockup.js");

module.exports.list = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            customers: mockup.customers
        }),
    };
};

module.exports.getById = async (event, context) => {
    let id = parseInt(event.pathParameters.id);
    let customer;

    if (!isNaN(id)) {
        customer = mockup.customers[id - 1]
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            customer: customer
        }),
    };
};