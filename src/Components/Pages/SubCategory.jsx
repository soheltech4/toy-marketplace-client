import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SubCategory = ({ service }) => {
    const [data, setData] = useState("")
    const { name, _id, toys } = service
    

    return (
        <div>
            <div>
                <div className="tabs flex justify-center">
                    <Link><button className="btn btn-black">{name}</button></Link>
                </div>
                <div className='space-y-5 space-x-5 p-2 justify-center items-center m-5'>
                    {
                        toys.map(toy => <Category toy={toy}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SubCategory;