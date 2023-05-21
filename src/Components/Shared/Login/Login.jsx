import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import GoogleLogin from './Google/GoogleLogin';

const Login = () => {
const [error, setError] = useState()

const {signIn} = useContext(AuthContext)

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        setError("")
        signIn(email, password)
        .then(result =>{
            const user = result.user 
            console.log(user)
        })
        .catch(error => setError(error.message))
    }


    return (
        <div className="mt-20 mb-20">
            <div>
                <h1 className='text-center text-4xl font-semibold mb-10'>Please Login</h1>
                <form onSubmit={handleSignIn}>
                    <div className="content md:flex lg:flex-row">
                        <div className="mr-12 md:w-1/2">
                            <img src="https://i.ibb.co/TrKghLS/Login-removebg-preview.png" className='' alt="" />
                        </div>
                        <div className="card md:flex-shrink-0 max-w-sm w-full shadow-2xl ">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn" type="submit" value="LOGIN" />
                                </div>
                                <div className='text-center'>
                                    <h1>For a new user! Please <span className='text-blue-600'><Link to="/signUp">SIGN UP</Link></span></h1>
                                    <div className="divider">OR</div>
                                    <h1 className='text-center mt-5 mb-5'>SIGN IN WITH</h1>

                                    <h1 className='text-red-600 text-center mb-2 mt-2'>{error}</h1>
                                    <GoogleLogin></GoogleLogin>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;