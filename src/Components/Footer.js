import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
                <div className="foot-list">
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

                <div className="foot-list">
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

                <div className="foot-list">
                    <h4>Social Impact</h4>
                    <ul>
                        <li>People</li>
                        <li>Planet</li>
                        <li>Enviromental and Social Impact</li>
                    </ul>
                </div>

                <div className="foot-list">
                    <h4>For Business Partners</h4>
                    <ul>
                        <li>Landloard Support Center</li>
                        <li>Suppliers</li>
                        <li>Coporate Gift Card Sales</li>
                        <li>Office and Foodservice Coffee</li>
                    </ul>
                </div>

                <div className="foot-list">
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
        <div className="foot-content">
            <div className="icons">
            <i className="fa-brands fa-spotify"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="terms">
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>CA Supply Chain Act</p>
                <p>Cookie Preferences</p>
            </div>
            <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
        </div>
        </div>
  )
}

export default Footer