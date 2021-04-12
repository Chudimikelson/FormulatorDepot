import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide1 from '../img/banner.jpg'
import slide2 from '../img/bbanner.jpg'
import slide3 from '../img/abanner.jpg'

const Banner = () => {
  return (
    <div className='mb-4'>
      <Carousel fade controls={false}>
        <Carousel.Item>
          <img className='bannerBG' src={slide1} alt='First slide' />
          <div className='col-12 text-center bannerText'>
            <p className='text-1 pt-4'>Active Ingredients</p>

            <p className='text-2 text-contrast w-80 mx-auto pt-3'>
              We offer an extensive selection of high quality ingredients for
              use in natural skincare, soap making, perfumes and other personal
              care applications
            </p>
            <p className='text-3 text-primary'>Also available in bulk sizes</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className='bannerBG' src={slide2} alt='Second slide' />

          <div className='col-12 text-center bannerText d-flex'>
            <p className='text-1 text-center align-self-center'>
              Additives & Extracts
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className='bannerBG' src={slide3} alt='Third slide' />

          <div className='col-12 text-center bannerText pt-5'>
            <p className='text-2 align-self-center'>Pure Quality</p>{' '}
            <p className='text-1 align-self-center text-secondary'>
              Essential Oils
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
