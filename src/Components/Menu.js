import React from 'react'
import './Menu.css'
import Footer from './Footer'

const Menu = () => {
  return (
    <>
      <div className="menu-container">
      <div className="menu-nav">
        <ul>
        <li>All products</li>
        <li>Featured</li>
        <li>Previous Order</li>
        <li>Favorite Products</li>
        </ul>
      </div>

      <div className="menu-content">
        <div className="type-list">
          <div className="list-type">
          <h1>Drinks</h1>
          <ul>
            <li>Hot Coffee</li>
            <li>Hot Teas</li>
            <li>Hot Drinks</li>
            <li>Frappuccino® Blended Beverages</li>
            <li>Cold Coffees</li>
            <li>Iced Teas</li>
            <li>Cold Drinks</li>
          </ul>
          </div>
          <div className="list-imgs">
            <img src='./assets/hot-coffee.webp' alt='hot coffee'/>
          </div>
        </div>
        <div className="menu-list"></div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Menu