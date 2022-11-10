import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/mosk';

const AboutUs = () => {
    return (
  
     
         <div className="hero min-h-screen bg-base-200 h-3/4">
           
  <div className="hero-content flex-col lg:flex-row-reverse w-11/12 ">
    <img src={img1} alt="" className="max-w-sm rounded-lg shadow-2xl mr-20 h-3/4" />
    <div>
    
      <h1 className="text-5xl  text-orange-600 font-bold">Explore All Corners Of Bangladesh With Us</h1>
      <p className="py-6  text-xl">Bangladesh is a land of amazing natural beauty and there are no bounds of her prettiness which has glorified by the blessing of nature. therefore, in a small country like Bangladesh, there are lots of Tourist Places that can be said as a tourist destination</p>
      <button className="btn btn-primary"><Link to='/aboutdetail'>Read More</Link></button>
    </div>
  </div>
</div>
   
    );
};

export default AboutUs;