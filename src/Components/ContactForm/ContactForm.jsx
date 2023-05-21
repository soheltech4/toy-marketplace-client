import React from 'react';

const ContactForm = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-3xl text-center font-semibold mt-10 mb-5'>Contact US</h1>
            <div className='md:flex'>
                <div className="mr-12 md:w-1/2">
                    <img src="https://i.ibb.co/5jDTq2g/contact-img.png" className='' alt="" />
                </div>
                <div className="card md:flex-shrink-0 max-w-sm w-full shadow-2xl ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input type="text" placeholder="Message" name='text' className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn" type="submit" value="SEND" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
