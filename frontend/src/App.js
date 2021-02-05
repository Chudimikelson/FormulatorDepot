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
import Actives from './categories/Actives'
import Additives from './categories/Additives'
import Adjusters from './categories/Adjusters'
import Butters from './categories/Butters'
import Bases from './categories/Bases'
import Cosmeceuticals from './categories/Cosmeceuticals'
import Emollients from './categories/Emollients'
import EssentialOils from './categories/EssentialOils'
import Exfoliants from './categories/Exfoliants'
import Extracts from './categories/Extracts'
import Humectants from './categories/Humectants'
import Hydrosols from './categories/Hydrosols'
import Preservatives from './categories/Preservatives'
import Surfactants from './categories/Surfactants'
import Emulsifiers from './categories/Emulsifiers'
import PowdersClays from './categories/PowdersClays'
import Solubilizers from './categories/Solubilizers'
import Thickners from './categories/Thickners'
import Waxes from './categories/Waxes'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='pt-0'>
        <Container fluid>
          <Route path='/ACTIVES' component={Actives} />
          <Route path='/ADDITIVES' component={Additives} />
          <Route path='/ADJUSTERS' component={Adjusters} />
          <Route path='/COSMETIC-BASES' component={Bases} />
          <Route path='/BUTTERS' component={Butters} />
          <Route path='/COSMECEUTICALS' component={Cosmeceuticals} />
          <Route path='/EMOLLIENTS' component={Emollients} />
          <Route path='/EMULSIFIERS' component={Emulsifiers} />
          <Route path='/ESSENTIAL-OILS' component={EssentialOils} />
          <Route path='/EXFOLIANTS' component={Exfoliants} />
          <Route path='/EXTRACTS' component={Extracts} />
          <Route path='/HUMECTANTS' component={Humectants} />
          <Route path='/HYDROSOLS' component={Hydrosols} />
          <Route path='/POWDERS-and-CLAYS' component={PowdersClays} />
          <Route path='/PRESERVATIVES' component={Preservatives} />
          <Route path='/SOLUBILIZERS' component={Solubilizers} />
          <Route path='/SURFACTANTS' component={Surfactants} />
          <Route path='/THICKNERS' component={Thickners} />
          <Route path='/WAXES' component={Waxes} />

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
