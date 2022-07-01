import React from 'react'
import './Navbar.css'
import user from '../home_asset/user.JPG'
import bag from '../home_asset/bag.JPG'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
     <Router>
     <nav className='navbar'>
          <div className="main_Container">
          <div className="left_nav">
              <ul className='ulList'>
                  <li className='nav-font'><Link to={""}>Kentucky Fried Chiken</Link></li>
                  <li className='nav-font'><Link to={""}>Menu</Link></li>
                  <li className='nav-font'><Link to={""}>Careers</Link></li>
                  <li className='nav-font'><Link to={""}>About</Link></li>
                  <li className='nav-font'><Link to={""}>Find a KFC</Link></li>
                  
              </ul>
              <ul className='ulList'>
                  <li><Link to={""}><p className='order_button'>Start Order</p></Link></li>
                  <li><Link to={""}><img src={user} alt="img" /></Link></li>
                  <li><Link to={""}><img src={bag} alt="img" /></Link></li>
                 
              </ul>
          </div>
          
          </div>
          <Routes>
          <Route path="/menu">
            {/* <About /> */}
          </Route>
          <Route path="/Careers">
            {/* <Topics /> */}
          </Route>
          <Route path="/About">
            {/* <Home /> */}
          </Route>

          <Route path='./findkfc'>
            {/* // add component */}
          </Route>
        </Routes>
      </nav>
     </Router>
    </div>
  )
}

export default Navbar
