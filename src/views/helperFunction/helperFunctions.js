// import { sortCryptoNameA, sortCryptoNameD, sortCryptoPriceA, sortCryptoPriceD, getAllCrypto  } from "../../views/scripts/stephen.js";

// This function returns data based on specified ID
export const getCryptotById = (data, id) => {
    return data.find(element => element.name === id)
};

// This function deletes data based
export const deleteCoinById = (data, id) => {
    //  data.splice(data.findIndex(element => element.name === id), 1)
    return data.filter(element => element.name !== id)
    //  return data
};

// //Function for Routing between endPoints
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
