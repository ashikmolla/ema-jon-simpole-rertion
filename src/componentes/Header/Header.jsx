import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <Link to="/">Shope</Link>
                <Link to="/orders">Order</Link>
                <Link to="/#">Order Review </Link>
                <Link to="/inventory">Management Inventory</Link>
                <Link to="/login">Login</Link> 
            </div>

        </nav>
    );
};

export default Header;