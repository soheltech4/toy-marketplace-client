import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const SubCategory = ({ service }) => {
    const [data, setData] = useState()
    const { name, _id } = service

    const handleId = id => {
        if (id == _id) {
            console.log()
        }
    }
    return (
        <div>
            <div>
                <div className="tabs flex ">
                    <Link onClick={() => handleId(_id)}><button className="btn btn-error">{name}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;