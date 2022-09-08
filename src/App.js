// import './App.css';
import React from "react";
import { BrowserRouter as Router,Routes, Route, Link, NavLink } from 'react-router-dom';
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Coin from "./Components/Coin/Coin";
import Portfolio from "./Components/Portfolio/Portfolio";
import View from "./Components/View/View";
import Form from './Components/Portfolio/Form/Form';
import Watchlist from './Components/Watchlist/Watchlist';
// import Select from './Components/Portfolio/Select/Select';


function App() {

  return (
      // <Home/>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={(<h2>SITE UNDER CONSTRUCTION COME BACK LATER</h2>)}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='watchlist' element={<Watchlist />}></Route>
        <Route path='portfolio' element={<Portfolio />}>
          {/* <Route path='form' element={<Form/>} /> */}
        </Route>
        <Route path='coin' element={<Coin />}></Route>
 
      </Routes>
      
      {/* path='coin'/> */}
      
      {/*  */}
      {/* <Select /> */}
      <Footer />
    </Router>       
  );
}

export default App;
