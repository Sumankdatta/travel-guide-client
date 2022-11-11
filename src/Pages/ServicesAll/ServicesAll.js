import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const ServicesAll = () => {

    const [servicesall,setServicesall]=useState([])
    useTitle('ServiceAll')
    useEffect(()=>{
        fetch('  https://travel-guide-server-seven.vercel.app/servicesall')
        .then(res =>res.json())
        .then(data=>setServicesall(data))
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
                    servicesall.map(service=><ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>
                   

                    )
                }
                
            </div>
              
        </div>
    );
};

export default ServicesAll;