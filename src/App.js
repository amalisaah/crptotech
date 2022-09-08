// import './App.css';
import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Coin from "./Components/Coin/Coin";
import Portfolio from "./Components/Portfolio/Portfolio";
import View from "./Components/View/View";
import Form from './Components/Portfolio/Form/Form';
// import Select from './Components/Portfolio/Select/Select';


function App() {

  return (
    <>
    <Navbar />
    {/* <Home /> */}
    <View/>
    {/* <Portfolio /> */}
    {/* <Coin /> */}
    
    {/* <Form/> */}
    {/* <Select /> */}
    <Footer />
    </>       
  );
}

export default App;
