import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { listProductsByCategory } from '../actions/productActions'
import eoils from '../img/carrier-oils.jpg'
import Banner from '../components/Banner'

const AltHome = ({ history }) => {
  const dispatch = useDispatch()
  const [selectOption, setOption] = useState('')

  const productList = useSelector((state) => state.productCategoryList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProductsByCategory())
  }, [dispatch])

  const goToCategory = () => {
    history.push(`/${selectOption}`)
  }

  return (
    <>
      <Meta />
      <Banner />
      <div className='d-none mb-4'>
        <h5 className='text-center'>Shop By Category</h5>
        <Form.Row>
          <Col xs='10' className='mx-auto'>
            <Form.Control
              as='select'
              value={selectOption}
              onChange={(e) => setOption(e.target.value)}
              custom
            >
              <option>Select Category</option>
              <option value='EMULSIFIERS'>Emulsifiers</option>
              <option value='EMOLLIENTS'>Carrier Oils</option>
              <option value='ESSENTIAL-OILS'>Essential Oils</option>
              <option value='BUTTERS'>Butters</option>
              <option value='SURFACTANTS'>Surfactants</option>
              <option value='ACTIVES'>Actives</option>
              <option value='PRESERVATIVES'>Preservatives</option>
              <option value='COSMETIC-BASES'>Cosmetic Bases</option>
              <option value='HYDROSOLS'>Hydrosols</option>
              <option value='HUMECTANTS'>Humectants</option>
              <option value='SOLUBILIZERS'>Solubilizers</option>
              <option value='ADJUSTERS'>Ph Adjusters</option>
              <option value='THICKNERS'>Thickners</option>
              <option value='POWDERS-and-CLAYS'>Powders & Clays</option>
              <option value='EXFOLIANTS'>Exfoliants</option>
              <option value='EXTRACTS'>Extracts</option>
              <option value='WAXES'>Waxes</option>
              <option value='ADDITIVES'>Other Additives</option>
            </Form.Control>
          </Col>
          <div
            className='col-2 btn btn-primary btn-small'
            onClick={goToCategory}
          >
            Go
          </div>
        </Form.Row>
      </div>
      <h4 className='text-center'>Featured Products</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products
            .filter((product) => {
              return product.featured === true
            })
            .map((product) => (
              <div
                className='col-6 col-sm-3 col-md-4 col-lg-4'
                key={product._id}
              >
                <Product product={product} />
              </div>
            ))}
        </Row>
      )}
      <Row>
        <div className='d-flex flex-wrap'>
          <div className='col-12 px-0 py-1'>
            <Card>
              <Link to='/ESSENTIAL-OILS'>
                <Card.Img
                  src={eoils}
                  variant='top'
                  style={{ height: '12rem' }}
                />
              </Link>
            </Card>
          </div>
          <div className='col-6 px-1'>
            <Link to='/ESSENTIAL-OILS'>
              <Card.Img src={eoils} variant='top' />
            </Link>
          </div>
          <div className='col-6 px-1'>
            <Link to='/ESSENTIAL-OILS'>
              <Card.Img src={eoils} variant='top' />
            </Link>
          </div>
        </div>
      </Row>
    </>
  )
}

export default AltHome
