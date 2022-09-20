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
  
  
  const[data,setData]=useState([]);

  const [id,setId]=useState(0);
 
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
 
  useEffect(()=>{
    getAllCrypto()
  
  },[])
 

  const cryptoId = (data, name) => {
    const dataName= data && data.map(b=>b.name)
    if (dataName.includes(form.name))
    return data.find(element => element.name === name).id;
  };





 
/////////////*FOR MANAGING WATCHLIST*////////////////////

  const[watch,setWatch]=useState([])

  const addWatch=(id)=>{
    const coin=getCryptotById(data,id)
    const exists=watch.find(element => element.name === coin.name)
    setWatch(prev=>{
      if(!exists) return [...prev,coin] 
      else return deleteCoinById(watch,coin.name)
    })
    // console.log(watch)
  }

  const remWatch=(id)=>{
    console.log(id)
    setWatch(prev=>{
      
      return deleteCoinById(watch,id)
    })
    
  }
  
  

  const [star,Setstar]=useState('material-icons watched')
  const favourite =()=>{
    Setstar(prev=>star==='material-icons unwatched'?"material-icons watched" :'material-icons unwatched' )
  }
 

/*COIN DETAILS*/
  const [coin,setCoin]=useState([])
    const SelCoin=(id)=>{
      const coin=getCryptotById(data,id) 
      setCoin(coin)
      console.log(coin)

    }

///////////////*Manage FORMS *//////////////////////////

/*FOR MANAGING FORM VISIBILITY*/
    const [isVisible,setIsVisible]=useState(false)
    const Visiblity =(b)=>{
      setIsVisible(b)
    }

      /* Values for Port */ 
    const [form,setForm]=useState({name:'',num:'', amt:0}) 
    const changeFormName=(name)=>{
      setForm(prev=>({...prev,name:name}))
      setId(cryptoId (data, form.name))
    }

    const changeFormNum=(num)=>{
      setForm(prev=>({...prev,num:num}))
      setId(cryptoId (data, form.name))
    }
  
    const [buy,setBuy]=useState([])

    useEffect(()=>{
      if (id && form.num >= 0.001 ){
        addAssert() 
      }
    })


    const buyCoin =()=>{
      setBuy(prev=>([...prev,{name:form.name,num:form.num,price:form.amt}]))
      // console.log(buy)
    }





  return (
      // <Home/>
    <Router>
   
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={(<h2>SITE UNDER CONSTRUCTION COME BACK LATER</h2>)}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='watchlist' element={<Watchlist watch={watch} remfav={remWatch}data={data} Visiblity={Visiblity} isVisible={isVisible} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form} buyCoin={buyCoin} buy={buy} SelCoin={SelCoin} />}></Route>
        <Route path='portfolio' element={<Portfolio data={data} Visiblity={Visiblity} isVisible={isVisible} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form} buyCoin={buyCoin} buy={buy} />}>
          
        </Route>
        <Route path='view' element={<View coin={coin}  data={data} Visiblity={Visiblity} isVisible={isVisible} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form}  buyCoin={buyCoin} buy={buy} watch={watch}  />} />
        <Route path='coin' element={<Coin data={data} addfav={addWatch} Visiblity={Visiblity} isVisible={isVisible} SelCoin={SelCoin} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form}  buyCoin={buyCoin} buy={buy} star={star} favourite={favourite} watch={watch} />}></Route>
 
      </Routes>
      <Footer />
    </Router>       
  );
}

export default App;
