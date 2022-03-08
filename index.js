const request = require('request');

const parseJSON = (data) => {
    try {
        return JSON.parse(data);
    } catch (error) {
        return null;
    };
};

const formatValue = (value) => {
    const parsedValue = parseFloat(value, 10);
    return parsedValue.toFixed(2);
};

const doRequest = (url, dataPrice, dataCurrency) => {
    const callback = (error, httpResponse, body) => {
        const response = parseJSON(body);
        const price = (response) ? dataPrice(response) : null;
        const currency = (response) ? dataCurrency(response) : null;
        console.log(currency + ' ' + price);
    };
    request(url, callback);
};

const getPriceCoinBase = () => {
    const url = 'http://api.coinbase.com/v2/prices/spot?currency=USD';
    const dataPrice = (response) => formatValue(response.data.amount);
    const dataCurrency = (response) => response.data.currency;
    doRequest(url, dataPrice, dataCurrency);
};

getPriceCoinBase();