import React from 'react'
import './menu.scss'

const Menu = () => {
  return (
    <menu className="main-menu">
      <div className="nav-menu">
        <div className="link-menu">
          <a href="/" className="item-menu">Home</a>
          <a href="/about" className="item-menu">About us</a>
          <a href="/products" className="item-menu">Products</a>
          <a href="/services" className="item-menu">Services</a>
          <a href="/contacts" className="item-menu">Contact</a>
        </div>
        <div className="search-menu">
          <input placeholder="look for more.." type="text"/>
          <button>Search</button>
        </div>
      </div>
    </menu>
  )
}

export default Menu