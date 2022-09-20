import React from 'react';
import './FormStyle.css';



const Form =(props)=>{
    
    let data=props.data; //option values
    const dataName= data && data.map(b=>b.name)

    // const amt = props.form.amt //total amt

    const Focus =()=>{ //hides form
        props.focus(false) 
    }
    
    const changeFormNum=(e)=>{
        const num=e.target.value
        props.changeFormNum(num)
        
        
    } 
    const changeFormName=(e)=>{
        const num=e.target.value
        props.changeFormName(num)
    } 
   

    const purchase=()=>{
        if (dataName.includes(props.form.name) && props.form.num>0){
            // Focus(); 
            props.buyCoin()           
            props.changeFormName('');
            props.changeFormNum('');
            
            
            // console.log(amt)

            
            
        }
        // else if (props.form.name !=='' || props.form.num <= 0){
        //     null    
        // }

    }


    return (
        
        props.show &&
        <div className='form-buy' >
            <button className='close' onClick={Focus}>X</button>
            <h2>BUY COIN</h2>
            <input list="coins" placeholder='Enter coin name' onChange={changeFormName} value={props.form.name} id='a'/>
                <datalist id="coins"  >
                    {data && data.map(Data=><option value={Data.name} key={Data.id} />)}
                </datalist>
            <div className='block'>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" name="quantity" placeholder='0.0' onChange={changeFormNum}  step='0.1'value={props.form.num} />  
                
            </div>
            <div className='block'>
                <label htmlFor="price-per">Price per Coin</label>
                <input type="number" id="price-per" name="quantity" placeholder='0.0' disabled value={dataName.includes(props.form.name) && props.form.num > 0 ? (parseFloat(props.form.amt) / parseFloat(props.form.num)).toFixed(2) : 0} />  
            </div>
            <div className='spent'>
                <h3>Total Spent</h3>
                {dataName.includes(props.form.name) && props.form.num >=0.01 ? props.form.amt : 0}
            </div>
            <button className='form-btn' onClick={purchase} >Purchase</button>
            
            
        </div>
    )
}

export default Form;