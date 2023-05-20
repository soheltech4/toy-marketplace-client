import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const SubCategory = ({ service }) => {
    const [data, setData] = useState("")
    const { name, _id, toys } = service
    
    const handleId = id => {

    }

    useEffect(()=>{
        toys.map(toy=> setData(toy))
    },[])


    return (
        <div>
            <div>
                <div className="tabs flex justify-center">
                    <Link onClick={() => handleId(_id)}><button className="btn btn-error">{name}</button></Link>
                </div>
                <div className='space-y-5 space-x-5 p-2 justify-center items-center m-5'>
                    <div className="card w-96 bg-base-100 shadow-lg">
                        <figure className="px-10 pt-10">
                            <img src={service.toys[0]?.picture} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center flex">
                            <h2 className="card-title"><span className='font-semibold'>Name: </span>{service?.toys[0]?.name}</h2>
                            <h2 className="card-title"><span className='font-semibold'>Price: </span>{service?.toys[0]?.price}</h2>
                            <h2 className="card-title"><span className='font-semibold'>Rating: </span>{service?.toys[0]?.rating}</h2>
                            <div className="card-actions">
                                <Link to={`/services/${_id}`}><button className="btn btn-error">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-lg">
                        <figure className="px-10 pt-10">
                            <img src={service.toys[1]?.picture} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center flex">
                            <h2 className="card-title"><span className='font-semibold'>Name: </span>{service?.toys[1]?.name}</h2>
                            <h2 className="card-title"><span className='font-semibold'>Price: </span>{service?.toys[1]?.price}</h2>
                            <h2 className="card-title"><span className='font-semibold'>Rating: </span>{service?.toys[1]?.rating}</h2>
                            <div className="card-actions">
                                <Link to={`/services/${_id}`}><button className="btn btn-error">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;