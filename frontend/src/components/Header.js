import React from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Image,
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Breadcrumb,
} from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import logo from '../cfd.png'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className='mb-0'>
      <div className='d-none d-md-block'>
        <div className='d-flex justify-content-between mainGreen'>
          <Navbar className='py-0'>
            <LinkContainer to='/'>
              <Nav.Link className='text-contrast font-regular'>
                Chat Us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className='fab fa-whatsapp' />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className='fab fa-instagram' />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className='fab fa-facebook' />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className='fab fa-twitter' />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className='fab fa-telegram' />
              </Nav.Link>
            </LinkContainer>
          </Navbar>
          <Navbar className='ml-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/productlist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Navbar>
        </div>
        <Navbar>
          <Container fluid className='justify-content-between'>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <Image
                  className='mylogo'
                  src={logo}
                  alt='Etoile Beauty Nigeria'
                />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar>
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </Navbar>
          </Container>
        </Navbar>{' '}
        {/** Menu Bar */}
        <div className='container-fluid'>
          <Breadcrumb className='altGreen text-contrast'>
            <Breadcrumb.Item>
              <Link to='/butters' className='bold lead text-contrast'>
                BUTTERS & OILS
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to='/surfactants' className='bold lead text-contrast'>
                SURFACTANTS
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to='/STABILIZERS' className='bold lead text-contrast'>
                EMULSIFIERS & STABILIZERS
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link
                to='/POWDERS-and-EXTRACTS'
                className='bold lead text-contrast'
              >
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
        </div>
      </div>
      {/**mobile navigation */}

      <div className='d-md-none'>
        <Navbar>
          <div className='d-flex justify-content-between'>
            <LinkContainer to='/'>
              <Nav.Link>
                <i
                  className='fas fa-bars pt-3'
                  style={{ color: '#56ab2f', fontSize: '1.5rem' }}
                ></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer className='col-6' to='/'>
              <Image
                className=''
                src={logo}
                alt='Etoile Beauty Nigeria'
                style={{ height: '100px' }}
              />
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i
                  className='fas fa-shopping-cart pt-3'
                  style={{ color: '#56ab2f', fontSize: '1.5rem' }}
                />
              </Nav.Link>
            </LinkContainer>
          </div>
        </Navbar>
        {/*<Search /> */}
        <div className='col-12 mb-3'>
          <Route render={({ history }) => <SearchBox history={history} />} />
        </div>
      </div>
    </header>
  )
}

export default Header