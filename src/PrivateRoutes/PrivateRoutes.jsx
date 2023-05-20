import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        <progress className="progress w-56 text-center mx-auto mt-28"></progress>
    }

    if(user?.email){
        return children
    }
    return ( <Navigate to="/login" replace></Navigate>    );
};

export default PrivateRoutes;