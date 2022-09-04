import express from 'express';
import fetch from 'node-fetch';

const sortCryptoRouter = express.Router();
sortCryptoRouter.get('/', async (req, res) => {
    const sortBy = req.query.sort;
    const sortIn = req.query.sort_dir;
    const headers = {
        headers: {
        'X-CMC_PRO_API_KEY': '8111669a-0ff1-4398-aef8-5bb4a40d5323',
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
    
    }};
    const baseUrl = 'https://pro-api.coinmarketcap.com';
    const endPoint = '/v1/cryptocurrency/listings/latest';
    const requestParams = `?sort=${sortBy}&sort_dir=${sortIn}`;
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;
    console.log(urlToFetch)

    try {
    const cryptoInfo = await fetch(urlToFetch, headers);
    const data = await cryptoInfo.json();
    res.json(data);

    } catch(error) {
        console.error(error.message);
    }
})

export default sortCryptoRouter;