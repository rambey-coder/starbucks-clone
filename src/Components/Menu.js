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
          <span>
          <img src='./assets/hot-coffee.webp' alt='hot coffee'/>
          <p>Hot Coffees</p>
          </span>

          <span>
          <img src='./assets/hot-tea.webp' alt='hot coffee'/>
          <p>Hot Teas</p>
          </span>

          <span>
          <img src='./assets/hot-drinks.webp' alt='hot coffee'/>
          <p>Hot Drinks</p>
          </span>

          <span>
          <img src='./assets/beverages.webp' alt='hot coffee'/>
          <p>Frappuccino® Blended Beverages</p>
          </span>
          <span>
          <img src='./assets/cold-coffee.webp' alt='hot coffee'/>
          <p>Cold Coffees</p>
          </span>
          <span>
          <img src='./assets/iced-tea.webp' alt='hot coffee'/>
          <p>Iced Teas</p>
          </span>
          <span>
          <img src='./assets/cold-drink.webp' alt='hot coffee'/>
          <p>Cold Drinks</p>
          </span>
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