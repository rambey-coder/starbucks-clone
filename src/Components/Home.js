import React from 'react'
import Navbar from './Navbar'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar />
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

        <div className="footer-container">
            <div className="foot-content">
                <div className="about">
                    <h4>About</h4>
                    <ul>
                        <li>Our Company</li>
                        <li>Our Coffee</li>
                        <li>Stories and New</li>
                        <li>Starbucks Archive</li>
                        <li>Investor Relation</li>
                        <li>Customer Service</li>
                    </ul>
                </div>

                <div className="career">
                    <h4>Careers</h4>
                    <ul>
                        <li>Culture and Values</li>
                        <li>Inclusion, Diversity, and Equity</li>
                        <li>College Achievement Plan</li>
                        <li>Aliumni Community</li>
                        <li>U.S Careers</li>
                        <li>International Careers</li>
                    </ul>
                </div>

                <div className="career">
                    <h4>Social Impact</h4>
                    <ul>
                        <li>People</li>
                        <li>Planet</li>
                        <li>Enviromental and Social Impact</li>
                    </ul>
                </div>

                <div className="partners">
                    <h4>For Business Partners</h4>
                    <ul>
                        <li>Landloard Support Center</li>
                        <li>Suppliers</li>
                        <li>Coporate Gift Card Sales</li>
                        <li>Office and Foodservice Coffee</li>
                    </ul>
                </div>

                <div className="partners">
                    <h4>Order and Pickup</h4>
                    <ul>
                        <li>Order on the App</li>
                        <li>Order on the Web</li>
                        <li>Delievery</li>
                        <li>Order and Pickup Option</li>
                        <li>Explore and Find Coffee for Home</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home