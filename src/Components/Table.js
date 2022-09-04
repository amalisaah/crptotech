import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowUpRight, FiArrowDownLeft  } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';


const Table = ()=>{
   const [data, setData] = useState(null)
   const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
   // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&price_change_percentage=24h'

   useEffect(() => {
       axios.get(url).then((response) => {
           setData(response.data)
       }).catch((error) => {
           console.log(error)
       })
   }, [])

    if (!data) return null 

   console.log(data)

    return (
        data.map((Data,index)=>(
            <tr className="table-row" key={index}>
               <td className="table-data">
                    <button className="add-to-fav" aria-label="Add to favourite" >
                        <FaStar />
                    </button>
                </td> 
                <th className="table-data rank" scope="row">{index+1}</th>
                <td className="table-data name">
                    <div className="wrapper">
                    <img src={Data.image} width="20" height="20" alt="coin logo"  />

                    <h4>
                        <a href="#" className="coin-name">{Data.name} <span className="span">{Data.symbol.toUpperCase()}</span></a>
                    </h4>
                    </div>
                </td>
                <td className="table-data last-price">${Data.current_price.toLocaleString()}</td>

                <td className="table-data last-update 24h">{Data.price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' />
                            {Data.price_change_percentage_24h.toFixed(2)}%
                        </span>
                     ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {Data.price_change_percentage_24h.toFixed(2)}%
                        </span>
                         )}
                </td>

                <td className="table-data last-update 1h">{Data.price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' />
                            {Data.price_change_percentage_24h.toFixed(2)}%
                        </span>
                     ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {Data.price_change_percentage_24h.toFixed(2)}%
                        </span>
                         )}
                </td>

                <td className="table-data market-cap">${Data.market_cap.toLocaleString()}</td>
                <td className="table-data market-vol">{Data.circulating_supply}</td>

            </tr>
        ))
    )
}

export default Table;