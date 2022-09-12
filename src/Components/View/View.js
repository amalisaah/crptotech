import React from 'react';
import './View.css';
import { FaStar } from 'react-icons/fa';
import { FiArrowUpRight, FiArrowDownLeft  } from 'react-icons/fi';


const View = (props)=>{
    
    const data=props.coin

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
                        {/* <img src={data[0].image}  alt="coin logo" /> */}
                        <h1 className="coin-name">
                        {data.name} <span className="span">{data.symbol.toUpperCase()}</span>
                        </h1>  
                    </div>
                    <button className='view-btn'>{data.cmc_rank}</button>
                </div>

                <div className='card'>
                    <div className='top'>
                       <div className='price'>
                            <button className='view-btn'>Price</button>
                            <h2>${data.quote.USD.price.toLocaleString()}</h2>
                        </div>
                        <button className='buy view-btn'>Buy</button> 
                    </div>

                    <div className='rates'>
                    <button className='view-btn'>{data.quote.USD.percent_change_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' />
                            {data[0].quote.USD.percent_change_24h.toFixed(2)}%
                        </span>
                     ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data.quote.USD.percent_change_24h.toFixed(2)}%
                        </span>
                         )}
                    </button>
                    <button className='view-btn'>{data.quote.USD.percent_change_7d< 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' />
                            {data.quote.USD.percent_change_7d.toFixed(2)}%
                        </span>
                     ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data.quote.USD.percent_change_7d.toFixed(2)}%
                        </span>
                         )}
                    </button>
                    </div>
                    
                </div>
            </div>

            <div className='details bulk '>
                <div>
                    <h3 className='title'>Market Cap</h3>
                    <div className='price'>${data.quote.USD.market_cap.toFixed(0).toLocaleString()}</div>
                </div>
                <div>
                    <h3 className='title'>Total Supply</h3>
                    <div className='price'>${(data.total_supply.toFixed(0)).toLocaleString()}</div>
                </div>
                <div>
                    <h3 className='title'>Fully Diluted Market Cap</h3>
                    <div className='price'>${data.quote.USD.fully_diluted_market_cap.toLocaleString()}</div>
                </div>
                
            </div>

            <div className='details chart'>
                CHART
                
            </div>
            
        </div>

    )
}

export default View;