import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
                <a href="">Shop</a>
                <a href="">Order</a>
                <a href="">Inventory</a>
                <a href="">Log In</a>
            </div>
        </nav>
    );
};

export default Header;