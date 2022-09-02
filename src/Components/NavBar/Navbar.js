import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import "./Navbarstyle.css";

const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className='header'>
      <div className='container'>
        <h1>Crypto<span className='primary'>Tech</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
              <a href='/'>PORTFOLIO</a>
          </li>
          <li>
              <a href='/'>COINS</a>
          </li>
          <li>
              <a href='/'>WATCHLIST</a>
          </li>
        </ul>
        <form className='money'>
            <select className='select' >
              <option value='euro'>Euro</option>
              <option value='euro'>USD</option>
            </select>
        </form>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
            
        </div>
      </div>
    </header>
  )
    
};

export default Navbar;
