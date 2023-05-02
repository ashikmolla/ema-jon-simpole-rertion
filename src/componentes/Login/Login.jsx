import React, { createContext, useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AUthProvider';


const Login = () => {
    const {user, signIn}=useContext(AuthContext);
    const [error, setError] = useState();
    const navigate= useNavigate();
    /// crrourent route jaowar jonno 
    const location= useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSignIn=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result=>{
            const loggedUser =result.user;
            console.log(loggedUser)
            form.reset();
            /// crrourent route jaowar jonno 
            navigate(from,{replace:true})

        })
        .catch(error=>{
            console.log(error);
            setError(error.message)

        })
    }

    return (
        <div className='loginForm'>
            <h2 className='formTitle'>Login </h2>
            <form onSubmit={handleSignIn}>
                <div className="form-container">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='Email' required />
                </div>
                <div className="form-container">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder='Password' required />
                </div>
                <p className='text-error'>{error}</p>
                <div className="form-container">
                   <button>Login</button>
                   <h3>New to Ema-john ? <Link to='/signup'>Create New Account</Link></h3>
                   
                </div>
                <div className="form-container">
                   <p>Continue with Google</p>
                   
                </div>
            </form>
        </div>
    );
};

export default Login;