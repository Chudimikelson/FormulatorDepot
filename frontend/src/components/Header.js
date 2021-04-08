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
            <LinkContainer to='#'>
              <Nav.Link className='text-contrast font-regular no-decor-links'>
                Chat Us
              </Nav.Link>
            </LinkContainer>

            <Nav.Link
              href='https://api.whatsapp.com/send?phone=2348044567890'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-whatsapp' />
            </Nav.Link>
            <Nav.Link
              href='https://www.instagram.com/cosmeticformulatordepot/'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-instagram' />
            </Nav.Link>
            <LinkContainer to='#'>
              <Nav.Link>
                <i className='fab fa-facebook' />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='#'>
              <Nav.Link>
                <i className='fab fa-twitter' />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='#'>
              <Nav.Link>
                <i className='fab fa-telegram' />
              </Nav.Link>
            </LinkContainer>
          </Navbar>
          <Navbar>
            <Route render={({ history }) => <SearchBox history={history} />} />
          </Navbar>
          <Navbar className='ml-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link className='hover-white'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown
                title={
                  <div>
                    <i className='pr-2 fas fa-user' />
                    {userInfo.name}
                  </div>
                }
                id='username'
              >
                {userInfo.isAdmin && (
                  <>
                    {' '}
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <Dropdown.Divider />
                  </>
                )}
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link className='hover-white'>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
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
            {/** Menu Bar */}
            <div className='container-fluid'>
              <div className='container'>
                <ButtonGroup className='my-1'>
                  <Button size='lg' className='btn-contrast'>
                    <Link className='no-decor-links' to='/SURFACTANTS'>
                      SURFACTANTS
                    </Link>
                  </Button>
                  <Button size='lg' className='btn-contrast'>
                    <Link className='no-decor-links' to='/ACTIVES'>
                      ACTIVES
                    </Link>
                  </Button>
                  <DropdownButton
                    size='lg'
                    as={ButtonGroup}
                    title='BUTTERS & OILS '
                    id='bg-nested-dropdown'
                    className='menu-btn'
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
                  <Button size='lg' className='btn-contrast'>
                    <Link className='no-decor-links' to='/PRESERVATIVES'>
                      PRESERVATIVES
                    </Link>
                  </Button>
                  <DropdownButton
                    size='lg'
                    as={ButtonGroup}
                    title='ADDITIVES '
                    id='bg-nested-dropdown'
                    className='menu-btn'
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
                  <Button size='lg' className='btn-contrast'>
                    <Link className='no-decor-links' to='/COSMETIC-BASES'>
                      COSMETIC BASE
                    </Link>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </Container>
        </Navbar>
        <hr />
      </div>

      {/**mobile navigation */}

      <div className='d-md-none'>
        <nav class='navbar fixed-bottom navbar-light bg-light'>
          <div className='col-3'>
            {' '}
            {userInfo ? (
              <NavDropdown
                title={
                  <i
                    className='fas fa-user'
                    style={{
                      color: 'rgb(86 171 47)',
                      fontSize: '1.3rem',
                    }}
                  />
                }
                id='username'
              >
                {userInfo.isAdmin ? (
                  <>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </>
                ) : (
                  <LinkContainer to='/profile'>
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </LinkContainer>
                )}

                <Dropdown.Divider />
                <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i
                    className='fas fa-user'
                    style={{ color: 'rgb(86 171 47)' }}
                  ></i>
                </Nav.Link>
              </LinkContainer>
            )}
          </div>
          <div className='col-3'>
            <Link to='/search'>
              <i
                className='fas fa-search'
                style={{ color: '#56ab2f', fontSize: '1.3rem' }}
              />
            </Link>
          </div>
          <div className='col-3'>
            <Link to='/cart'>
              <i
                className='fas fa-shopping-cart'
                style={{ color: '#56ab2f', fontSize: '1.3rem' }}
              />
            </Link>
          </div>
          <div className='col-3'>
            <Nav.Link
              href='https://api.whatsapp.com/send?phone=2348044567890'
              rel='noreferrer'
              target='_blank'
            >
              <i
                className='fab fa-whatsapp'
                style={{ color: '#56ab2f', fontSize: '1.5rem' }}
              />
            </Nav.Link>
          </div>
        </nav>
        <Navbar>
          <div className='d-flex'>
            <LinkContainer className='col-2' to='#'>
              <Nav.Link>
                <MobileMenu />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer className='col-7 ml-4' to='/'>
              <Image className='small-logo' src={logo} alt='cfd' />
            </LinkContainer>
            {/**  <div className='col-4'>
              <div className='d-flex'>
                <div className='col-6 pr-0'>
                  {' '}
                  {userInfo ? (
                    <NavDropdown
                      title={
                        <i
                          className='fas fa-user'
                          style={{
                            color: 'rgb(86 171 47)',
                            fontSize: '1.3rem',
                          }}
                        />
                      }
                      id='username'
                    >
                      {userInfo.isAdmin ? (
                        <>
                          <LinkContainer to='/admin/userlist'>
                            <NavDropdown.Item>Users</NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to='/admin/productlist'>
                            <NavDropdown.Item>Products</NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to='/admin/orderlist'>
                            <NavDropdown.Item>Orders</NavDropdown.Item>
                          </LinkContainer>
                        </>
                      ) : (
                        <LinkContainer to='/profile'>
                          <Dropdown.Item>Profile</Dropdown.Item>
                        </LinkContainer>
                      )}

                      <Dropdown.Divider />
                      <Dropdown.Item onClick={logoutHandler}>
                        Logout
                      </Dropdown.Item>
                    </NavDropdown>
                  ) : (
                    <LinkContainer to='/login'>
                      <Nav.Link>
                        <i
                          className='fas fa-user'
                          style={{ color: 'rgb(86 171 47)' }}
                        ></i>
                      </Nav.Link>
                    </LinkContainer>
                  )}
                </div>

                <LinkContainer className='col-6' to='/cart'>
                  <Nav.Link>
                    <i
                      className='fas fa-shopping-cart'
                      style={{ color: '#56ab2f', fontSize: '1.3rem' }}
                    />
                  </Nav.Link>
                </LinkContainer>
              </div>
            </div>
         */}{' '}
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
