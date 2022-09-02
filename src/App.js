import './App.css';
import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Coin from "./Components/Coin/Coin";



function App() {

  return (
    <>
    <Navbar />
    {/* <Home /> */}
    <Coin />
    <Footer />
    </>       
  );
}

export default App;
