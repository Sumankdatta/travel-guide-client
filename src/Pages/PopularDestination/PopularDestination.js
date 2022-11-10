import React, { useEffect, useState } from 'react';
import PopularDestinationCard from '../PopularDestinationCard/PopularDestinationCard';

const PopularDestination = () => {

    const [popular,setPopular]=useState([])
    useEffect(()=>{
        fetch('popular.json')
        .then(res =>res.json())
        .then(data=>setPopular(data))
    },[])

    return (
        <div className='my-20'>
        <div className='text-center'>
        <p className='text-2xl font-bold text-orange-600'>Popular</p>
            <h2 className='text-4xl font-semibold'>Popular Destination</h2>
            <p>It is the most visited tourist destination in Bangladesh. Every year millions of <br /> foreigner and local visitors visit the beach to enjoy their holidays.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-10 gap-12'>
            
            {
                popular.map(popu=><PopularDestinationCard
                
                    key={popu._id}
                    popu={popu}
                ></PopularDestinationCard>
                )
            }
            
        </div>
            
    </div>
    );
};

export default PopularDestination;