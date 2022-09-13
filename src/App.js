// import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Coin from "./Components/Coin/Coin";
import Portfolio from "./Components/Portfolio/Portfolio";
import View from "./Components/View/View";
// import Form from './Components/Portfolio/Form/Form';
import Watchlist from './Components/Watchlist/Watchlist';
// import Select from './Components/Portfolio/Select/Select';






function App() {
  
  
  const[data,setData]=useState();
  // Get all available Crytpo Currencies
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
  /*SET DATA ONLY ON FIRST RENDER*/
  useEffect(()=>{getAllCrypto()},[])



  const getCryptotById = (name) => {
    const coin=data.find(element => element.name === name);
    return coin  
  }  
  
  const deleteCoinById = (data,id) => {
    data.splice(data.findIndex(element => element.id === id), 1)
    return data
  };


 
/*FOR MANAGING WATCHLIST*/
  const[watch,setWatch]=useState([])
  const addWatch=(id)=>{
    const coin=getCryptotById(id)
    const exists=watch.find(element => element.id === coin.id)
    setWatch(prev=>{
      if(!exists) return [...prev,coin] 
      else return deleteCoinById(watch,coin.id)
    })
  }

  console.log(watch)

/*FOR MANAGING FORM VISIBILITY*/
  const [isVisible,setIsVisible]=useState(false)
    const Visiblity =(b)=>{
      setIsVisible(b)
    }


/*COIN DETAILS*/
  const [coin,setCoin]=useState([])
    const SelCoin=(id)=>{
      const coin=getCryptotById(id) 
      setCoin(coin)
    }

/*Manage FORMS */
    const [form,setForm]=useState({name:'',num:0.0}) 
    const changeFormName=(name)=>{
      setForm(prev=>({...prev,name:name}))
    }
    // const [formNum,setFormNum]=useState({name:'',num:0}) 
    const changeFormNum=(num)=>{
      setForm(prev=>({...prev,num:num}))
    }


  return (
      // <Home/>
    <Router>
   
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={(<h2>SITE UNDER CONSTRUCTION COME BACK LATER</h2>)}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='watchlist' element={<Watchlist data={data} watch={watch} Visiblity={Visiblity} isVisible={isVisible} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form}/>}></Route>
        <Route path='portfolio' element={<Portfolio data={data} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form}/>}>
          {/* <Route path='form' element={<Form/>} /> */}
        </Route>
        <Route path='view' element={<View coin={coin}   changeFormNum={changeFormNum} changeFormName={changeFormName} form={form}   />} />
        <Route path='coin' element={<Coin data={data} addfav={addWatch} Visiblity={Visiblity} isVisible={isVisible} SelCoin={SelCoin} changeFormNum={changeFormNum} changeFormName={changeFormName} form={form}/>}></Route>
 
      </Routes>
      
      {/* path='coin'/> */}
      
      {/*  */}
      {/* <Select /> */}
      <Footer />
    </Router>       
  );
}

export default App;
