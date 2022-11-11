import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Service = () => {

    const { title, details, img, cost, duration, _id } = useLoaderData();
    const {user}=useContext(AuthContext)
    useTitle('service')


    const handleReviewSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=`${form.firstname.value} ${form.lastname.value}`;
        const email=user?.email || 'unregistered';
        const phone=form.phone.value;
        const review=form.review.value;
        


        const reviews ={
            service:_id,
            serviceName:title,
            
            customerName:name,
            email,
            phone,
            review

        }

       fetch('http://localhost:5000/reviews',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(reviews)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.acknowledged){
            alert('Review place successfully')
            form.reset();
        }
       })
       .catch(er =>console.errer(er))
    }   

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

            <div className='bg-slate-300 w-4/5 grid mx-auto my-10'>
                <p className='text-3xl mx-auto my-10 text-orange-600'>Your Reviews</p>
                <form onSubmit={handleReviewSubmit} >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto w-3/4 my-5'>
                    <input name="firstname" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="lastname" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full" required/>
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    </div>
                    <textarea name="review" className="textarea textarea-bordered grid mx-auto w-3/4 " placeholder="Your Review" required></textarea>
                    <input className='btn btn-primary grid my-5 mx-auto' type="submit" value="Submit Rewievs" />
                </form>
            </div>

        </div>
    );
};

export default Service;