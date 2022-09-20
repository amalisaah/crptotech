const select = document.querySelectorAll('select'); // will need selector named 'SELECT'
let input = document.querySelectorAll('input'); // Will need a selector named 'INPUT'
input[0].value = 10; //hard_encoded: CHANGE
const inputValue = input[0].value;
let html = "";
var myHeaders = new Headers();
myHeaders.append("apikey", "QBWatwiJIQm9EHbPXtU02YCTAzEgfS2w");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };
let endPoint = "https://api.apilayer.com/exchangerates_data/latest?base=usd";

async function currency() {
    const res = await fetch(endPoint, requestOptions);
                // console.log(res)
    const data = await res.json();
    console.log(data.rates)
    const base = data.base;
                // console.log(base)
    const rates = data.rates;
    const arrKeys = Object.keys(data.rates);
                // const filteredKeys = arrKeys.filter(item => {
                //     return item === 'GHS' || item === 'EUR'
                // })
    arrKeys.map(item => {
        return html += `<option value=${item}>${item} </option>`
    })
    for (let i=0; i<select.length; i++) {
        select[0].innerHTML = html;
    };

    function render () {
        return input[0].value = inputValue;
    };

    function convert () {
        render()
        const temp = input[0].value
        // console.log(temp)
        let newInput = temp * rates[select[0].value] / rates[base]
            // console.log(newInput);
        return input[0].value = newInput;
    };
    select[0].addEventListener('change', () => convert())
                
};