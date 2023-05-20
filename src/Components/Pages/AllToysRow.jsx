import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({toys}) => {
    const { _id, name, email, category, photo, rating, quantity, price } = toys

// o	Seller: (if available) show the name of the person who posted the toy
// o	Toy Name
// o	Sub-category
// o	Price
// o	Available Quantity
// o	View Details button


    return (
        <tr>
            <th>
            </th>
            <td>{name}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <th>
                <Link to={`/toys/${_id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysRow;