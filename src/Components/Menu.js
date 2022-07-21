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

        <div className="type-list">
          <div className="list-type">
          <h1>Food</h1>
          <ul>
            <li>Hot Breakfast</li>
            <li>Bakery</li>
            <li>Lunch</li>
            <li>Snacks & Sweets</li>
            <li>Oatmeal & Yoghurt</li>
          </ul>
          </div>
          <div className="list-imgs">
          <span>
          <img src='./assets/hot-breakfast.webp' alt='hot coffee'/>
          <p>Hot Breakfast</p>
          </span>

          <span>
          <img src='./assets/bakery.webp' alt='hot coffee'/>
          <p>Bakery</p>
          </span>

          <span>
          <img src='./assets/lunch.webp' alt='hot coffee'/>
          <p>Lunch</p>
          </span>

          <span>
          <img src='./assets/snacks.webp' alt='hot coffee'/>
          <p>Snacks & Sweets</p>
          </span>
          <span>
          <img src='./assets/oatmeal.webp' alt='hot coffee'/>
          <p>Oatmeal & Yoghurt</p>
          </span>
          </div>
        </div>

        <div className="type-list">
          <div className="list-type">
          <h1>At Home Coffee</h1>
          <ul>
            <li>Whole Bean</li>
            <li>VIA® Instant</li>
          </ul>
          </div>
          <div className="list-imgs">
          <span>
          <img src='./assets/whole-bean.jpg' alt='hot coffee'/>
          <p>Whole Bean</p>
          </span>

          <span>
          <img src='./assets/instant.webp' alt='hot coffee'/>
          <p>VIA® Instant</p>
          </span>
          </div>
        </div>

        <div className="type-list">
          <div className="list-type">
          <h1>Merchandise</h1>
          <ul>
            <li>Cold Cups</li>
            <li>Tumblers</li>
            <li>Mugs</li>
            <li>Water Bottles</li>
            <li>Others</li>
          </ul>
          </div>
          <div className="list-imgs">
          <span>
          <img src='./assets/cold-cup.webp' alt='hot coffee'/>
          <p>Cold Cup</p>
          </span>

          <span>
          <img src='./assets/tumbler.webp' alt='hot coffee'/>
          <p>Tumbler</p>
          </span>

          <span>
          <img src='./assets/mug.webp' alt='hot coffee'/>
          <p>Mugs</p>
          </span>

          <span>
          <img src='./assets/water-bottle.webp' alt='hot coffee'/>
          <p>Water bottles</p>
          </span>

          <span>
          <img src='./assets/other.webp' alt='hot coffee'/>
          <p>Others</p>
          </span>
          </div>
        </div>

        <div className="type-list">
          <div className="list-type">
          <h1>Gift Cards</h1>
          <ul>
            <li>Happy Birthday</li>
            <li>Thank You</li>
            <li>Traditional</li>
          </ul>
          </div>
          <div className="list-imgs">
          <span>
          <img src='./assets/happy-birthday.webp' alt='hot coffee'/>
          <p>Happy Birthday</p>
          </span>

          <span>
          <img src='./assets/thank-you.webp' alt='hot coffee'/>
          <p>thank You</p>
          </span>

          <span>
          <img src='./assets/traditional.webp' alt='hot coffee'/>
          <p>Traditional</p>
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