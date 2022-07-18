import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="nav">
            <div className="nav-card1">
                <img src="./assets/bucks-logo.svg" alt="logo" />
                <div className="links">
                    <NavLink to='/menu'>MENU</NavLink>
                    <NavLink to='/rewards'>REWARDS</NavLink>
                    <NavLink to='/cards'>GIFT CARDS</NavLink>
                </div>
            </div>
            <div className="nav-card2"></div>
        </div>
    </div>
  )
}

export default Navbar