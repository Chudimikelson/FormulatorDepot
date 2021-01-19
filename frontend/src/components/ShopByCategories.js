import React from 'react'
import catPic1 from '../img/buttermilk.jpg'
import catPic2 from '../img/carrier-oils.jpg'
import catPic3 from '../img/avocado_unrefined.jpg'
import { Link } from 'react-router-dom'

const ShopByCategories = () => {
  return (
    <div className='d-flex flex-wrap'>
      <div className='col-md-4 col-12'>
        <img
          className='img-fluid card shadow w-100'
          style={{ height: 250 }}
          src={catPic2}
          alt='CFD'
        />
        <Link to='/BUTTERS-and-OILS'>
          <div className='btn btn-block finess mx-auto py-1'>OILS</div>
        </Link>
      </div>
      <div className='col-md-4 col-12'>
        <img
          className='img-fluid card shadow w-100'
          alt='CFD'
          style={{ height: 250 }}
          src={catPic3}
        />
        <Link to='/ACTIVES-and-PRESERVATIVES'>
          <div className='btn btn-block finess mx-auto py-1'>ACTIVES</div>
        </Link>
      </div>
      <div className='col-md-4 col-12'>
        <img
          className='img-fluid card shadow w-100'
          alt='CFD'
          style={{ height: 250 }}
          src={catPic1}
        />
        <Link to='/EMULSIFIERS-and-STABILIZERS'>
          <div className='btn btn-block finess mx-auto py-1'>EMULSIFIERS</div>
        </Link>
      </div>
    </div>
  )
}

export default ShopByCategories
