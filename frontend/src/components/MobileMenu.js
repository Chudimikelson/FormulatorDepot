import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ListGroup, Button } from 'react-bootstrap'

export const MobileMenu = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <span onClick={handleShow}>
        <i
          className='fas fa-bars pt-3'
          style={{ color: '#56ab2f', fontSize: '1.5rem' }}
        ></i>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='mainGreen'>
          <Modal.Title className='text-contrast'>
            Cosmetic Formulator Depot
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant='flush'>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/BUTTERS-and-OILS'>Oils & Butters</Link>
            </ListGroup.Item>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/EMULSIFIERS-and-STABILIZERS'>Emulsifiers & waxes</Link>
            </ListGroup.Item>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/ACTIVES-and-PRESERVATIVES'>Preservatives</Link>
            </ListGroup.Item>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/SURFACTANTS'>Surfactants</Link>
            </ListGroup.Item>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/SURFACTANTS'>Humectants</Link>
            </ListGroup.Item>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/POWDERS-and-EXTRACTS'>Powders & Extracts</Link>
            </ListGroup.Item>
            <p className='p-3'>Contact Us</p>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Link to='/login' onClick={handleClose}>
            <Button>Sign-In / Register</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}
