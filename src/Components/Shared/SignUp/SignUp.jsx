import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import GoogleLogin from '../Login/Google/GoogleLogin';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password, photo)
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .then(error => console.error(error))
    }


    return (
        <div className="mt-20 mb-20">
            <div>
                <h1 className='text-center text-4xl font-semibold mb-10'>Please Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className="content md:flex lg:flex-row">
                        <div className="mr-12 md:w-1/2">
                            <img src="https://i.ibb.co/TrKghLS/Login-removebg-preview.png" className='' alt="" />
                        </div>
                        <div className="card md:flex-shrink-0 max-w-sm w-full shadow-2xl ">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Photo Url" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn" type="submit" value="SIGN UP" />
                                </div>
                                <div className='text-center'>
                                    <h1>Have an account? Please <span className='text-blue-600'><Link to="/login">LOGIN</Link></span></h1>
                                </div>
                                <div className="divider">OR</div>
                                    <h1 className='text-center mb-5'>SIGN UP WITH</h1>
                                    <GoogleLogin></GoogleLogin>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;