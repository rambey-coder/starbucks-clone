import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="nav">
            <div className="nav-card1">
                <Link to='' className='logo'>
                <img src="./assets/bucks-logo.svg" alt="logo" />
                </Link>
                <div className="links">
                    <NavLink to='/menu' className={({ isActive }) => isActive ? 'link active' : 'link'}>MENU</NavLink>
                    <NavLink to='/rewards' className='link'>REWARDS</NavLink>
                    <NavLink to='/cards' className='link'>GIFT CARDS</NavLink>
                </div>
            </div>
            <div className="nav-card2">
                <span className='link'>
                    <i className="fa-solid fa-location"></i>
                    <NavLink to='/store' className='link'>Find a store</NavLink>
                </span>
                <Link to='/signin' className='sign-in'>SIgn in</Link>
                <Link to='/join' className='join-now'>Join now</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar