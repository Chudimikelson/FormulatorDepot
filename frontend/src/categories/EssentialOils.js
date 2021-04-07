import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { listProductsByCategory } from '../actions/productActions'

const EssentialOils = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productCategoryList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProductsByCategory())
  }, [dispatch])
  return (
    <>
      <Meta />
      <h5 className='text-center'>ESSENTIAL OILS</h5>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products
            .filter((product) => {
              return product.category === 'ESSENTIAL OIL'
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
    </>
  )
}

export default EssentialOils
