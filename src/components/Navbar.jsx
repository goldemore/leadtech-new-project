import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header>
        <div className='header_container'>
            <div className='header_logo'>
                <Link to="/">
                    <img src="/images/leadtech_logo.png" alt="logo" />
                </Link>
            </div>
            <div className='phone_number'>
                <div className='headset'>
                    <img src="/images/vaadin_headset.svg" alt="headset" />
                </div>
                <p className='number'>Tel: <span>(+994)51 532 26 23</span></p>
                <Link to="contact">Bizimlə Əlaqə</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar