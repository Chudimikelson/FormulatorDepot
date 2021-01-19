import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { listProductsByCategory } from '../actions/productActions'
import ProductCarousel from '../components/ProductCarousel'
import ShopByCategories from '../components/ShopByCategories'
import Review from '../components/ReviewsCarousel'

const AltHome = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productCategoryList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProductsByCategory())
  }, [dispatch])
  return (
    <>
      <Meta />
      <ProductCarousel />
      <h1 className='text-center' style={{ fontFamily: 'u-dancing-script' }}>
        Shop By Category
      </h1>
      <ShopByCategories />
      <h1 className='text-center'>Featured Products</h1>
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
                  <Col
                    key={product._id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={2}
                    className='mx-auto'
                  >
                    <Product product={product} />
                  </Col>
                ))}
            </Row>
          </Container>
        </>
      )}
      <Review />
    </>
  )
}

export default AltHome
