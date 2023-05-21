import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import Swal from 'sweetalert2';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredToys, setFilteredToys] = useState([]);

    const url = `https://toy-world-server-ten.vercel.app/toys`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setFilteredToys(data);
            });
    }, []);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            Swal.fire('Please enter a toy name');
            return;
        }

        const filtered = toys.filter(toy =>
            toy.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filtered.length === 0) {
            Swal.fire('No matching toys found');
        }

        setFilteredToys(filtered);
    };

    return (
        <div>
            <h1 className='text-center text-semibold text-2xl mt-5 mb-10'>ALL TOYS : {filteredToys.length} </h1>
            <div className="flex justify-center space-x-2 mb-5">
                <input
                    type="text"
                    placeholder="Search by toy name"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </div>
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
                        {filteredToys.map(toy => (
                            <AllToysRow key={toy._id} toys={toy} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
