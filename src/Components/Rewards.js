import React from 'react'
import './Reward.css'

const Rewards = () => {
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
          <div>1</div>
          <h2>Create an account</h2>
          <p>To get started, <span>join now</span>. You can also <span>join in the app</span> to get access to the full range of Starbucks® Rewards benefits</p>
        </div>
        <div className="flex">
          <div>2</div>
          <h2>Order and pay how you’d like</h2>
          <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <span>Learn how</span></p>
        </div>
        <div className="flex">
          <div>3</div>
          <h2>Earn Stars, get Rewards</h2>
          <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rewards