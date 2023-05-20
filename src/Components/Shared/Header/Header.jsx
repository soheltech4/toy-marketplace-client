import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {

    const { user, LogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        LogOut()
            .then(()=>{})
            .catch(error => console.log(error));
    };

    const nav = <>
        <li><Link>Home</Link></li>
        <li><Link>All Toys</Link></li>
        {user?.email ? <>
        <li><Link to="mytoys">My Toys</Link></li> 
        <li><Link to="/toys">Add A Toy</Link></li>
        </>
        :
        <li></li>
        }
        <li><Link to="/blogs">Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <div className='flex'>
                    <Link><img src="https://i.ibb.co/Pr5KDXw/d58fd80ad73b98e1129fecc33368b2a7.png" className='h-9' alt="" /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?.email?
                    <h1 className="btn"><Link onClick={handleLogOut}>Log Out</Link></h1> :
                    <div className='flex'>
                        <h1 className="btn"><Link to="/login">Login</Link></h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;