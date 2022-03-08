const request = require('request');

const doRequest = (url) => {
    const callback = (error, httpResponse, body) => {
        const response = JSON.parse(body);
        console.log(response)
    };
    request(url, callback);
};

const getPriceCoinBase = () => {
    const url = 'http://api.coinbase.com/v2/prices/spot?currency=USD';

    doRequest(url);
};

getPriceCoinBase();