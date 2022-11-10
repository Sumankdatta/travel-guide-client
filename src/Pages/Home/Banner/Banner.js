import React from 'react';
import './Banner.css';
import img1 from '../../../assets/img1'
import img2 from '../../../assets/img2'
import img3 from '../../../assets/img3'
import img4 from '../../../assets/img4'
import img7 from '../../../assets/img7'
import img8 from '../../../assets/img8'
import BannerItems from './BannerItems';


const bannerData = [
    {
        image: img8,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img7,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img3,
        prev: 4,
        id: 5,
        next: 1
    },
]

const Banner = () => {


    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }
            {/* <BannerItems image={img2}></BannerItems>  */}



        </div>
    );
};

export default Banner;