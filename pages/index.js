import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      HeroBanner 

      <div className="products-heading">
        <h2>Beset Selling Productos</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {['Products1', 'Products2'].map(product => product + ' ')}
      </div>

      Footer
    </>
  )
}

export default Home