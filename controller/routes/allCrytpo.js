import express from 'express';
import fetch from 'node-fetch';

const allCryptoRouter = express.Router();

allCryptoRouter.get('/', async (req, res) => { 
    const headers = {
        headers: {
        'X-CMC_PRO_API_KEY': '8111669a-0ff1-4398-aef8-5bb4a40d5323',
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

// allCryptoRouter.get('/sort', async (req, res) => {
//     const sortBy = req.query.sort;
//     const sortIn = req.query.sort_dir;
//     const headers = {
//         headers: {
//         'X-CMC_PRO_API_KEY': '8111669a-0ff1-4398-aef8-5bb4a40d5323',
//         'Accept': 'application/json',
//         'Accept-Encoding': 'deflate, gzip'
    
//     }};
//     const baseUrl = 'https://pro-api.coinmarketcap.com';
//     const endPoint = '/v1/cryptocurrency/listings/latest';
//     const requestParams = `?sort=${sortBy}&sort_dir=${sortIn}`;
//     const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;
//     console.log(urlToFetch)

//     try {
//     const cryptoInfo = await fetch(urlToFetch, headers);
//     const data = await cryptoInfo.json();
//     res.json(data);

//     } catch(error) {
//         console.error(error.message);
//     }
// })


// allCryptoRouter.get('/:id', async (req, res) => {
//     console.log(req.query);
//     const id = req.query.id;
//     console.log(id)
//     const headers = {
//         headers: {
//         'X-CMC_PRO_API_KEY': '8111669a-0ff1-4398-aef8-5bb4a40d5323',
//         'Accept': 'application/json',
//         'Accept-Encoding': 'deflate, gzip'
    
//     }};
//     const baseUrl = 'https://pro-api.coinmarketcap.com';
//     const endPoint = '/v2/cryptocurrency/info';
//     const requestParams = `?id=${id}`;
//     const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;
//     console.log(urlToFetch)

//     try {
//     const cryptoInfo = await fetch(urlToFetch, headers);
//     const data = await cryptoInfo.json();
//     res.json(data);

//     } catch(error) {
//         console.error(error.message);
//     }
// })
export default allCryptoRouter;