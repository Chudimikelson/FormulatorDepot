import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide1 from '../img/img-1.jpg'
import slide2 from '../img/img-2.jpg'
import slide3 from '../img/img-3.jpg'
import slide4 from '../img/img-4.jpg'

const Review = () => {
  return (
    <div className='mainGreen py-4'>
      <h1 className='text-center u-dancing-script text-contrast'>
        What our customers are saying
      </h1>
      <Carousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={false}
        className='z-depth-1 container-fluid'
      >
        <Carousel.Item itemId='1' className='pb-4' style={{ height: 300 }}>
          <div className='mx-auto d-flex'>
            <div className='col-6 d-flex'>
              <div className='bg-contrast text-center rounded text-success my-auto p-4'>
                <div className='col-md-8 mx-auto'>
                  cosmetic formulator depot is your best bet for quality raw
                  materials for all your skin care needs at very affordable
                  prices
                </div>
                <h6 className='bold font-l text-secondary mt-4'>Esther C.O</h6>
                <p className='small mt-0 text-secondary text-uppercase mb-2'>
                  ETOILE BEAUTY{' '}
                </p>
                <hr className='w-25' />
              </div>
            </div>
            <div className='col-6 d-flex'>
              <div className='bg-contrast transparent rounded text-success my-auto p-4'>
                <p className='quote italic'>
                  The girl that influences our products The girl that influences
                  our products The girl that influences our products.
                </p>
                <h6 className='bold font-l text-secondary'>Aline De Souza</h6>
                <p className='small mt-0 text-secondary text-uppercase mb-5'>
                  Marketing{' '}
                </p>
                <hr className='w-25' />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item itemId='2' className='pb-4' style={{ height: 300 }}>
          <div className='mx-auto d-flex'>
            <div className='col-6 d-flex'>
              <div className='bg-contrast transparent rounded text-success my-auto p-4'>
                <p className='quote italic'>
                  The girl that influences our products The girl that influences
                  our products The girl that influences our products.
                </p>
                <h6 className='bold font-l text-secondary'>Aline De Souza</h6>
                <p className='small mt-0 text-secondary text-uppercase mb-5'>
                  Marketing{' '}
                </p>
                <hr className='w-25' />
              </div>
            </div>
            <div className='col-6 d-flex'>
              <div className='bg-contrast transparent rounded text-success my-auto p-4'>
                <p className='quote italic'>
                  The girl that influences our products The girl that influences
                  our products The girl that influences our products.
                </p>
                <h6 className='bold font-l text-secondary'>Aline De Souza</h6>
                <p className='small mt-0 text-secondary text-uppercase mb-5'>
                  Marketing{' '}
                </p>
                <hr className='w-25' />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item itemId='3' className='pb-4' style={{ height: 300 }}>
          <div className='mx-auto d-flex'>
            <div className='col-6 d-flex'>
              <div className='bg-contrast transparent rounded text-success my-auto p-4'>
                <p className='quote italic'>
                  The girl that influences our products The girl that influences
                  our products The girl that influences our products.
                </p>
                <h6 className='bold font-l text-secondary'>Aline De Souza</h6>
                <p className='small mt-0 text-secondary text-uppercase mb-5'>
                  Marketing{' '}
                </p>
                <hr className='w-25' />
              </div>
            </div>
            <div className='col-6 d-flex'>
              <div className='bg-contrast transparent rounded text-success my-auto p-4'>
                <p className='quote italic'>
                  The girl that influences our products The girl that influences
                  our products The girl that influences our products.
                </p>
                <h6 className='bold font-l text-secondary'>Aline De Souza</h6>
                <p className='small mt-0 text-secondary text-uppercase mb-5'>
                  Marketing{' '}
                </p>
                <hr className='w-25' />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item itemId='4' className='pb-4' style={{ height: 300 }}>
          <div className='mx-auto d-flex'>
            <div className='col-6 d-flex'>
              <div className='bg-contrast transparent rounded text-success my-auto p-4'>
                <p className='quote italic'>
                  The girl that influences our products The girl that influences
                  our products The girl that influences our products.
                </p>
                <h6 className='bold font-l text-secondary'>Aline De Souza</h6>
                <p className='small mt-0 text-secondary text-uppercase mb-5'>
                  Marketing{' '}
                </p>
                <hr className='w-25' />
              </div>
            </div>
            <div className='col-6 d-flex'>
              <div className='bg-contrast transparent rounded text-success my-auto p-4'>
                <p className='quote italic'>
                  The girl that influences our products The girl that influences
                  our products The girl that influences our products.
                </p>
                <h6 className='bold font-l text-secondary'>Aline De Souza</h6>
                <p className='small mt-0 text-secondary text-uppercase mb-5'>
                  Marketing{' '}
                </p>
                <hr className='w-25' />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Review
