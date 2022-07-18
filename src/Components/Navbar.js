import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="nav">
            <div className="nav-card1">
                <img src="./assets/bucks-logo.svg" alt="logo" />
                <div className="links">
                    <NavLink to='/menu' className='link'>MENU</NavLink>
                    <NavLink to='/rewards' className='link'>REWARDS</NavLink>
                    <NavLink to='/cards' className='link'>GIFT CARDS</NavLink>
                </div>
            </div>
            <div className="nav-card2">
                <span>
                    <i className="fa-solid fa-location"></i>
                    <NavLink to='/store' className='link'>Find a store</NavLink>
                </span>
                <Link to='/signin'>SIgn in</Link>
                <Link to='/join'>Join now</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar