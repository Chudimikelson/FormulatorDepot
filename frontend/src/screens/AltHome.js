import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { listProductsByCategory } from '../actions/productActions'
import Review from '../components/ReviewsCarousel'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const AltHome = ({ history }) => {
  const dispatch = useDispatch()
  const [selectOption, setOption] = useState('')

  const productList = useSelector((state) => state.productCategoryList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProductsByCategory())
  }, [dispatch])

  const goToCategory = () => {
    console.log(selectOption)
    history.push(`/${selectOption}`)
  }

  return (
    <>
      <Meta />
      <Banner />
      <div className='d-md-none mb-4'>
        <h5 className='text-center'>Shop By Category</h5>
        <Form.Row>
          <Col xs='11' className='mx-auto'>
            <Form.Control
              as='select'
              value={selectOption}
              onChange={(e) => setOption(e.target.value)}
              custom
            >
              <option>Select Category</option>
              <option value='EMOLLIENTS'>Emollients</option>
              <option>Carrier Oils</option>
              <option>Essential Oils</option>
              <option>Butters</option>
              <option>Surfactants</option>
              <option>Actives</option>
              <option>Preservatives</option>
              <option>Cosmetic Bases</option>
              <option>Hydrosols</option>
              <option>Humectants</option>
              <option>Solubilizers</option>
              <option>Ph Adjusters</option>
              <option>Thickners</option>
              <option>Powders & Clays</option>
              <option>Exfoliants</option>
              <option>Extracts</option>
              <option>Waxes</option>
              <option>Other Additives</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <div className='btn btn-primary' onClick={goToCategory}>
          Go
        </div>
      </div>
      <h4 className='text-center'>Featured Products</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Container fluid>
            <Row>
              {products
                .filter((product) => {
                  return product.featured === true
                })
                .map((product) => (
                  <Col key={product._id} xs={12} sm={6}>
                    <Product product={product} />
                  </Col>
                ))}
            </Row>
          </Container>
        </>
      )}
      <div className='d-none d-md-block'>
        <Review />
      </div>
    </>
  )
}

export default AltHome
