import React from 'react';
import './FormStyle.css';

const Form =(props)=>{
    let data=props.data;
    const Focus =()=>{
        props.focus(false) 
    }
    
    
    return (
        
        props.show &&
        <div className='form-buy' >
            <button className='close' onClick={Focus}>X</button>
            <h2>BUY COIN</h2>
            <input list="coins" />
                <datalist id="coins" value=''>
                    {data && data.map(Data=><option value={Data.name} key={Data.id} />)}
                </datalist>
            <div className='block'>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" name="quantity" placeholder='0.0' step='1' />  
            </div>
            <div className='block'>
                <label htmlFor="price-per">Price per Coin</label>
                <input type="number" id="price-per" name="quantity" placeholder='0.0' disabled value='24' />  
            </div>
            <div className='spent'>
                <h3>Total Spent</h3>
                $247575765
            </div>
            <button className='form-btn'>Purchase</button>
            
        </div>
    )
}

export default Form;