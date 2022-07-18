import React from 'react'
import Navbar from './Navbar'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="home-container">
            <div className="lime-container">
                <div className="txt-container">
                    <div className="inner-txt">
                    <h1>Summer’s brightest new drinks</h1>
                    <p>Introducing the Pineapple Passionfruit Starbucks Refreshers® beverage and the Starbucks® Paradise Drink with creamy coconutmilk.</p>
                    <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="img-container">
                    <img src="./assets/bucks-cup.jpg" alt="lime drink" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home