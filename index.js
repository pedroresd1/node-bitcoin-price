const request = require('request');

const getPriceCoinBase = () => {
    const url = 'http://api.coinbase.com/v2/prices/spot?currency=USD';

    const callback = (error, httpResponse, body) => {
        const response = JSON.parse(body);
        console.log(response);
    };
    request(url, callback);
};
getPriceCoinBase();