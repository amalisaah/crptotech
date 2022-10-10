import React from 'react';
import './Coin.css';
import Table from '../Table/Table';
import Form from '../Portfolio/Form/Form';



    

const Coin = (props)=>{
   //coins
   const sorted=(a)=>{
    props.sorted(a)
   }




    //watchlist
    let data= props.data;
    const getCoin=(val)=>{
        props.addfav(val)
    }
    



    //forms
    const isVisible =props.isVisible;
    const Visiblity =(b)=>{
        props.Visiblity(b)
    }
    const changeFormNum=(num)=>{props.changeFormNum(num)} 
    const changeFormName=(name)=>{props.changeFormName(name)}

    
    const buyCoin=()=>{props.buyCoin()} 

    



    
    const SelCoin=(id)=>{
        props.SelCoin(id)
    }



   
    if (!data) return (<p style={{color:'white'}}>Loading ...</p>);

    const head = ['Fav','#','Add','Name','Price','24H %','7d %','Market-Cap','Volume','Purchase']
    return(
    <>
        <Table data={data} head={head} sorted={sorted} onClick={Visiblity} addfav={getCoin} SelCoin={SelCoin}  watch={props.watch}/>
        <Form show={isVisible} focus={Visiblity} data={data}  changeFormNum={changeFormNum} changeFormName={changeFormName} form={props.form} buyCoin={buyCoin} />
    </>
    )
}

export default Coin;