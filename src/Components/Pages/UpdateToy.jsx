import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateToy = () => {
    const toys = useLoaderData()

    const { _id, price, quantity } = toys

    const handleUpdateToy = (event) => {
        event.preventDefault()
        const form = event.target
        const quantity = form.quantity.value
        const price = form.price.value
        const description = form.description.value
        const updatetoy = {
            quantity,
            price,
            description
        }
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatetoy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Toy Updated Successfully',
                        confirmButtonText : 'Cool'
                    })
                }
            })
    }
    return (
        <div className="">
            <h1 className='text-3xl text-center mt-20 font-semibold'>UPDATE TOY</h1>
            <div className="card-body grid grid-rows-2 ">
                <form onSubmit={handleUpdateToy}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price} placeholder="Price" name='price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity} placeholder="Quantity" name='quantity' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" name='description' className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="UPDATE TOY" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;