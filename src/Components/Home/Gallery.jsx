import React from 'react';
import Marquee from "react-fast-marquee";


const Gallery = () => {
    return (
        <div>
            <h1 className='bg-black text-white mt-10 mb-10 p-2 text-3xl font-semibold rounded-lg text-center'>Toys Gallery</h1>
            <div className='md:flex space-x-5 space-y-5'>
                <Marquee>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/HBZLpQP/1-3.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/ZTcNvTd/1.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/X8N95Fq/1-2.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/fdpSb68/1-1.png" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/zxyvCyM/1-1.jpg" alt="Shoes" /></figure>
                </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;