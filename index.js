const request = require('request');

const doRequest = (url, dataPrice, dataCurrency) => {
    const callback = (error, httpResponse, body) => {
        const response = JSON.parse(body);
        const price = dataPrice(response);
        const currency = dataCurrency(response);
        console.log(currency + ' ' + price);
    };
    request(url, callback);
};

const getPriceCoinBase = () => {
    const url = 'http://api.coinbase.com/v2/prices/spot?currency=USD';
    const dataPrice = (response) => response.data.amount;
    const dataCurrency = (response) => response.data.currency;
    doRequest(url,dataPrice,dataCurrency);
};

getPriceCoinBase();