// import './App.css';
import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Coin from "./Components/Coin/Coin";
import Portfolio from "./Components/Portfolio/Portfolio";
import View from "./Components/View/View";



function App() {

  return (
    <>
    <Navbar />
    {/* <Home /> */}
    {/* <Portfolio /> */}
    {/* <Coin /> */}
    <View/>
    <Footer />
    </>       
  );
}

export default App;
