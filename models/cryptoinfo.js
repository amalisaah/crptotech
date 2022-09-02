let crypto_details;

const headers = {
    headers: {
    'X-CMC_PRO_API_KEY': '8111669a-0ff1-4398-aef8-5bb4a40d5323',
    'Accept': 'application/json',
    'Accept-Encoding': 'deflate, gzip'

}};


// Get all available Crytpo Currencies
const getAllCrypto = async () => {

    try {
    const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', headers)
    const data = await res.json();
    crypto_details = {...data}
    } catch (error) {
        console.log(error.message);
    }
    
}