import React from 'react';
import './FormStyle.css';

const Form =()=>{
    
    return (
        <div className='form-buy'>
            <h2>BUY COIN</h2>
            <input list="coins" />
                <datalist id="coins">
                    <option value="BitCoin" />
                    <option value="Etherum" />
                    <option value="USD" />
                    <option value="Dodgecoin" />
                    <option value="chale"/>
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