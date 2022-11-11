import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Service = () => {

    const { title, details, img, cost, duration, _id } = useLoaderData();
    const {user}=useContext(AuthContext)
    return (
        <div>
            <div className="card card-compact w-3/4 mx-auto my-20 bg-base-100 shadow-xl">
                <h1 className='text-center text-4xl text-orange-600 my-10'>Our service Details</h1>
                <figure><img className='' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>


                    <p>{details}</p>


                    <p>Price : {cost}</p>
                    <p>Duration : {duration}</p>

                </div>

            </div>

            <div>
                <form>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto w-3/4 my-5'>
                    <input name="firstname" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="lastname" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    </div>
                    <textarea name="review" className="textarea textarea-bordered grid mx-auto w-3/4 " placeholder="Your Review"></textarea>
                    <input className='btn btn-primary grid my-5 mx-auto' type="submit" value="Submit Rewievs" />
                </form>
            </div>

        </div>
    );
};

export default Service;