import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import Message from '../components/Message'
import Product from '../components/Product'
import { listProductsByCategory } from '../actions/productActions'

const Bases = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productCategoryList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProductsByCategory())
  }, [dispatch])
  return (
    <>
      <Meta />
      <h1 className='text-center'>Cosmetic Bases</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row className='px-md-5'>
            {products
              .filter((product) => {
                return product.category === 'SOAP BASE'
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

export default Bases
