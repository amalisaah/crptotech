import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const allCryptoRouter = express.Router();

allCryptoRouter.get('/', async (req, res) => { 
    const headers = {
        headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY,
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
    
    }};
    const id = req.query.id;
    if (id) {
        const baseUrl = 'https://pro-api.coinmarketcap.com';
        const endPoint = '/v2/cryptocurrency/info';
        const requestParams = `?id=${id}`;
        const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;
    
        try {
        const cryptoInfo = await fetch(urlToFetch, headers);
        const data = await cryptoInfo.json();
        res.json(data);
    
        } catch(error) {
            console.error(error.message);
        }
    } else {
        try {
            const crytpoInfo = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', headers);
            const data = await crytpoInfo.json();
            res.json(data);
            console.log("Hello There")
            } catch(error) {
                console.log(error.message);
            }
        
    }
 
})

export default allCryptoRouter;