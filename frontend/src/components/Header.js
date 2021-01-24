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
  Dropdown,
  DropdownButton,
  Button,
  ButtonGroup,
  Breadcrumb,
} from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import logo from '../cfd.png'
import { MobileMenu } from './MobileMenu'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className='mb-1'>
      <div className='d-none d-md-block'>
        <div
          className='d-flex justify-content-between'
          style={{ background: 'rgb(92 161 83)' }}
        >
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
        <div className='container-fluid mainGreen'>
          <div className='container'>
            <ButtonGroup className='my-1'>
              <Button size='lg'>
                <Link className='no-decor-links' to='/SURFACTANTS'>
                  SURFACTANTS
                </Link>
              </Button>
              <Button size='lg'>
                <Link className='no-decor-links' to='/ACTIVES'>
                  ACTIVES
                </Link>
              </Button>
              <DropdownButton
                size='lg'
                as={ButtonGroup}
                title='BUTTERS & OILS '
                id='bg-nested-dropdown'
              >
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/BUTTERS'>
                    BUTTERS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/ESSENTIAL-OILS'>
                    ESSENTIAL OILS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/EMOLLIENTS'>
                    EMOLLIENTS
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
              <Button size='lg'>
                <Link className='no-decor-links' to='/PRESERVATIVES'>
                  PRESERVATIVES
                </Link>
              </Button>
              <DropdownButton
                size='lg'
                as={ButtonGroup}
                title='ADDITIVES '
                id='bg-nested-dropdown'
              >
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/HYDROSOLS'>
                    HYDROSOLS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/SOLUBILIZERS'>
                    SOLUBILIZERS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/HUMECTANTS'>
                    HUMECTANTS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/ADJUSTERS'>
                    PH ADJUSTERS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/EMULSIFIERS'>
                    EMULSIFIERS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/WAXES'>
                    WAXES
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/THICKNERS'>
                    THICKNERS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/POWDERS-and-CLAYS'>
                    POWDERS & CLAYS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/EXFOLIANTS'>
                    EXFOLIANTS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/EXTRACTS'>
                    EXTRACTS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className='dropDown-links' to='/ADDITIVES'>
                    OTHER ADDITIVES
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
              <Button size='lg'>COSMETIC BASE</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      {/**mobile navigation */}

      <div className='d-md-none'>
        <Navbar>
          <div className='d-flex justify-content-between'>
            <LinkContainer to='#'>
              <Nav.Link>
                <MobileMenu />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer className='col-6' to='/'>
              <Image
                className='small-logo'
                src={logo}
                alt='cfd'
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
