import React, { useState } from 'react';
import './PortfolioStyle.css';
import Table from '../Table/Table';
import Form from './Form/Form';

const head = ['#','Fav','Name','Price','24H %','1H %','Market Cap','Market Volume']

const Portfolio = (props)=>{

    const data =props.data;

    const [visible,setVisible]=useState(false);

    const Visiblity=(value)=>{
        setVisible(value)
    }

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

            <Table head={head}/>
            <Form show={visible} focus={Visiblity} data={data}/>
            {/* <Outlet/> */}
        </div>
    )
}

export default Portfolio;