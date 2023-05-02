import React, { useContext } from 'react';
import { AuthContext } from '../componentes/Provider/AUthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRouts = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    if(loading){
        return <div>Loading.......</div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivetRouts;