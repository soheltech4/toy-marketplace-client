import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const GoogleLogin = () => {
    const {GoogleSignIn} = useContext(AuthContext)

    const GoogleLogin = () => {
        GoogleSignIn()
    }

    return (
        <div>
            <button onClick={GoogleLogin} className="btn btn-outline w-full">Google</button>
        </div>
    );
};

export default GoogleLogin;