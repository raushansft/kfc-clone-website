import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
          <div className="main_Container">
          <div className="left_nav">
              <ul className='ulList'>
                  <li><a href="">Kentucky Fried Chiken</a></li>
                  <li><a href="">Menu</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Find a KFC</a></li>
                  <li><a href="">Start Order</a></li>
              </ul>
              <ul className='ulList'>
                  <li>qwertyu</li>
                  <li>qwertyu</li>
                  <li>qwertyu</li>
              </ul>
          </div>
          <div className="right"></div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
