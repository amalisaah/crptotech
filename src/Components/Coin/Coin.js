import React from 'react';
import './Coin.css';
import Table from '../Table/Table';
import Form from '../Portfolio/Form/Form';



    

const Coin = (props)=>{
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





    
    const SelCoin=(id)=>{
        props.SelCoin(id)
    }



   
    if (!data) return (<p>Loading ...</p>);

    const head = ['Fav','#','Name','Price','24H %','7d %','Market Cap','Market Volume','Purchase']
    return(
    <>
        <Table data={data} head={head} onClick={Visiblity} addfav={getCoin} SelCoin={SelCoin}/>
        <Form show={isVisible} focus={Visiblity} data={data}  changeFormNum={changeFormNum} changeFormName={changeFormName} form={props.form}/>
    </>
    )
}

export default Coin;