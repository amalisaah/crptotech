import './App.css';
import React, { useState } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer"

function App() {

  const [currency, setcurrency] = useState("usd")

  return (
    <>
    <Navbar currentcurrency={currency} changecurrency={setcurrency}  />
    <Footer />
    </>       
  );
}

export default App;
