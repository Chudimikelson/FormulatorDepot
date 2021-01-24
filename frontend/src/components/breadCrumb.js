import React from 'react'
import { Breadcrumb, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const breadCrumb = () => {
  return (
    <>
      <Breadcrumb className='altGreen text-contrast'>
        <Breadcrumb.Item>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              BUTTERS & OILS
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item style={{ color: '#000' }}>Butters</Dropdown.Item>
              <Dropdown.Item style={{ color: '#000' }}>
                Essential Oil
              </Dropdown.Item>
              <Dropdown.Item style={{ color: '#000' }}>
                Emollients
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link
            to='/BUTTERS-and-OILS'
            className='bold lead text-contrast'
          ></Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/SURFACTANTS' className='bold lead text-contrast'>
            SURFACTANTS
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/SURFACTANTS' className='bold lead text-contrast'>
            ACTIVES
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/SURFACTANTS' className='bold lead text-contrast'>
            PRESERVATIVES
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/SURFACTANTS' className='bold lead text-contrast'>
            COSMETIC BASE
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/SURFACTANTS' className='bold lead text-contrast'>
            ADDITIVES
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link
            to='/EMULSIFIERS-and-STABILIZERS'
            className='bold lead text-contrast'
          >
            EMULSIFIERS & STABILIZERS
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/POWDERS-and-EXTRACTS' className='bold lead text-contrast'>
            POWDERS & EXTRACTS
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link
            to='/ACTIVES-and-PRESERVATIVES'
            className='bold lead text-contrast'
          >
            ACTIVES & PRESERVATIVES
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

export default breadCrumb
