import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AltHomeScreen from './screens/AltHome'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import ButtersCategoryScreen from './screens/ButtersCategoryScreen'
import SurfactantsScreen from './screens/SurfactantsScreen'
import EmulsCategoryScreen from './screens/EmulsCategoryScreen'
import PowdersCategoryScreen from './screens/PowdersCategoryScreen'
import ActivesCategoryScreen from './screens/ActivesCategoryScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='pt-0'>
        <Container fluid>
          <Route path='/SURFACTANTS' component={SurfactantsScreen} />
          <Route path='/BUTTERS-and-OILS' component={ButtersCategoryScreen} />
          <Route
            path='/EMULSIFIERS-and-STABILIZERS'
            component={EmulsCategoryScreen}
          />
          <Route
            path='/POWDERS-and-EXTRACTS'
            component={PowdersCategoryScreen}
          />
          <Route
            path='/ACTIVES-and-PRESERVATIVES'
            component={ActivesCategoryScreen}
          />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={AltHomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
