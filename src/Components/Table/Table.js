import React from 'react';
import { FiArrowUpRight, FiArrowDownLeft  } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import { FaStar } from 'react-icons/fa';
import './TableStyle.css';


const Table = ({data,head,onClick,addfav,SelCoin,star,favourite,watch})=>{

    const handleClick =(e)=>{ //display form
        onClick(true)
        
    }
    const unwatched="material-icons unwatched"
    const watched="material-icons watched"
    const addWish=(e)=>{ //creates array of wishlists
        const nam = e.target.id
        addfav(nam)
        e.target.className=e.target.className=== unwatched ? watched: unwatched;
        console.log(e.target.className)
        // e.target.className= Object.values(watch).includes(nam) ? star: unwatched;
        // console.log(nam)
        // console.log (Object.values(watch).includes(nam))
        
        
    }
    
    const showCoin=(e)=>{SelCoin(e.target.id)}
 







    return (
        <>
        <table className="market-table">
            <thead className="table-head">
                <tr className="table-row table-title">
                {head.map((topic,index) => (
                    
                <th className='table-heading' key={index} id={topic}>{topic}</th>))}
                </tr>
            </thead>
            
            {data && 
            (<tbody className="table-body">
            {data.map((Data,index)=>(
            <tr className="table-row" key={index}>
               <td className="table-data"  >
                    <button className="add-to-fav" aria-label="Add to favourite" >
                        <i className="material-icons unwatched" onClick={addWish} id={Data.name} title='add to watchlist'>star</i>
                    </button>
                </td> 
                <th className="table-data rank num" scope="row">{index+1}</th>
                <th className="table-data rank Adds" scope="row" id={Data.name} title='click to buy' onClick={handleClick }>+</th>

                 <td className="table-data name">
                  {/*  <div className="wrapper">
                    <img src={Data.image} width="20" height="20" alt="coin logo"  />*/}

                    <h4 onClick={showCoin} title='view more details'>
                        <Link to='/view' className="coin-name" id={Data.name}> {Data.name} <span className="span">{Data.symbol.toUpperCase()}</span></Link>
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

                <td className="table-data last-update sevd">{Data.quote.percent_change_7d < 0 ? (
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
                
                <td className='Purchase'> <button className='table-btn' onClick={handleClick} >Buy</button></td>
            </tr>
           
        ))}
            </tbody>)}
        </table>
        <div className="market-div">
            {/* <thead className="table-head">
                <div className="div-row div-title">
                {head.map((topic,index) => (
                    
                <th className='div-heading' key={index} id={topic}>{topic}</th>))}
                </div>
            </thead> */}
            
            {data && 
            (<div className="div-body">
            {data.map((Data,index)=>(
            <div className="div-row" key={index}>
               <div className="div-data"  >
                    <button className="add-to-fav" aria-label="Add to favourite" >
                        <i className="material-icons unwatched" onClick={addWish} id={Data.name} title='add to watchlist'>star</i>
                    </button>
                </div> 
                {/* <th className="div-data rank" scope="row">{index+1}</th>*/}
                <div className="div-data  Adds"  id={Data.name} title='click to buy' onClick={handleClick }>+</div> 
                <div className='one'>
                    <div className="div-data name">
                    {/*  <div className="wrapper">
                        <img src={Data.image} width="20" height="20" alt="coin logo"  />*/}

                        <h4 onClick={showCoin} title='view more details'>
                            <Link to='/view' className="coin-name" id={Data.name}> {Data.name} <span className="span">{Data.symbol.toUpperCase()}</span></Link>
                        </h4>
                        {/* </div> */}
                    </div> 
                    <div className='centage'>
                        <div className="div-data last-update 24h">{Data.quote.USD.percent_change_24h < 0 ? (
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

                        <div className="div-data last-update sevd">{Data.quote.percent_change_7d < 0 ? (
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
                </div> 
                <div className="div-data last-price">${Data.quote.USD.price.toFixed(2)}</div>


                <div className='mark'>
                    <div className="div-data market-cap">${(Data.quote.USD.market_cap.toFixed(0)).toLocaleString()}</div>
                    <div className="div-data market-vol">{Data.quote.USD.volume_change_24h < 0 ? (
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
                            </div>
                    
                    {/* <div className='Purchase'> <button className='div-btn' onClick={handleClick} >Buy</button></div> */}
                </div>
            </div>
           
        ))}
            </div>)}
        </div>
        </>
        
    )
}

export default Table;