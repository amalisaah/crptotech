import React, { useState, useEffect } from 'react';
import './View.css';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { FiArrowUpRight, FiArrowDownLeft  } from 'react-icons/fi';


const View = ()=>{
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
        <div className='view'>
            <div className='details'>
                <div className='card left'>
                    <div className='name'>
                        <button className="add-to-fav view-btn" aria-label="Add to favourite" >
                            <FaStar />
                        </button>
                        <img src={data[0].image}  alt="coin logo" />
                        <h1>
                        <a href="#" className="coin-name">{data[0].name} <span className="span">{data[0].symbol.toUpperCase()}</span></a>
                    </h1>  
                    </div>
                    <button className='view-btn'>Rank</button>
                </div>

                <div className='card'>
                    <div className='top'>
                       <div className='price'>
                            <button className='view-btn'>Price</button>
                            <h2>${data[0].current_price.toLocaleString()}</h2>
                        </div>
                        <button className='buy view-btn'>Buy</button> 
                    </div>

                    <div className='rates'>
                    <button className='view-btn'>{data[0].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                     ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                         )}
                    </button>
                    <button className='view-btn'>{data[0].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                     ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                         )}
                    </button>
                    </div>
                    
                </div>
            </div>

            <div className='details bulk '>
                <div>
                    <h3 className='title'>Market Cap</h3>
                    <div className='price'>${data[0].market_cap.toLocaleString()}</div>
                </div>
                <div>
                    <h3 className='title'>Market Cap</h3>
                    <div className='price'>${data[0].market_cap.toLocaleString()}</div>
                </div>
                <div>
                    <h3 className='title'>Market Cap</h3>
                    <div className='price'>${data[0].market_cap.toLocaleString()}</div>
                </div>
                
            </div>

            <div className='details chart'>
                CHART
                
            </div>
            
        </div>

    )
}

export default View;