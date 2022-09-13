import React,{useEffect,useState} from 'react';
import axios from 'axios'
import './View.css';
import { FaStar } from 'react-icons/fa';
import { FiArrowUpRight, FiArrowDownLeft  } from 'react-icons/fi';


const View = (props)=>{
    
    const data=props.coin
    

    return ( 
        <div className='view'>
            <div className='details details-top'>
                <div className='card card-left'>
                    <div className='name-w'>
                        {/* <img src={data[0].image}  alt="coin logo" /> */}
                        <h1 className="coin-name-w">
                        {data.name} <span className="span">{data.symbol.toUpperCase()}</span>
                        </h1>
                        <button className="add-to-fav view-btn" aria-label="Add to favourite" >
                            <FaStar />
                        </button>  
                    </div>
                    <div className='view-btns'>
                        <button className='view-btn rank'>Rank {data.cmc_rank}</button>
                        <button className='view-btn cap'>{data.quote.USD.market_cap_dominance}</button>
                    </div>
                </div>

                <div className='card card-right'>
                    <div className='price-label'>{data.name} Price ({data.symbol}) </div>
                    <div className='top'>
                       <div className='price'>
                            <h2>${data.quote.USD.price.toLocaleString()}</h2>

                            <button className='rate view-btn'>{data.quote.percent_change_7d < 0 ? (
                                <span className='red-b'>
                                    <FiArrowDownLeft className='icon' /> 
                                    {data.quote.USD.percent_change_7d.toFixed(2)}
                                </span>
                                 ) : (
                                <span className='green-b'>
                                    <FiArrowUpRight className='icon' /> 
                                    {data.quote.USD.percent_change_7d.toFixed(2)}
                                </span>
                                 )}
                            </button>
                        </div>
                        <button className='buys view-btn'>Buy</button> 
                    </div>

                    {/* <div className='rates'>
                    <button className='view-btn'>{data.quote.USD.percent_change_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' />
                            {data.quote.USD.percent_change_24h.toFixed(2)}%
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
                    </div> */}
                    
                </div>
            </div>

            <div className='details bulk '>
                <div>
                    <h3 className='title'>Market Cap</h3>
                    <div className='price'>${data.quote.USD.market_cap.toFixed(0).toLocaleString()}</div>
                </div>
                <div>
                    <h3 className='title'>Circulating Supply</h3>
                    <div className='price'>${(data.circulating_supply.toFixed(0)).toLocaleString()}</div>
                </div>
                <div>
                    <h3 className='title'>Total Supply</h3>
                    <div className='price'>${(data.max_supply.toFixed(0)).toLocaleString()}</div>
                </div>
                <div>
                    <h3 className='title'>Fully Diluted Market Cap</h3>
                    <div className='price'>${data.quote.USD.fully_diluted_market_cap.toLocaleString()}</div>
                </div>
                <div>
                    <h3 className='title'>24h Volume</h3>
                    <div className='price'>${data.quote.USD.volume_24h.toLocaleString()}</div>
                </div>
                
            </div>

            <div className='details chart'>
                CHART
                
            </div>
            
        </div>

    )
}

export default View;