import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toys }) => {
    const { _id, name, email, category, photo, rating, quantity, price } = toys
    const [d, setToys] = useState([])

    const handleView = id => {
        fetch(`http://localhost:5000/toys/${id}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }

    console.log(d)

    return (
        <tr>
            <th>
            </th>
            <td>{name}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <label htmlFor="my-modal-5" onClick={() => handleView(_id)} className="btn">View Details</label>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />

            {/* picture, toy name, seller name, seller email, price, rating, available quantity, and detail description */}

            <div className="modal">
                <div className="modal-box max-w-xl max-w-3xl">
                    <div className="">
                        <div className="flex space-y-5 lg:flex-row">
                            <img src={d?.photo} className="max-w-sm rounded-lg shadow-xl m-5" />
                            <div>
                                <h1 className="text-xl"><span className='font-bold'>Toy Name : </span> {d?.name}</h1>
                                <h1 className="text-xl"><span className='font-bold'> Seller Name : </span>{d?.name}</h1>
                                <h1 className="text-xl"><span className='font-bold'> Email : </span>{d?.email}</h1>
                                <h1 className="text-xl"><span className='font-bold'> Price : </span> {d?.price}</h1>
                                <h1 className="text-xl"><span className='font-bold'> Quantity : </span>{d?.quantity}</h1>
                                <h1 className="text-xl"><span className='font-bold'> Rating : </span> {d?.rating}</h1>
                            </div>
                        </div>
                        <p className="text-xl"><span className='font-bold'> Description : </span> {d?.description}</p>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">OK</label>
                    </div>
                </div>
            </div>
        </tr>
    );
};

export default AllToysRow;