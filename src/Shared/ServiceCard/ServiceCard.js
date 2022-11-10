import React from 'react';

const ServiceCard = ({service}) => {
    const {title,details,img,cost,duration}=service;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure><img className='' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p>Price : {cost}</p>
          <p>Duration : {duration}</p>
          
        </div>
        
      </div>
    );
};

export default ServiceCard;