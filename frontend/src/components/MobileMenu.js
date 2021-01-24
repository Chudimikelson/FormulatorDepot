import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ListGroup, Button, Accordion, Dropdown } from 'react-bootstrap'

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
          <div className='text-contrast'>Cosmetic Formulator Depot</div>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant='flush'>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/SURFACTANTS'>SURFACTANTS</Link>
            </ListGroup.Item>
            <Accordion defaultActiveKey='0'>
              <Accordion.Toggle
                className='accordion-toggle'
                as={ListGroup.Item}
                eventKey='0'
              >
                BUTTERS & OILS
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <ListGroup className='pl-2'>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/BUTTERS'>
                      Butters
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/ESSENTIAL-OILS'>
                      Essential Oils
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/EMOLLIENTS'>
                      Emollients
                    </Link>
                  </Dropdown.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Accordion>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/ACTIVES'>ACTIVES</Link>
            </ListGroup.Item>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/PRESERVATIVES'>PRESERVATIVES</Link>
            </ListGroup.Item>
            <ListGroup.Item onClick={handleClose}>
              <Link to='/BASES'>COSMECTIC BASES</Link>
            </ListGroup.Item>
            <Accordion defaultActiveKey='0'>
              <Accordion.Toggle
                className='accordion-toggle'
                as={ListGroup.Item}
                eventKey='1'
              >
                ADDITIVES
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='1'>
                <ListGroup className='pl-2'>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/HYDROSOLS'>
                      Hydrosols
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/SOLUBILIZERS'>
                      Solubilizers
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/HUMECTANTS'>
                      Humectants
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/ADJUSTERS'>
                      PH Adjusters
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/EMULSIFIERS'>
                      Emulsifiers
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/THICKNERS'>
                      Thickners
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/WAXES'>
                      Waxes
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/POWDERS-and-CLAYS'>
                      Powders & Clays
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/EXFOLIANTS'>
                      Exfoliants
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/EXTRACTS'>
                      Extracts
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClose}>
                    <Link className='dropDown-links' to='/ADDITIVES'>
                      Other Additives
                    </Link>
                  </Dropdown.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Accordion>

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
