// import React, {useState,useEffect} from 'react';
import { FiArrowUpRight, FiArrowDownLeft  } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './TableStyle.css'

const Table = ({data,head,onClick})=>{

    const handleClick =(e)=>{
        onClick(true)
        
    }
    
 
    return (
        <table className="market-table">
            <thead className="table-head">
                <tr className="table-row table-title">
                {head.map((topic,index) => (
                    
                <th className='table-heading' key={index}>{topic}</th>))}
                </tr>
            </thead>
            
            {data && 
            (<tbody className="table-body">
            {data.map((Data,index)=>(
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
                        <Link to='/view' className="coin-name">{Data.name} <span className="span">{Data.symbol.toUpperCase()}</span></Link>
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
                
                <td> <button className='table-btn' onClick={handleClick} id={Data.name}>Buy</button></td>
            </tr>
           
        ))}
            </tbody>)}
        </table>
        
    )
}

export default Table;