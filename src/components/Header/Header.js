import React from 'react';
import logo from './../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div>
                <a href="/"><img src={logo} alt="" className='logo' /></a>
            </div>
            <div className='nav-links'>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Products</a>
                <a href="/">Contact</a>
            </div>
            <div>
                <button className='cart-btn'>Cart</button>
            </div>
        </header>
    );
};

export default Header;