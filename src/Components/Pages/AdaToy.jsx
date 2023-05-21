import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AdaToy = () => {
    const { user } = useContext(AuthContext)

    const handleAddToy = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const toyname = form.toyname.value
        const email = user?.email
        const photo = form.photo.value
        const rating = form.rating.value
        const category = form.category.value
        const quantity = form.quantity.value
        const price = form.price.value
        const description = form.description.value
        const adtoy = {
            name,
            toyname,
            email,
            photo,
            rating,
            category,
            quantity,
            price,
            description
        }
        fetch('https://toy-world-server-ten.vercel.app/toys', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(adtoy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div className="">
            <div className="card-body grid grid-rows-2 ">
                <form onSubmit={handleAddToy}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" placeholder="name" name='toyname' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="name" name='name' className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} placeholder="email" name='email' className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo Url" name='photo' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" placeholder="Sub Category" name='category' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name='price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name='rating' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" name='description' className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="ADD TOY" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdaToy;