import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../cfd.png'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='container-fluid py-4'>
          <div className='row gap-y'>
            <div className='col-md-3 bbn'>
              <img src={logo} alt='' style={{ height: '150px' }} />
            </div>
            <div className='col-md-6'>
              <h6 className='bold text-center'>Subscribe to our newsletter</h6>
              <p className='text-center'>
                By registering with us, you will receive right in your inbox all
                new features and updates.{' '}
                <span className='bold'>Subscribe now!</span>
              </p>
              <form
                action='#'
                className='form'
                data-response-message-animation='slide-in-left'
              >
                <div className='input-group'>
                  <input
                    type='email'
                    name='Subscribe[email]'
                    className='form-control rounded-circle-left'
                    placeholder='Enter your email'
                    required
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-rounded btn-dark' type='submit'>
                      Register
                    </button>
                  </div>
                </div>
              </form>
              <div className='response-message d-none'>
                <i className='fas fa-envelope font-lg'></i>
                <p className='font-md m-0'>Check your email</p>
                <p className='response'>
                  We sent you an email with a link to get started. You’ll be in
                  your account in no time.
                </p>
              </div>
            </div>
            <div className='col-md-3'>
              <h6 className='bold '>Contact Us</h6>
              <div className=''>
                <div className=''>
                  <i className='fas fa-map-marker mr-2  p-2 rounded'></i> Opp.
                  PW Primary School Kubwa, Abuja.
                </div>
                <div className='mt-2'>
                  <i className='fas fa-phone mr-2  p-2 rounded'></i> (+234)
                  804-456-7890
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-3' />
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Cosmetic Formulator Depot
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
