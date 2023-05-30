import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AUthProvider';

const Header = () => {
    const {user, logOut}=useContext(AuthContext);
    console.log(user);

    const handlesignOut=()=>{
        logOut()
        .then(result=>{})
        .catch(error=> console.log(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <Link to="/">Shope</Link>
                <Link to="/orders">Order</Link>
                <Link to="/#">Order Review </Link>
                <Link to="/inventory">Management Inventory</Link>
                <Link to="/signup">SigN Up</Link> 
                <Link to="/login">Login</Link> 
                {
                    user&& <spen className="text-white"> <button className='signoutbtn' onClick={handlesignOut}>{logOut} Sign Out</button></spen>
                }
            </div>

        </nav>
    );
};

export default Header;