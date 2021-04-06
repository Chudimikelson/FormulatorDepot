import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Tab, Nav, Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProducts(''))
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  return (
    <>
      <Tab.Container id='left-tabs-example' defaultActiveKey='orders'>
        <Row>
          <Col sm={2}>
            <Nav variant='pills' className='flex-column'>
              <Nav.Item>
                <Nav.Link eventKey='orders'>ORDERS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='products'>PRODUCTS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='users'>USERS</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey='orders'>
                <Tab.Container
                  id='left-tabs-example'
                  defaultActiveKey='SURFACTANTS'
                >
                  <Row>
                    <Col sm={3}>
                      <div className='card'>
                        <Nav variant='pills' className='flex-column p-2'>
                          <div className='mb-1'>
                            <Nav.Item>
                              <Nav.Link eventKey='SURFACTANTS'>
                                SURFACTANTS
                              </Nav.Link>
                            </Nav.Item>
                          </div>
                          <div className='mb-1'>
                            <Nav.Item>
                              <Nav.Link eventKey='ACTIVES'>ACTIVES</Nav.Link>
                            </Nav.Item>
                          </div>
                          <div className='mb-1'>
                            <Nav.Item>
                              <Nav.Link eventKey='OILS'>OILS</Nav.Link>
                            </Nav.Item>
                          </div>
                          <div className='mb-1'>
                            <Nav.Item>
                              <Nav.Link eventKey='BUTTERS'>BUTTERS</Nav.Link>
                            </Nav.Item>
                          </div>
                          <div className='mb-1'>
                            <Nav.Item>
                              <Nav.Link eventKey='PRESERVATIVES'>
                                PRESERVATIVES
                              </Nav.Link>
                            </Nav.Item>
                          </div>
                          <div className='mb-1'>
                            <Nav.Item>
                              <Nav.Link eventKey='ADDITIVES'>
                                ADDITIVES
                              </Nav.Link>
                            </Nav.Item>
                          </div>
                          <div className='mb-1'>
                            <Nav.Item>
                              <Nav.Link eventKey='BASES'>BASES</Nav.Link>
                            </Nav.Item>
                          </div>
                        </Nav>
                      </div>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey='SURFACTANTS'>
                          {loadingDelete && <Loader />}
                          {errorDelete && (
                            <Message variant='danger'>{errorDelete}</Message>
                          )}
                          {loadingCreate && <Loader />}
                          {errorCreate && (
                            <Message variant='danger'>{errorCreate}</Message>
                          )}
                          {loading ? (
                            <Loader />
                          ) : error ? (
                            <Message variant='danger'>{error}</Message>
                          ) : (
                            <div classname='row'>
                              {products
                                .filter((product) => {
                                  return product.category === 'SURFACTANT'
                                })
                                .map((product) => (
                                  <div
                                    key={product._id}
                                    className='mb-2 col-12'
                                  >
                                    <div className='d-flex flex-row card shadow'>
                                      <img
                                        style={{ height: '100px' }}
                                        alt={product.name}
                                        src={product.image}
                                      />
                                      <div className='pl-2 d-flex flex-grow-1 min-width-zero'>
                                        <div className='card-body align-self-center d-flex flex-column flex-lg-row justify-content-between align-items-lg-center'>
                                          <p className=''>{product.name}</p>
                                          <p className='text-muted'>
                                            &#8358; {product.mini}
                                          </p>

                                          <div className='pl-1 pr-4'>
                                            <LinkContainer
                                              to={`/admin/product/${product._id}/edit`}
                                            >
                                              <Button
                                                variant='light'
                                                className='btn-sm mr-2'
                                              >
                                                <i className='fas fa-edit'></i>
                                              </Button>
                                            </LinkContainer>
                                            <Button
                                              variant='danger'
                                              className='btn-sm'
                                              onClick={() =>
                                                deleteHandler(product._id)
                                              }
                                            >
                                              <i className='fas fa-trash'></i>
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )}
                        </Tab.Pane>

                        <Tab.Pane eventKey='butters'>butters</Tab.Pane>
                        <Tab.Pane eventKey='BUTTERS'>
                          {loadingDelete && <Loader />}
                          {errorDelete && (
                            <Message variant='danger'>{errorDelete}</Message>
                          )}
                          {loadingCreate && <Loader />}
                          {errorCreate && (
                            <Message variant='danger'>{errorCreate}</Message>
                          )}
                          {loading ? (
                            <Loader />
                          ) : error ? (
                            <Message variant='danger'>{error}</Message>
                          ) : (
                            <div classname='row'>
                              {products
                                .filter((product) => {
                                  return product.category === 'BUTTER'
                                })
                                .map((product) => (
                                  <div
                                    key={product._id}
                                    className='mb-2 col-12'
                                  >
                                    <div className='d-flex flex-row card shadow'>
                                      <img
                                        style={{ height: '100px' }}
                                        alt={product.name}
                                        src={product.image}
                                      />
                                      <div className='pl-2 d-flex flex-grow-1 min-width-zero'>
                                        <div className='card-body align-self-center d-flex flex-column flex-lg-row justify-content-between align-items-lg-center'>
                                          <p className=''>{product.name}</p>
                                          <p className='text-muted'>
                                            &#8358; {product.mini}
                                          </p>

                                          <div className='pl-1 pr-4'>
                                            <LinkContainer
                                              to={`/admin/product/${product._id}/edit`}
                                            >
                                              <Button
                                                variant='light'
                                                className='btn-sm mr-2'
                                              >
                                                <i className='fas fa-edit'></i>
                                              </Button>
                                            </LinkContainer>
                                            <Button
                                              variant='danger'
                                              className='btn-sm'
                                              onClick={() =>
                                                deleteHandler(product._id)
                                              }
                                            >
                                              <i className='fas fa-trash'></i>
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )}
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Tab.Pane>
              <Tab.Pane eventKey='products'>
                <Row className='align-items-center'>
                  <Col>
                    <h1>Products</h1>
                  </Col>
                  <Col className='text-right'>
                    <Button className='my-3' onClick={createProductHandler}>
                      <i className='fas fa-plus'></i> Create Product
                    </Button>
                  </Col>
                </Row>
                {loadingDelete && <Loader />}
                {errorDelete && (
                  <Message variant='danger'>{errorDelete}</Message>
                )}
                {loadingCreate && <Loader />}
                {errorCreate && (
                  <Message variant='danger'>{errorCreate}</Message>
                )}
                {loading ? (
                  <Loader />
                ) : error ? (
                  <Message variant='danger'>{error}</Message>
                ) : (
                  <>
                    <Table
                      striped
                      bordered
                      hover
                      responsive
                      className='table-sm'
                    >
                      <thead>
                        <tr>
                          <th>NAME</th>
                          <th>PRICE</th>
                          <th>CATEGORY</th>
                          <th>BRAND</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>&#8358; {product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                              <LinkContainer
                                to={`/admin/product/${product._id}/edit`}
                              >
                                <Button variant='light' className='btn-sm'>
                                  <i className='fas fa-edit'></i>
                                </Button>
                              </LinkContainer>
                              <Button
                                variant='danger'
                                className='btn-sm'
                                onClick={() => deleteHandler(product._id)}
                              >
                                <i className='fas fa-trash'></i>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey='users'>USERS</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}

export default ProductListScreen
