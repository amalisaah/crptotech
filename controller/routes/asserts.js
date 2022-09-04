import express from 'express';
import fetch from 'node-fetch';

const addAssertRouter = express.Router();
addAssertRouter.get('/', async (req, res) => {
    const headers = {
        headers: {
        'X-CMC_PRO_API_KEY': '8111669a-0ff1-4398-aef8-5bb4a40d5323',
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
    
    }};
    const baseUrl = 'https://pro-api.coinmarketcap.com';
    const endPoint = '/v2/tools/price-conversion';
    const requestParams = `?id=${req.query.id}&amount=${req.query.amount}&convert=${req.query.convert}`;
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;

    try {
    const cryptoInfo = await fetch(urlToFetch, headers);
    const data = await cryptoInfo.json();
    res.json(data);

    } catch(error) {
        console.error(error.message);
    }
})

export default addAssertRouter;