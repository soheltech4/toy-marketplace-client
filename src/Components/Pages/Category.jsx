import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Category = ({ toy }) => {
    const { id, picture, name, price, rating, description } = toy

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-lg">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center flex">
                    <h2 className="card-title"><span className='font-semibold'>Name: </span>{name}</h2>
                    <h2 className="card-title"><span className='font-semibold'>Price: </span>{price}</h2>
                    <h2 className="card-title"><span className='font-semibold'>Rating: </span>{rating}</h2>
                    <label htmlFor={`my-modal-${id}`} onClick={() => handleId(id)} className="btn">View Details</label>
                    <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box max-w-3xl">
                            <div className="">
                                <div className="flex space-y-5 lg:flex-row">
                                    <img src={picture} className="max-w-sm rounded-lg shadow-xl m-5 h-66 w-56 " alt="Toy" />
                                    <div>
                                        <h1 className="text-xl"><span className="font-bold">Name : </span>{name}</h1>
                                        <h1 className="text-xl"><span className="font-bold">Price : </span>{price}</h1>
                                        <h1 className="text-xl"><span className="font-bold">Rating : </span>{rating}</h1>
                                        <h1 className="text-xl"><span className="font-bold">Description : </span>{description}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-action">
                                <label htmlFor={`my-modal-${id}`} className="btn">OK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;