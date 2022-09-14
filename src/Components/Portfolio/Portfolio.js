import React, { useState } from 'react';
import './PortfolioStyle.css';
// import Table from '../Table/Table';
import Form from './Form/Form';

const head = ['#','Name','Quantity','Price']

const Portfolio = (props)=>{

    const data =props.data;

    const [visible,setVisible]=useState(false);

    const Visiblity=(value)=>{
        setVisible(value)
    }

    const changeFormNum=(num)=>{props.changeFormNum(num)} 
    const changeFormName=(name)=>{props.changeFormName(name)}







    return(
        <div className='portfolio' >
            <div className='summary'>
                <div className='balance'>
                    <h3>Current Balance</h3>
                    <p>$21,282.81</p>
                </div>
                <div className='balance gain'>
                    <h3>24h</h3>
                    <p>$21,282.81</p>
                </div>
                <button className='add' onClick={()=>setVisible(true)}> Buy More</button>
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
                </table>
            </div>
            <Form show={visible} focus={Visiblity} data={data} changeFormNum={changeFormNum} changeFormName={changeFormName} form={props.form}/>
            {/* <Outlet/> */}
        </div>
    )
}

export default Portfolio;