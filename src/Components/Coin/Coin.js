import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Coin.css';
import Table from '../Table';



const Coin = ()=>{
    const [data, setData] = useState(null)
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    if (!data) return (<p>Loading ...</p>);

    const head = ['#','Fav','Name','Price','24H %','1H %','Market Cap','Market Volume']
    return(
    <Table data={data} head={head}/>
    )
}

export default Coin;