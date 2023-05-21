import React, { useContext, useEffect, useState } from 'react';
import SubCategory from '../../Pages/SubCategory';
import Category from '../../Pages/Category';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery';
import ClientComment from '../../ClientComment/ClientComment';
import ContactForm from '../../ContactForm/ContactForm';
import { AuthContext } from '../../../Providers/AuthProvider';

const Home = () => {
    const [services, setServices] = useState([])
    const {loading} = useContext(AuthContext)

    useEffect(() => {
        fetch('https://toy-world-server-ten.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return <div className='flex justify-center container mx-auto mt-5'><button className="btn loading">loading</button></div>
     }

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/JHjrJHd/1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gPf24mQ/2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sgB0Sz9/3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/syZHcdH/4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <Gallery></Gallery>
            </div>
            <h1 className='bg-black text-white mt-10 mb-10 p-2 text-3xl font-semibold rounded-lg text-center'>Sub Category</h1>
            <div className='md:flex justify-center mx-auto'>
                {
                    services.map(service => <SubCategory key={service._id} service={service}></SubCategory>)
                }
            </div>
            <ClientComment></ClientComment>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;