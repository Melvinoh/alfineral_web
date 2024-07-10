import React from 'react'
import './header.css' 
import { user ,search, bell, cart } from '../utills/icons.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src="/public/alf/logo.GIF" alt="" />
        <span >alfinerals</span>
      </div>
      <div className="nav">
        <Link to="/"><span>home</span></Link>
        <Link to="/about"><span>about</span></Link>
        <Link to="/services"><span>services</span></Link>
        <Link to="/shops"><span>shops</span></Link>
        <Link to="/blogs"><span>blogs</span></Link>
        <Link to="/contacts"><span>contacts</span></Link>
      </div>
      <div className="icons">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  )
}

export default Header