import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import './Homestyle.css';
import imge1 from "./assets/about-banner.png";
// import imge2 from "./assets/images.png";
import vid from './../../assets/video.mp4';

const Home = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
    // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&price_change_percentage=24h'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    if (!data) return (<h2 style={{color:'white'}}>Loading ...</h2>);

    return (
        <div className='featured'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'><Link to='coin' className='link'>See More Coins</Link></button>
                </div>

                {/* Right */}

                <div className='right'>
                    {data.map((Data, index)=>(
                    <div className='card' key={index}>
                        <div className='top'>
                            <img src={Data.image} alt='' />
                        </div>
                        <div>
                            <h5>{Data.name}</h5>
                            <p>${Data.current_price.toLocaleString()}</p>
                        </div>

                     {Data.price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDown className='icon' />
                            {Data.price_change_percentage_24h.toFixed(2)}%
                        </span>
                     ) : (
                        <span className='green'>
                            <FiArrowUpRight className='icon' />
                            {Data.price_change_percentage_24h.toFixed(2)}%
                        </span>
                         )}
                    </div>
                    )   
                    )}
                </div>
                {/* <button className='btn'>See More Coins</button> */}
            </div>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>View all your assets in one place</h2>
                    <p>See all your available assets and it current value</p>
                    <button className='btn' id='but'><Link to='portfolio' className='link'>Go to wallet</Link></button>
                </div>

                {/* Right */}

                <div >
                    <img src={imge1} width="100%" alt="laptop" /> 
                </div>
            </div>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Monitor coin more closely</h2>
                    <p>Still can't decide if it worth buying?
                       Add to watchlist and monitor it performance more closely
                    </p>
                    <button className='btn' id='but'><Link to='watchlist' className='link'> Go to watchlist</Link></button>
                </div>

                {/* Right */}

                <div >
                    {/* <img src={imge2} width="100%" alt="hero banner" />  */}
                    <video width='100%' height="240" src={vid} autoPlay={true} loop muted />
                        
                    
                    {/* </video> */}
                </div>
            </div>
        </div>
            
    )
}

export default Home
