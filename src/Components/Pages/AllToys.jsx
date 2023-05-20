import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import Swal from 'sweetalert2';

const AllToys = () => {
    const [toys, setToys] = useState([])

    const url = `http://localhost:5000/toys`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            <h1 className='text-center text-semibold text-2xl mt-5 mb-10'>ALL TOYS : {toys.length} </h1>
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
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys.map(toy => <AllToysRow
                                key={toy._id}
                                toys={toy}
                            ></AllToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;