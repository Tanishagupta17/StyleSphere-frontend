import React, { useRef, useState } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef();

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    // Handle previous slide
    const slidePrev = () => {
        const newIndex = Math.max(activeIndex - 1, 0); // Ensure index stays within bounds
        setActiveIndex(newIndex);
        carouselRef.current.slideTo(newIndex);
    };

    // Handle next slide
    const slideNext = () => {
        const newIndex = Math.min(activeIndex + 1, data.length - 1); // Ensure index stays within bounds
        setActiveIndex(newIndex);
        carouselRef.current.slideTo(newIndex);
    };

    // Sync carousel active index
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    // Generate carousel items
    const items = data.map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    return (
        <>

            <div className="relative">
            <h2 className='text-2xl font-extrabold text-gray-800 py-3'>{sectionName}</h2>
                <div className="p-5 border">
                    <AliceCarousel
                        items={items}
                        responsive={responsive}
                        onSlideChanged={syncActiveIndex}
                        activeIndex={activeIndex}
                        disableButtonsControls
                        disableDotsControls
                        ref={carouselRef} // Add reference to control carousel
                    />
                    {activeIndex < items.length - 5 && (
                        <Button
                            variant="contained"
                            className="z-20 bg-white"
                            sx={{
                                position: 'absolute',
                                top: '13rem',
                                right: 0,
                                transform: 'translateX(50%) rotate(90deg)',
                                bgcolor: 'white',
                            }}
                            aria-label="next"
                            onClick={slideNext}
                        >
                            <KeyboardArrowLeftIcon
                                sx={{ transform: 'rotate(90deg)', color: 'black' }}
                            />
                        </Button>
                    )}

                    {activeIndex > 0 && (
                        <Button
                            variant="contained"
                            className="bg-white z-20"
                            sx={{
                                position: 'absolute',
                                top: '13rem',
                                left: 0,
                                transform: 'translateX(-50%) rotate(-90deg)',
                                bgcolor: 'white',
                            }}
                            aria-label="prev"
                            onClick={slidePrev}
                        >
                            <KeyboardArrowLeftIcon
                                sx={{ transform: 'rotate(90deg)', color: 'black' }}
                            />
                        </Button>
                    )}
                </div>
            </div>
        </>

    );
};

export default HomeSectionCarousel;
