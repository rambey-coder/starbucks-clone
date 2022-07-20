import React from 'react'
import Footer from './Footer'

const Menu = () => {
  return (
    <div>
      <div className="menu-container">
      <div className="menu-nav">
        <li>All products</li>
        <li>Featured</li>
        <li>Previous Order</li>
        <li>Favorite Products</li>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Menu