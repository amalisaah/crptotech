// import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Coin from "./Components/Coin/Coin";
import Portfolio from "./Components/Portfolio/Portfolio";
import View from "./Components/View/View";
import Watchlist from './Components/Watchlist/Watchlist';
import {getCryptotById} from './views/helperFunction/helperFunctions';
import {deleteCoinById} from './views/helperFunction/helperFunctions';
// import {cryptoId} from './views/helperFunction/helperFunctions';






function App() {
  
  
  const[data,setData]=useState();
  let id;
 
  //////////// Get all available Crytpo Currencies///////////////////////
  const baseUrl = 'https://cryptotech-backend.herokuapp.com';
    const getAllCrypto = async () => {
        try {
            const res = await fetch(baseUrl)
            if (res.ok) {
                const response = await res.json()
                setData(response.data)   
            } else {
                alert("Cannot get data")
            }
        } catch (error) {
            console.log(error.message);
    }
      
  };

  const addAssert = async () => {
        
    //use input values from user porfolio input form.
    
    const amount = Number(form.num)
    // const currency = 'usd' //hard_encoded

    const baseUrl = 'https://cryptotech-backend.herokuapp.com';
    const endPoint = '/assert';
    const requestParams = `?id=${id}&amount=${amount}&convert=usd`;
    const urlToFetch = `${baseUrl}${endPoint}${requestParams}`;

    try {
    const res = await fetch(urlToFetch)
    if (res.ok) {
    const respond = await res.json();
    const amt = respond.data.quote.USD.price.toFixed(3)
    setForm(prev=>({...prev,amt:amt}))
    } else {
        alert("Cannot get data")
    }
    } catch (error) {
      console.log('why')
        console.log(error.message);
    }
    
}

  /*SET DATA ONLY ON FIRST RENDER*/
  useEffect(()=>{getAllCrypto()},[])


  const cryptoId = (data, name) => {
    if (name)
    return data.find(element => element.name === name).id;
  };





 
/////////////*FOR MANAGING WATCHLIST*////////////////////

  const[watch,setWatch]=useState([])
  const addWatch=(id)=>{
    const coin=getCryptotById(data,id)
    const exists=watch.find(element => element.id === coin.id)
    setWatch(prev=>{
      if(!exists) return [...prev,coin] 
      else return deleteCoinById(watch,coin.id)
    })
    console.log(watch)
  }

  const [star,Setstar]=useState('material-icons watched')
  const favourite =()=>{
    Setstar(prev=>star==='material-icons unwatched'?"material-icons watched" :'material-icons unwatched' )
  }
 


/////////////*FOR MANAGING FORM VISIBILITY*///////////////////
  const [isVisible,setIsVisible]=useState(false)
    const Visiblity =(b)=>{
      setIsVisible(b)
    }


/*COIN DETAILS*/
  const [coin,setCoin]=useState([])
    const SelCoin=(id)=>{
      const coin=getCryptotById(data,id) 
      setCoin(coin)
      console.log(coin)

    }

/*Manage FORMS */
    const [form,setForm]=useState({name:'',num:'', amt:0}) 
    const changeFormName=(name)=>{
      setForm(prev=>({...prev,name:name}))
    }
    // const [formNum,setFormNum]=useState({name:'',num:0}) 
    const changeFormNum=(num)=>{
      setForm(prev=>({...prev,num:num}))
    }
  

/* Values for Port */ 
    const [buy,setBuy]=useState([])
    const getValue=(name)=>{
      id=cryptoId (data, name);
      // console.log(id)
      if (Number(form.num)>=0.1)
        addAssert()
      else setForm(prev=>({...prev,amt:0}))
    }

    const buyCoin =()=>{
      setBuy(prev=>([...prev,{name:form.name,num:form.num,price:form.amt}]))
      console.log(buy)
    }





  return (
      // <Home/>
    <Router>
   
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={(<h2>SITE UNDER CONSTRUCTION COME BACK LATER</h2>)}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='watchlist' element={<Watchlist watch={watch} data={data} Visiblity={Visiblity} isVisible={isVisible} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form} getValue={getValue} buyCoin={buyCoin} buy={buy} SelCoin={SelCoin} />}></Route>
        <Route path='portfolio' element={<Portfolio data={data} Visiblity={Visiblity} isVisible={isVisible} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form} getValue={getValue} buyCoin={buyCoin} buy={buy} />}>
          
        </Route>
        <Route path='view' element={<View coin={coin}  data={data} Visiblity={Visiblity} isVisible={isVisible} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form} getValue={getValue} buyCoin={buyCoin} buy={buy} watch={watch}  />} />
        <Route path='coin' element={<Coin data={data} addfav={addWatch} Visiblity={Visiblity} isVisible={isVisible} SelCoin={SelCoin} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form} getValue={getValue} buyCoin={buyCoin} buy={buy} star={star} favourite={favourite} watch={watch} />}></Route>
 
      </Routes>
      <Footer />
    </Router>       
  );
}

export default App;
