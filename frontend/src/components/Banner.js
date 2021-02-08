import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide1 from '../img/carrier-oils.jpg'
import slide2 from '../img/buttermilk.jpg'
import slide3 from '../img/avocado_unrefined.jpg'

const Banner = () => {
  return (
    <div className='mb-4'>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100 card shadow'
            src={slide1}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 card shadow'
            src={slide2}
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 card shadow'
            src={slide3}
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
