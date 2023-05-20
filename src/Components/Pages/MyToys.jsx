import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import ToysRow from './ToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

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
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* name, email, photo, rating, quantity, price */}


                        {
                            toys.map(toy=> <ToysRow
                            key={toy._id}
                            toys={toy}
                            ></ToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;