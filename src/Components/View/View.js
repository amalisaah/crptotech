import React from 'react';
import './View.css';
import { FiArrowUp, FiArrowDown  } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const View = (props)=>{
    
    const data=props.coin
    console.log(data)
    

    return ( 
        data &&
        Object.keys (data).length === 0 ? <h3 style={{textAlign:'center',lineHeight:'50vh'}}><em><Link to='/coin'>Please go back to coin page and select coin</Link></em></h3> :
        <div className='view'>
            <div className='details details-top'>
                <div className='card card-left'>
                    <div className='name-w'>
                        {/* <img src={data[0].image}  alt="coin logo" /> */}
                        <h1 className="coin-name-w">
                        {data.name} <span className="span">{data.symbol.toUpperCase()}</span>
                        </h1>
                        <button className="add-to-fav" aria-label="Add to favourite" >
                            <i className="material-icons unwatched"  title='add to watchlist'>star</i>
                        </button> 
                    </div>
                    <div className='view-btns'>
                        <button className='view-btn rank'>Rank {data.cmc_rank}</button>
                        <button className='view-btn cap' title='market-cap dominance'>{data.quote.USD.market_cap_dominance}</button>
                    </div>
                </div>

                <div className='card card-right'>
                    <div className='price-label'>{data.name} Price ({data.symbol}) </div>
                    <div className='top'>
                       <div className='price'>
                            <h2>${data.quote.USD.price.toLocaleString()}</h2>

                            <button className='rate view-b' title='%change in 7 days'>{data.quote.USD.percent_change_7d < 0 ? (
                                <p><span className='red-b'> 
                                    <FiArrowDown className='icon' /> 
                                    {data.quote.USD.percent_change_7d.toFixed(2)}
                                </span></p>
                                 ) : (
                                <p><span className='green-b'>
                                    <FiArrowUp className='icon' /> 
                                    {data.quote.USD.percent_change_7d.toFixed(2)}
                                </span></p>
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
                    {data.quote.USD.market_cap && <div className='detail'>
                        <h3 className='title'>Market Cap</h3>
                        <p className='price'>${data.quote.USD.market_cap.toFixed(0).toLocaleString()}</p>
                    </div>}
                    {data.circulating_supply && <div className='detail'>
                        <h3 className='title'>Circulating Supply</h3>
                        <p className='price'>{(data.circulating_supply.toFixed(0)).toLocaleString()}</p>
                    </div>}
                </div>
                <div>
                    {data.max_supply && <div className='detail'>
                        <h3 className='title'>Total Supply</h3>
                        <p className='price'>{(data.max_supply.toFixed(0)).toLocaleString()}</p>
                    </div>}
                    {data.quote.USD.fully_diluted_market_cap && <div className='detail'>
                        <h3 className='title'>Fully Diluted Market Cap</h3>
                        <p className='price'>${data.quote.USD.fully_diluted_market_cap.toLocaleString()}</p>
                    </div>}
                </div>
                {data.quote.USD.volume_24h && <div className='detail'>
                    <h3 className='title'>24h Volume</h3>
                    <p className='price'>${data.quote.USD.volume_24h.toLocaleString()}</p>
                </div>
                }
            </div>

            <div className='details chart'>
                CHART
                
            </div>
            
        </div>

    )
}

export default View;