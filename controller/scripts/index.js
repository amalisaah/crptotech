const baseUrl = 'http://localhost:4000';
// Get all available Crytpo Currencies
const getAllCrypto = async () => {
    try {
    const res = await fetch(baseUrl)
    if (res.ok) {
    const data = await res.json();  
        alert("Cannot get data")
    }
    } catch (error) {
        console.log(error.message);
    }
    
};

//sort crypto currency by name;
    //ascending order Sort
const sortCryptoNameA = async () => { 
    const endPoint = '/sort';
    const requestParams = '?sort=name&sort_dir=asc';
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;

    try {
    const res = await fetch(urlToFetch)
    if (res.ok) {
    const data = await res.json();
    } else {
        alert("Cannot get data")
    }
    } catch (error) {
        console.log(error.message);
    }
    
}

    //Descending order Sort
const sortCryptoNameD = async () => { 
    const endPoint = '/sort';
    const requestParams = '?sort=name&sort_dir=desc';
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;

    try {
    const res = await fetch(urlToFetch)
    if (res.ok) {
    const data = await res.json();  
    } else {
        alert("Cannot get data")
    }
    } catch (error) {
        console.log(error.message);
    }
    
}


//Sort Crypto by Price
   //ascending order Sort
const sortCryptoPriceA = async () => { 
    const endPoint = '/sort';
    const requestParams = '?sort=price&sort_dir=asc';
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;

    try {
    const res = await fetch(urlToFetch)
    if (res.ok) {
    const data = await res.json();  
    console.log("This is received at front end");
    } else {
        alert("Cannot get data")
    }
    } catch (error) {
        console.log(error.message);
    }
    
}
   //Descending order Sort
const sortCryptoPriceD = async () => { 
    const endPoint = '/sort';
    const requestParams = '?sort=price&sort_dir=desc';
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;

    try {
    const res = await fetch(urlToFetch)
    if (res.ok) {
    const data = await res.json();
    } else {
        alert("Cannot get data")
    }
    } catch (error) {
        console.log(error.message);
    }
    
}


const getCryptoInfo = async () => {
    const endPoint = '/';
    const requestParams = `?id=1`;
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;

    try {
    const res = await fetch(urlToFetch)
    if (res.ok) {
    const data = await res.json();
    } else {
        alert("Cannot get data")
    }
    } catch (error) {
        console.log(error.message);
    }
    
}
// export default getAllCrypto, ;