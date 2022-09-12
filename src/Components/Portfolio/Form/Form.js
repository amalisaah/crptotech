import React,{useContext} from 'react';
import './FormStyle.css';



const Form =(props)=>{
    
    let data=props.data; //option values
    const Focus =()=>{ //hides form
        props.focus(false) 
    }

    //Data Values
    const changeFormNum=(e)=>{
        const num=e.target.value
        props.changeFormNum(num)
    } 
    const changeFormName=(e)=>{
        const num=e.target.value
        props.changeFormName(num)
    } 
    
    const purchase=(e)=>{
        if (props.form.name !='' && props.form.num>0){
            Focus();
            props.changeFormName('')
            props.changeFormNum(0.0)
        }
    }


    return (
        
        props.show &&
        <div className='form-buy' >
            <button className='close' onClick={Focus}>X</button>
            <h2>BUY COIN</h2>
            <input list="coins" placeholder='Enter coin name' onChange={changeFormName} value={props.form.name}/>
                <datalist id="coins"  >
                    {data && data.map(Data=><option value={Data.name} key={Data.id} />)}
                </datalist>
            <div className='block'>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" name="quantity" placeholder='0.0' onChange={changeFormNum}  step='0.1'value={props.form.num} />  
                
            </div>
            <div className='block'>
                <label htmlFor="price-per">Price per Coin</label>
                <input type="number" id="price-per" name="quantity" placeholder='0.0' disabled value='24' />  
            </div>
            <div className='spent'>
                <h3>Total Spent</h3>
                $247575765
            </div>
            <button className='form-btn' onClick={purchase} >Purchase</button>
            
        </div>
    )
}

export default Form;