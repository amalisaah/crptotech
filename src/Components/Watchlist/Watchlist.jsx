import React from "react";
import { FiArrowUpRight, FiArrowDownLeft  } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Form from "../Portfolio/Form/Form";
import './WatchlistStyle.css'

const Watchlist = (props)=> {
    const watch =props.watch
    const head = ['#','Fav','Name','Price','1H %','24H %','7d %','Market Cap','Volume change','Volume','Circulating Supply','Purchase']

        /*FORMS*/
    const data = props.data
    const isVisible =props.isVisible;
    const Visiblity =(b)=>{
        props.Visiblity(b)
    }

    const handleClick =()=>{
        Visiblity(true)    
    }
    const changeFormNum=(num)=>{props.changeFormNum(num)} 
    const changeFormName=(name)=>{props.changeFormName(name)}
    // form={formName}








    return (
        <>
        <table className="market-table">
            <thead className="table-head-w">
                <tr className="table-row table-title">
                {head.map((topic,index) => (
                    
                <th className='table-heading' key={index}>{topic}</th>))}
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
                <th className="table-data-w rank" scope="row">{index+1}</th>
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

                <td className="table-data-w market-vol">${Data.quote.USD.volume_change_24h.toFixed(2)}</td>
                <td className="table-data-w market-vol">{Data.quote.USD.volume_change_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft className='icon' /> 
                            {Data.quote.USD.volume_change_24h.toFix.toFixed(2)}%
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
                
                <td> <button className='table-btn' onClick={handleClick } id={Data.name}>Buy</button></td>
            </tr>
        
        ))}
        </tbody>)}
    </table>
    <Form show={isVisible} focus={Visiblity} data={data} changeFormNum={changeFormNum} changeFormName={changeFormName} form={props.form}/>
    </>
        
    )
};


export default Watchlist