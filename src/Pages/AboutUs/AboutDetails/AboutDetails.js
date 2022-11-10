import React from 'react';
import img1 from '../../../assets/area/sundorbon'
import img2 from '../../../assets/area/ctgn'
import img3 from '../../../assets/area/srimongal'
import img4 from '../../../assets/area/paharpu'

const AboutDetails = () => {
    return (
        <div className='my-20'>
        <h1 className='text-4xl text-orange-600 text-center my-20 text-orange-600'>Top 30 Tourist Places of Bangladesh</h1>
        <h1 className='text-4xl text-green-700 mx-12'>1.Sundarbans:</h1><br />
        <img className='w-3/5 mx-auto my-12' src={img1} alt="" />
        <p className='text-justify text-xl mx-12'>Sundarbans has declared World Heritage Site by UNESCO which is the largest Mangrove Forest situated between two countries. It is the kingdom of Royal Bengal tiger and you will find various kinds of species of birds, animals & plants and I think you should visit the tranquilizing beauty of Sundarbans once in your life.</p>

<br />
<h1 className='text-4xl text-green-700 mx-12'>2.Chittagong Hill Tracks:</h1><br />

<img className='w-3/5 mx-auto my-12' src={img2} alt="" />

<p className='text-justify text-xl mx-12'>

Hills are always enchanting to the tourist and as a tourist, you should obviously visit Chittagong Hill Tracks once which is the home of many tribal and you can discover yourself in the amazing green view. Chittagong Hill Tracks is the best place for making an adventurous tour and for this you have to take permission from the authority.</p> <br />
<h1 className='text-4xl text-green-700 mx-12'>3.Srimagal:</h1><br />

<img className='w-3/5 mx-auto my-12' src={img3} alt="" />

<p className='text-justify text-xl mx-12'>
The Capital of tea in Bangladesh is Srimagal which is situated in the north-eastern part of the country where you will find lush greenery fields all around. It is one of the best places in Bangladesh where you can really have the place & clam environment and there are two more visiting places too, Lawachhara National Park & Hamham Waterfalls. </p><br /><br />


<h1 className='text-4xl text-green-700 mx-12'>4.Paharpur:</h1> <br />

<img className='w-3/5 mx-auto my-12' src={img4} alt="" />

<p className='text-justify text-xl mx-12'>Paharpur is the most impressive archeological site of Bangladesh which is known as Sompuri Maharabihara which has declared World Heritage Site by UNESCO and it is situated in the northwestern part of the country. In the initial period, it was the best Buddhist Monastery where people came for higher study from all over the world.</p>

    </div>
    );
};

export default AboutDetails;