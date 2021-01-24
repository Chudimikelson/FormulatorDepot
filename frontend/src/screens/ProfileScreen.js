import React, { useState, useEffect } from 'react'
import { Form, Button, Badge, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrders())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <div className=''>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex mt-3'>
            <h1 className='dancing-script'>Welcome</h1>
            <h5 className='my-auto ml-3'>{user.name}</h5>
          </div>
          <hr className='mb-4 mt-0' />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-8'>
          <h2>Your Orders</h2>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant='danger'>{errorOrders}</Message>
          ) : (
            <Card className='shadow'>
              {orders.map((order) => (
                <div className='row px-1 py-2' key={order._id}>
                  <div className='col-5 col-md-4'>
                    <Card className='p-md-3 m-md-3'>
                      <Card.Body className='text-center'>
                        <i
                          className='fas fa-shopping-basket'
                          style={{ color: '#008000' }}
                        ></i>
                      </Card.Body>
                      <Card.Footer className='text-center'>
                        {order.isPaid ? (
                          <Badge
                            pill
                            variant='success'
                            className='w-100 w-md-50'
                          >
                            PAID
                          </Badge>
                        ) : (
                          <Badge
                            pill
                            variant='danger'
                            className='w-100 w-md-50'
                          >
                            ON HOLD
                          </Badge>
                        )}
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className='col-7'>
                    <div className='row pt-md-3 mt-md-3'>
                      <div className='col-6'>
                        <p className='bold'>&#8358; {order.totalPrice}</p>
                      </div>
                      <div className='col-6'>
                        <LinkContainer to={`/order/${order._id}`}>
                          <Button className='btn-sm' variant='secondary'>
                            Details
                          </Button>
                        </LinkContainer>
                      </div>
                    </div>
                    <div className='row'>
                      <p className='text-muted mb-1 text-small'>
                        ORDER ID : {order._id}
                      </p>
                    </div>
                    <div className='row'>
                      <div className='text-primary text-small font-weight-medium d-sm-block'>
                        {order.createdAt.substring(0, 10)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/** 
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className='fas fa-times'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className='fas fa-times'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button className='btn-sm' variant='light'>
                          Details
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          */}
            </Card>
          )}
        </div>

        <div className='col-12 col-md-3'>
          <h2>User Profile</h2>
          {message && <Message variant='danger'>{message}</Message>}
          {}
          {success && <Message variant='success'>Profile Updated</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Card className='p-3'>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                  Update
                </Button>
              </Form>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
