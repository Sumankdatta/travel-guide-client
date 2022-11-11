import React from 'react';
import './BannerItems.css'

const BannerItems = ({slide}) => {

    const {image,id,prev,next}=slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
    
    
   
   <div className="carusal-img">
   <img src={image} alt="" className='w-screen max-h-screen' />
   </div>
   
    
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/4">
      <h1 className='text-5xl font-bold text-white banner'>Make Your Holiday <br />Memorable</h1>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/2">
      <p className='text-xl text-white banneritems'>Thinking of taking a break from every day's busy life<br />
      Don't worry,We take care of your trip
      </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div>
    );
};

export default BannerItems;