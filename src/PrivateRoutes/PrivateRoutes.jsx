import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='flex justify-center container mx-auto mt-5'><button className="btn loading">loading</button></div>
    }

    if (user) {
        return children;
    }
    return (<Navigate to='/login' state={{ from: location }} replace></Navigate>);
};

export default PrivateRoutes;