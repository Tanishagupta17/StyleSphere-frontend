// import React from 'react'
// import { mainCarouselData } from './MainCarouselData'
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css';

// const MainCarousel = () => {
//     const items = mainCarouselData.map((item) => {
//         return <img className='cursor-pointer' role='presentation' src={item.image} alt="" />
//     })
//     return (
//         <AliceCarousel
//         items={items}
//         disableButtonsControls
//         autoPlay
//         autoPlayInterval={1000}
//         infinite
//         disableDotsControls
//     />
//     )
// }

// export default MainCarousel

import React from 'react';
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = mainCarouselData.map((item) => (
        <img
            key={item.image}
            className="cursor-pointer"
            role="presentation"
            src={item.image}
            alt=""
        />
    ));

    return (
        <div className="relative z-0"> {/* Ensure carousel has a low z-index */}
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                disableDotsControls
                className="z-0"
            />
        </div>
    );
};

export default MainCarousel;


