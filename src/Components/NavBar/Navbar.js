import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import "./Navbarstyle.css";


const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className='header'>
      <div className='container'>
        <h1><NavLink to='/'>Crypto<span className='primary'>Tech</span></NavLink></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
              <NavLink to='/portfolio'>PORTFOLIO</NavLink>
          </li>
          <li>
              <NavLink to='/coin'>COINS</NavLink>
          </li>
          <li>
              <NavLink to='/watchlist'>WATCHLIST</NavLink>
          </li>
        </ul>
        <form className='money'>
            <select className='select' >
              <option value='euro'>Euro</option>
              <option value='euro'>USD</option>
            </select>
        </form>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} />)}
            
        </div>
      </div>
    </header>
  )
    
};

export default Navbar;
