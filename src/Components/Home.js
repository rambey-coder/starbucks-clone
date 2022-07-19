import React from 'react'
import Footer from './Footer'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className="section-container">
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

            <div className="cake-container">
                <div className="txt-container">
                    <div className="cake-inner-txt">
                    <h1>Vacation vibes</h1>
                    <p>With zesty lime frosting and sweet, dried coconut, our new Lime-Frosted Coconut Bar tastes like summertime.</p>
                    <a href="#">Order now</a>
                    </div>
                </div>
                <div className="img-container">
                    <img src="./assets/bucks-cake.jpg" alt="lime drink" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home