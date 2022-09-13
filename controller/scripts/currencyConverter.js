<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Currency Conversion</title>
    </head>
    <body>
        <h2>Currency Convert</h2>
        <div>
            <input type="number"></input>
            <select>

            </select>
        </div>
        <script>
            const select = document.querySelectorAll('select'); // hard defined
            let input = document.querySelectorAll('input'); // hard defined: Needs an array of Inputs
            input[0].value = 10; //hard_encoded: change to flexible array of inputs
            const inputValue = input[0].value; // Once again Hard Coded
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
                // console.log(data.rates)
                const base = data.base;
                // console.log(base)
                // usdInput.value = base;
                const rates = data.rates;
                const arrKeys = Object.keys(data.rates);
                // const filteredKeys = arrKeys.filter(item => {
                //     return item === 'GHS' || item === 'EUR'
                // })
                arrKeys.map(item => {
                    return html += `<option value=${item}>${item} </option>`
                })
                for (let i=0; i<select.length; i++) {
                    // select[1].innerHTML = html;
                    select[0].innerHTML = html;
                };

                // function convert (i, j) {
                //     input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value] 

                // }

                function render () {
                    return input[0].value = inputValue;
                };

                function convert () {
                    render()
                    const temp = input[0].value // Values to be converted
                    // console.log(temp)
                    let newValue = temp * rates[select[0].value] / rates[base]
                    console.log(newValue);
                    return input[0].value = newValue;
                    
                }
                // input[0].addEventListener('keyup', () => convert(1, 0))
                // input[1].addEventListener('keyup', () => convert(0, 1))
                // select[0].addEventListener('change', () => convert(1, 0))
                // select[1].addEventListener('change', () => convert(0, 1))
                select[0].addEventListener('change', () => convert())
                
                

            };
            currency();
        </script>
    </body>
</html>