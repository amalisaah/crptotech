import React from 'react';
import './PortfolioStyle.css';
// import Table from '../Table/Table';
import Form from './Form/Form';


const head = ['#','Name','Quantity','Price'] 

const Portfolio = (props)=>{

    const data=props.data

    const isVisible =props.isVisible;
    const Visiblity =(b)=>{
        props.Visiblity(b)
    }
    const handleClick= ()=>{Visiblity(true)}




    const changeFormNum=(num)=>{props.changeFormNum(num)} 
    const changeFormName=(name)=>{props.changeFormName(name)}

    
    const buyCoin=()=>{props.buyCoin()}
    const buy=props.buy

    
    buy.length>0 && console.log()




    return(
        <div className='portfolio' >
            <div className='summary'>
                <div className='balance'>
                    <h3>Current Balance</h3>
                    <p>{props.total}</p>
                </div>
                <div className='balance gain'>
                    <h3>24h</h3>
                    <p>--</p>
                </div>
                <button className='add' onClick={handleClick}> Buy More</button>
            </div>

            <div className='p-lower'>
                <div></div>
                <table className='p-table'>
                    <thead className="table-head-w">
                        <tr className="table-row table-title">
                        {head.map((topic,index) => (
                            
                        <th className='table-heading' key={index}>{topic}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {buy.length>0 && buy.map((buys,index)=>
                                
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{buys.name}</td>
                                <td>{buys.num}</td>
                                <td>{buys.price}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Form show={isVisible} focus={Visiblity}  data={data}  changeFormNum={changeFormNum} changeFormName={changeFormName} form={props.form}  buyCoin={buyCoin} buy={buy} total={props.total} />
            {/* <Outlet/> */}
        </div>
    )
}

export default Portfolio;