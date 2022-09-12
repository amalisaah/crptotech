import React from "react";
import { FiArrowUpRight, FiArrowDownLeft  } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Form from "../Portfolio/Form/Form";

const Watchlist = (props)=> {
    const data =props.data
    const head = ['#','Fav','Name','Price','24H %','7d %','Market Cap','Market Volume']

        /*FORMS*/
    const isVisible =props.isVisible;
    const Visiblity =(b)=>{
        props.Visiblity(b)
    }

    const handleClick =()=>{
        Visiblity(true)
        
    }



    return (
        <>
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
                <button className="add-to-fav" aria-label="Add to favourite"  style={{color:'yellow'}}>
                    <FaStar id={Data.name}/>
                </button>
            </td> 
            <th className="table-data rank" scope="row">{index+1}</th>
             <td className="table-data name">
              {/*  <div className="wrapper">
                <img src={Data.image} width="20" height="20" alt="coin logo"  />*/}

                <h4>
                    <Link to='/view' className="coin-name">{Data.name} <span className="span">{Data.symbol.toUpperCase()}</span></Link>
                </h4>
                {/* </div> */}
            </td> 
             <td className="table-data last-price">${Data.quote.USD.price.toFixed(2)}</td>

            <td className="table-data last-update 24h">{Data.quote.USD.percent_change_24h < 0 ? (
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

            <td className="table-data last-update 1h">{Data.quote.percent_change_7d < 0 ? (
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

            <td className="table-data market-cap">${(Data.quote.USD.market_cap.toFixed(0)).toLocaleString()}</td>
            <td className="table-data market-vol">%{Data.quote.USD.volume_change_24h.toFixed(2)}</td>
            
            <td> <button className='table-btn' onClick={handleClick } id={Data.name}>Buy</button></td>
        </tr>
       
    ))}
        </tbody>)}
    </table>
    <Form show={isVisible} focus={Visiblity} />
    </>
        
    )
};


export default Watchlist