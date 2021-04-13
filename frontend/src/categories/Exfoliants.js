import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { listProductsByCategory } from '../actions/productActions'
import Review from '../components/ReviewsCarousel'

const Exfoliants = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productCategoryList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProductsByCategory())
  }, [dispatch])
  return (
    <>
      <Meta />
      <h1 className='text-center'>EXFOLIANTS</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row className='px-md-5'>
            {products
              .filter((product) => {
                return product.category === 'EXFOLIANT'
              })
              .map((product) => (
                <div
                  className='col-6 col-sm-4 col-md-3 col-lg-3'
                  key={product._id}
                >
                  <Product product={product} />
                </div>
              ))}
          </Row>
        </>
      )}
    </>
  )
}

export default Exfoliants
