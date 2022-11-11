import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services,setServices]=useState([])
    useTitle('Services')
    useEffect(()=>{
        fetch('  https://travel-guide-server-seven.vercel.app/services')
        .then(res =>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-4xl font-semibold'>Our Service Area</h2>
                <p>Swanky is a trusted and reliable tour and travel agency among all the <br /> leading and updated tour-operating services in Bangladesh.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-10 gap-12'>
                
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}

                    ></ServiceCard>)
                }
                
            </div>
           <Link to='/servicesall'> <button className="btn btn-primary w-40 grid mx-auto">See All</button></Link>    
        </div>
    );
};

export default Services;