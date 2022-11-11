import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title,details,img,cost,duration,_id}=service;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure><img className='' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>


          <p>{details.length > 150 ?
                        <p>{details.slice(0, 150) + '...'} <Link className='text-blue-600 text-bold' to={`/checkout/${_id}`}>View Details</Link></p>
                        : <p>{details}</p>}</p>


          <p>Price : {cost}</p>
          <p>Duration : {duration}</p>
          
        </div>
        
      </div>
    );
};

export default ServiceCard;