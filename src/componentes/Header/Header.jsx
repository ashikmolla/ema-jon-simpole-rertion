import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <a href="#">Order</a>
                <a href="#">Order Review </a>
                <a href="#">Management Inventory</a>
                <a href="#">login</a> 
            </div>

        </nav>
    );
};

export default Header;