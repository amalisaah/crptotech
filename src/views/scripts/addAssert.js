//Adding Assert;
const addAssert = async () => {
        
    //use input values from user porfolio input form.
    const id = 1 //hard_encoded
    const amount = 1 //hard_encoded
    const currency = 'usd' //hard_encoded

    const baseUrl = 'https://cryptotech-backend.herokuapp.com';
    const endPoint = '/assert';
    const requestParams = `?id=${id}&amount=${amount}&convert=${currency}`;
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


