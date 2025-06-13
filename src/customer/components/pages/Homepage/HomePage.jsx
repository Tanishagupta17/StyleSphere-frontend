import React from 'react'
import MainCarousel from '../../MainCarousel/MainCarousel';
import HomeSectionCarousel from '../../HomeCarouselSection/HomeSectionCarousel';
import { mens_kurta } from '../../../../Data/mens_kurta';

const HomePage = () => {
  return (
    <div className='pt-16 bg-pink-50'>
        <MainCarousel/>
        <div className='py-5 space-y-10 flex flex-col justify-center px-10 lg:px10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurtas"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurtas"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurtas"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurtas"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurtas"}/>
        </div>
    </div>
  )
}

export default HomePage;
