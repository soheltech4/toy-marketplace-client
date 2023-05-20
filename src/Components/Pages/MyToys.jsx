import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import ToysRow from './ToysRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleDelete = id => {
        const proceed = Swal.fire('Want to Delete?')
        if (proceed) {
            fetch(`http://localhost:5000/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = toys.filter(toy => toy._id !== id)
                    setToys(remaining)
                })
        }
    }

    console.log(toys)
    return (
        <div>
            <h1>My Toys {toys.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* name, email, photo, rating, quantity, price */}


                        {
                            toys.map(toy => <ToysRow
                                key={toy._id}
                                toys={toy}
                                handleDelete={handleDelete}
                            ></ToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;