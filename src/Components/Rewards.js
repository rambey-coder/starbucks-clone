import React, { useState } from 'react'
import './Reward.css'

const Rewards = () => {
  const [click, setClick] = useState(0)

  const handleClick = (i) => {
    setClick(i)
  }
  return (
    <>
    <div className="nav-menu">
    <div>
    <h2>STARBUCKS® REWARDS</h2>
    </div>
    </div>

    <div className="reward-container">
      <div>
      <h1>FREE COFFEE <br /> IS A TAP AWAY</h1>
      <p>Join now to start earning Rewards.</p>
      <button>Join now</button>
      <p>Or join in the app for the best experience</p>
      </div>
    </div>

    <div className="get-started">
      <h2>Getting started is easy</h2>
      <p>Earn Stars and get rewarded in a few easy steps.</p>
      <div className="reward-tab">
        <div className="flex">
          <div>
            <p>1</p>
          </div>
          <h2>Create an account</h2>
          <p>To get started, <span>join now</span>. You can also <span>join in the app</span> to get access to the full range of Starbucks® Rewards benefits</p>
        </div>
        <div className="flex">
          <div>
            <p>2</p>
          </div>
          <h2>Order and pay how you’d like</h2>
          <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <span>Learn how</span></p>
        </div>
        <div className="flex">
          <div>
            <p>3</p>
          </div>
          <h2>Earn Stars, get Rewards</h2>
          <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
        </div>
      </div>
    </div>

    <div className="favorites">
      <div className="get-fav">
        <div>
        <h1>Get your favorites for free</h1>
        <div className="tab-btn-container">
          <div className={click === 0 ? "btn-tab active" : 'btn-tab'} onClick={() => {handleClick(0)}}>
            <p>25</p>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className={click === 1 ? "btn-tab active" : 'btn-tab'} onClick={() => {handleClick(1)}}>
            <p>50</p>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className={click === 2 ? "btn-tab active" : 'btn-tab'} onClick={() => {handleClick(2)}}>
            <p>150</p>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className={click === 3 ? "btn-tab active" : 'btn-tab'} onClick={() => {handleClick(3)}}>
            <p>200</p>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className={click === 4 ? "btn-tab active" : 'btn-tab'} onClick={() => {handleClick(4)}}>
            <p>400</p>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        </div>
      </div>

      <div className="fav-container">
      <div className="fav-content">
        <div className={click === 0 ? "active" : ''} onClick={() => {handleClick(0)}}>
          <div>
            <img src="./assets/customize-drink.webp" alt="hot-coffee-tea" />
          </div>
          <div>
            <h3>Customize your drink</h3>
            <p>Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.</p>
          </div>
        </div>
      </div>

      <div className="fav-content">
        <div className={click === 1 ? "active" : ''} onClick={() => {handleClick(1)}}>
          <div>
            <img src="./assets/hot-coffee-tea.webp" alt="hot-coffee-tea" />
          </div>
          <div>
            <h3>Brewed hot coffee, bakery item or hot tea</h3>
            <p>Pair coffee cake or an almond croissant with your fresh cup of hot brew.</p>
          </div>
        </div>
      </div>

      <div className="fav-content">
        <div className={click === 2 ? "active" : ''} onClick={() => {handleClick(2)}}>
          <div>
            <img src="./assets/hand-crafted.webp" alt="hot-coffee-tea" />
          </div>
          <div>
            <h3>Handcrafted drink, hot breakfast or parfait</h3>
            <p>Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.</p>
          </div>
        </div>
      </div>

      <div className="fav-content">
        <div className={click === 3 ? "active" : ''} onClick={() => {handleClick(3)}}>
          <div>
            <img src="./assets/protein-box.webp" alt="hot-coffee-tea" />
          </div>
          <div>
            <h3>Salad, sandwich or protein box</h3>
            <p>Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.</p>
          </div>
        </div>
      </div>

      <div className="fav-content">
        <div className={click === 4 ? "active" : ''} onClick={() => {handleClick(4)}}>
          <div>
            <img src="./assets/home-coffee.webp" alt="hot-coffee-tea" />
          </div>
          <div>
            <h3>Select merchandise or at-home coffee</h3>
            <p>Take home a signature cup, a bag of coffee or your choice of select coffee accessories</p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Rewards