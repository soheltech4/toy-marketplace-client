import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AllToysRow = ({ toys }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, email, category, photo, rating, quantity, price, toyname } = toys;
    const [d, setD] = useState({});

    const handleView = id => {
        fetch(`https://toy-world-server-ten.vercel.app/toys/${id}`)
            .then(res => res.json())
            .then(data => {
                setD(data);
            })
            .catch(error => console.log(error));
    };

    console.log(d);

    return (
        <tr>
            <th></th>
            <td>{name}</td>
            <td>{toyname}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <label htmlFor={`my-modal-${_id}`} onClick={() => handleView(_id)} className="btn">View Details</label>
            <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-5xl">
                        <div className="flex space-y-5 lg:flex-row">
                            <img src={d?.photo} className="max-w-sm rounded-lg shadow-xl m-5 h-66 w-56 " alt="Toy" />
                            <div>
                                <h1 className="text-xl"><span className="font-bold">Toy Name : </span>{d.toyname}</h1>
                                <h1 className="text-xl"><span className="font-bold">Seller Name : </span>{d.name}</h1>
                                <h1 className="text-xl"><span className="font-bold">Email : </span>{d.email}</h1>
                                <h1 className="text-xl"><span className="font-bold">Price : </span>{d.price}</h1>
                                <h1 className="text-xl"><span className="font-bold">Quantity : </span>{d.quantity}</h1>
                                <h1 className="text-xl"><span className="font-bold">Rating : </span>{d.rating}</h1>
                                <p className="text-xl"><span className="font-bold">Description : </span>{d.description}</p>
                            </div>
                        </div>
                    <div className="modal-action">
                        <label htmlFor={`my-modal-${_id}`} className="btn">
                            OK
                        </label>
                    </div>
                </div>
            </div>
        </tr>
    );
};

export default AllToysRow;
