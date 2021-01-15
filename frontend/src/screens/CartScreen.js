import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('qty=')[1]) : 1

  const remaining = location.search ? location.search.split('?qty=')[0] : 1

  let sizeString = location.search ? remaining.split('=')[1] : null
  sizeString = location.search ? sizeString.split('?')[0] : null

  let newPrice = location.search ? remaining.split('?price=')[1] : null
  newPrice = Number(newPrice)

  sizeString = Number(sizeString)
  const selected = Number(sizeString)

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, selected, newPrice))
    }
  }, [dispatch, productId, qty, selected, newPrice])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <p>Price = {newPrice}</p>
        <p>selected = {selected}</p>
        <p>{qty}</p>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>
                      {`${item.name} ${item.selected} g/ml`}
                    </Link>
                  </Col>
                  <Col md={2}>&#8358; {item.newPrice}</Col>
                  <Col md={1}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(
                            item.product,
                            Number(e.target.value),
                            item.selected,
                            item.newPrice
                          )
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  {/** 
                  <Col md={2}>
                    <Form.Control as='select' value={item.size} onChange={(e) =>
                        dispatch(
                          addSizeToCart(item.product, Number(e.target.value))
                        )
                      }>
                      <option value={100}>100ml </option>
                      <option value={250}>250ml </option>
                      <option value={500}>500ml </option>
                      <option value={1}>1L </option>
                    </Form.Control>
                  </Col>*/}
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='dark'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              &#8358;{' '}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.newPrice, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen