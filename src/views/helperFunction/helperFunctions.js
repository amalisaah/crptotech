// import { sortCryptoNameA, sortCryptoNameD, sortCryptoPriceA, sortCryptoPriceD, getAllCrypto  } from "../../views/scripts/stephen.js";

// This function returns data based on specified ID
export const getCryptoById = (data, id) => {
    return data.find(element => element.id === id)
};

// This function deletes data based
export const deleteCryptoById = (data, id) => {
     data.splice(data.findIndex(element => element.id === id), 1)
     return data
};

//Function for Routing between endPoints
// export const router = (num) => {
//     switch(num) {
//     default:
//         getAllCrypto();
//         break;
//     case 1:
//         sortCryptoNameA();
//         break;
//     case 2:
//         sortCryptoNameD();
//         break;
//     case 3:
//         sortCryptoPriceA();
//         break;
//     case 4:
//         sortCryptoPriceD();
// }};

//Takes in a Crytpo name as an argument and returns the id of that crypto
export const cryptoId = (data, name) => {
    return data.find(element => element.name === name).id;
};

//Takes in a crypto array and a crypto object and check if crypto exists
//if crytpo exists, increase the total amount of the crypto
//If crypto does not exists, add crypto to the crypto array.
export const cryptoPrice = (data, crypto) => {
         data.forEach(ele => ele.id === crypto.id || ele.name === crypto.name ? ele.price +=crypto.price : data.unshift(crypto));
         data.shift()
         return data
};

//Sums up the of all Cryptos
export const cryptoPriceSum = (data) => {
    const totalPrice = data.reduce((a, b) =>  a.price + b.price );
    return totalPrice;
};

export const stats = (data, amt) => {
    let calc_1h = data.quote.USD.percent_change_1h.toFixed(3) * amt;
    let calc_24h = data.quote.USD.percent_change_24h.toFixed(3) * amt;
    let calc_30d = data.quote.USD.percent_change_30d.toFixed(3) * amt;

    const statistics = [calc_1h, calc_24h, calc_30d].forEach(stat => stat > 0 ? 'Profit' : 'Loss');
};
