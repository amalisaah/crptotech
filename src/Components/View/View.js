import React from 'react';
import './View.css';
import { FiArrowUp, FiArrowDown  } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Form from '../Portfolio/Form/Form';


const View = (props)=>{
    
    const coin=props.coin

    
  
    /* FORMS */
    const data=props.data

    const isVisible =props.isVisible;
    const Visiblity =(b)=>{
        props.Visiblity(b)
    }
    const handleClick= ()=>{Visiblity(true)}

    const changeFormNum=(num)=>{props.changeFormNum(num)} 
    const changeFormName=(name)=>{props.changeFormName(name)}

    const buyCoin=()=>{props.buyCoin()}

    /*WATCHLIST*/
    const addWish=(e)=>{ //creates array of wishlists
        const nam = e.target.id
        props.addfav(nam)
        console.log(e.target.className)
        
        
        
    }
    

    return ( 
        coin &&
        Object.keys (coin).length === 0 ? <h3 style={{textAlign:'center',lineHeight:'50vh'}}><em><Link to='/coin'>Please go back to coin page and select coin</Link></em></h3> :
        <>
            <div className='view'>
                <div className='details details-top'>
                    <div className='card card-left'>
                        <div className='name-w'>
                            {/* <img src={coin[0].image}  alt="coin logo" /> */}
                            <h1 className="coin-name-w">
                            {coin.name} <span className="span">{coin.symbol.toUpperCase()}</span>
                            </h1>
                            <button className="add-to-fav" aria-label="Add to favourite" >
                                <i className={props.watch.find(a=>Object.values(a).includes(coin.name)) ? "material-icons watched" : "material-icons unwatched"} onClick={addWish} id={coin.name} title='add to watchlist'>star</i>
                            </button> 
                        </div>
                        <div className='view-btns'>
                            <button className='view-btn rank'>Rank {coin.cmc_rank}</button>
                            <button className='view-btn cap' title='market-cap dominance'>{coin.quote.USD.market_cap_dominance}</button>
                        </div>
                    </div>

                    <div className='card card-right'>
                        <div className='price-label'>{coin.name} Price ({coin.symbol}) </div>
                        <div className='top'>
                        <div className='price'>
                                <h2>${coin.quote.USD.price.toLocaleString()}</h2>

                                <button className='rate view-b' title='%change in 7 days'>{coin.quote.USD.percent_change_7d < 0 ? (
                                    <p><span className='red-b'> 
                                        <FiArrowDown className='icon' /> 
                                        {coin.quote.USD.percent_change_7d.toFixed(2)}
                                    </span></p>
                                    ) : (
                                    <p><span className='green-b'>
                                        <FiArrowUp className='icon' /> 
                                        {coin.quote.USD.percent_change_7d.toFixed(2)}
                                    </span></p>
                                    )}
                                </button>
                            </div>
                            <button className='buys view-btn' onClick={handleClick }>Buy</button> 
                        </div>

                        {/* <div className='rates'>
                        <button className='view-btn'>{coin.quote.USD.percent_change_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDownLeft className='icon' />
                                {coin.quote.USD.percent_change_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                                {coin.quote.USD.percent_change_24h.toFixed(2)}%
                            </span>
                            )}
                        </button>
                        <button className='view-btn'>{coin.quote.USD.percent_change_7d< 0 ? (
                            <span className='red'>
                                <FiArrowDownLeft className='icon' />
                                {coin.quote.USD.percent_change_7d.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                                {coin.quote.USD.percent_change_7d.toFixed(2)}%
                            </span>
                            )}
                        </button>
                        </div> */}
                        
                    </div>
                </div>

                <div className='details bulk '>
                    <div>
                        {coin.quote.USD.market_cap && <div className='detail'>
                            <h3 className='title'>Market Cap</h3>
                            <p className='price'>${coin.quote.USD.market_cap.toFixed(0).toLocaleString()}</p>
                        </div>}
                        {coin.circulating_supply && <div className='detail'>
                            <h3 className='title'>Circulating Supply</h3>
                            <p className='price'>{(coin.circulating_supply.toFixed(0)).toLocaleString()}</p>
                        </div>}
                    </div>
                    <div>
                        {coin.max_supply && <div className='detail'>
                            <h3 className='title'>Total Supply</h3>
                            <p className='price'>{(coin.max_supply.toFixed(0)).toLocaleString()}</p>
                        </div>}
                        {coin.quote.USD.fully_diluted_market_cap && <div className='detail'>
                            <h3 className='title'>Fully Diluted Market Cap</h3>
                            <p className='price'>${coin.quote.USD.fully_diluted_market_cap.toLocaleString()}</p>
                        </div>}
                    </div>
                    {coin.quote.USD.volume_24h && <div className='detail'>
                        <h3 className='title'>24h Volume</h3>
                        <p className='price'>${coin.quote.USD.volume_24h.toLocaleString()}</p>
                    </div>
                    }
                </div>

                {/* <div className='details chart'>
                    CHART
                    
                </div> */}
                
            </div>
            <Form show={isVisible} focus={Visiblity} data={data}  changeFormNum={changeFormNum} changeFormName={changeFormName} form={props.form}  buyCoin={buyCoin} />
        </>

    )
}

export default View;