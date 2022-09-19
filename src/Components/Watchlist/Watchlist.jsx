import React from "react";
import { FiArrowUpRight, FiArrowDownLeft  } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Form from "../Portfolio/Form/Form";
import './WatchlistStyle.css'

const Watchlist = (props)=> {
    const watch =props.watch
    const head = ['Fav','#','Add','Name','Price','1H %','24H %','7d %','Market Cap','Volume change','Volume','Circulating Supply','Purchase']

        /*FORMS*/
        const data=props.data

        const isVisible =props.isVisible;
        const Visiblity =(b)=>{
            props.Visiblity(b)
        }
        const handleClick= ()=>{Visiblity(true)}
    
    
    
    
        const changeFormNum=(num)=>{props.changeFormNum(num)} 
        const changeFormName=(name)=>{props.changeFormName(name)}
    
        const getValue =(name)=>{
            props.getValue(name)
        }
        const buyCoin=()=>{props.buyCoin()}








    return (
        <>
        
        <table className="market-table-w">

            <thead className="table-head-w">
                <tr className="table-row table-title">
                {head.map((topic,index) => (
                    
                <th className='table-heading' key={index} id={topic}>{topic}</th>))}
                </tr>
            </thead>
            {data && 
            (<tbody className="table-body-w">
            {watch.map((Data,index)=>(
            <tr className="table-row-w" key={index}>
            <td className="table-data-w">
                    <button className="add-to-fav-w" aria-label="Add to favourite"  style={{color:'yellow'}}>
                        <FaStar id={Data.name}/>
                    </button>
                </td> 
                <th className="table-data-w num" scope="row">{index+1}</th>
                <th className="table-data-w Adds" scope="row" id={Data.name} title='click to buy' onClick={handleClick }>+</th>
                <td className="table-data-w name">
                {/*  <div className="wrapper">
                    <img src={Data.image} width="20" height="20" alt="coin logo"  />*/}
                
                    <h4>
                        <Link to='/view' className="coin-name">{Data.name} <span className="span">{Data.symbol.toUpperCase()}</span></Link>
                    </h4>
                    {/* </div> */}
                </td> 
                <td className="table-data-w last-price">${Data.quote.USD.price.toFixed(2)}</td>

                <td className="table-data-w last-update 1h">{Data.quote.USD.percent_change_1h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' /> 
                            {Data.quote.USD.percent_change_1h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {Data.quote.USD.percent_change_1h.toFixed(2)}%
                        </span>
                        )}
                </td>
                <td className="table-data-w last-update 24h">{Data.quote.USD.percent_change_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' /> 
                            {Data.quote.USD.percent_change_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {Data.quote.USD.percent_change_24h.toFixed(2)}%
                        </span>
                        )}
                </td>

                <td className="table-data-w last-update 1h">{Data.quote.percent_change_7d < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' /> 
                            {Data.quote.USD.percent_change_7d.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' /> 
                            {Data.quote.USD.percent_change_7d.toFixed(2)}%
                        </span>
                        )} 
                </td>

                <td className="table-data-w market-vol ">${Data.quote.USD.volume_change_24h.toFixed(2)}</td>
                <td className="table-data-w market-vol">{Data.quote.USD.volume_change_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' /> 
                            {Data.quote.USD.volume_change_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {Data.quote.USD.volume_change_24h.toFixed(2)}%
                        </span>
                        )}
                </td>
                
                <td className="table-data-w market-vol">{Data.quote.USD.volume_24h.toFixed(2)}</td>
                <td className="table-data-w market-vol">{Data.circulating_supply.toFixed(2)}</td>
                
                <td> <button className='table-btn Purchase' onClick={handleClick } id={Data.name}>Buy</button></td>
            </tr>
        
            ))}
            </tbody>)}
        </table>
        
        <div className="market-div-w">
        {watch.length===0 && <h2 style={{textAlign:'center'}}>Add items to Watchlist to view here</h2>} 
            {data && 
            (
            <div className="div-body-w">
            {watch.map((Data,index)=>(
                <div className="div-row-w" key={index}>
                    <div className="div-data-w">
                        <button className="add-to-fav-w" aria-label="Add to favourite"  style={{color:'yellow'}}>
                            <FaStar id={Data.name}/>
                        </button>
                    </div> 
                    <div className="div-data-w Adds"  id={Data.name} title='click to buy' onClick={handleClick }>+</div>
                    <div className="un">
                        <div className="div-data-w name">
                        {/*  <div className="wrapper">
                            <img src={Data.image} width="20" height="20" alt="coin logo"  />*/}
                        
                            <h4>
                                <Link to='/view' className="coin-name">{Data.name} <span className="span">{Data.symbol.toUpperCase()}</span></Link>
                            </h4>
                            {/* </div> */}
                        </div> 
                        <div className="centage">
                            <div className="div-data-w last-update 1h">1H: {Data.quote.USD.percent_change_1h < 0 ? (
                                <span className='red'>
                                    <FiArrowDownLeft className='icon' /> 
                                    {Data.quote.USD.percent_change_1h.toFixed(2)}
                                </span>
                                ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {Data.quote.USD.percent_change_1h.toFixed(2)}
                                </span>
                                )}
                            </div>

                            <div className="div-data-w last-update 24h">24H: {Data.quote.USD.percent_change_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDownLeft className='icon' /> 
                                {Data.quote.USD.percent_change_24h.toFixed(2)}%
                            </span>
                                 ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                                {Data.quote.USD.percent_change_24h.toFixed(2)}%
                            </span>
                            )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Price</h3>
                        <div className="div-data-w last-price last-update">${Data.quote.USD.price.toFixed(2)}</div>
                        <div className="div-data-w last-update 1h">{Data.quote.percent_change_7d < 0 ? (
                                <span className='red'>
                                    <FiArrowDownLeft className='icon' /> 
                                    {Data.quote.USD.percent_change_7d.toFixed(2)}%
                                </span>
                            ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' /> 
                                    {Data.quote.USD.percent_change_7d.toFixed(2)}%
                                </span>
                                )} 
                        </div>
                    </div>
                    <div>
                        <h3>Volume</h3>
                        <div className="div-data-w market-vol-w last-update">{Data.quote.USD.volume_24h.toFixed(2)}</div>
                        <div className="div-data-w market-vol-w last-update">{Data.quote.USD.volume_change_24h < 0 ? (
                                <span className='red'>
                                    <FiArrowDownLeft className='icon' /> 
                                    ${Data.quote.USD.volume_change_24h.toFixed(2)}
                                </span>
                            ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    ${Data.quote.USD.volume_change_24h.toFixed(2)}
                                </span>
                                )}
                        </div>
                    </div>                   
                    <div>
                    <h3>Supply</h3>
                    <div className="div-data-w market-sup last-update">{Data.circulating_supply.toFixed(2)}</div>
                    </div>
                    
                     
                    {/* <div> <button className='div-btn Purchase' onClick={handleClick } id={Data.name}>Buy</button></div> */}
                </div>
        
        ))}
            </div>)}
        </div>
    
    <Form show={isVisible} focus={Visiblity}  data={data}  changeFormNum={changeFormNum} changeFormName={changeFormName} form={props.form} getValue={getValue} buyCoin={buyCoin}/>
    </>
        
    )
};


export default Watchlist