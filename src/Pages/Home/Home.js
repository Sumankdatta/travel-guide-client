import React from 'react';
import useTitle from '../../hooks/useTitle';
import AboutUs from '../AboutUs/AboutUs';
import PopularDestination from '../PopularDestination/PopularDestination';
import Services from '../Services/Services';
import Banner from './Banner/Banner';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <PopularDestination></PopularDestination>
        </div>
    );
};

export default Home;