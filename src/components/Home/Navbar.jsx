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
                  <li><a href=""><i>Kentucky Fried Chiken </i></a></li>
                  <li><a href="">Menu</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Find a KFC</a></li>
              </ul>
              <ul className='ulList'>
                  <li><button>Start Order</button></li>
                  <li><div></div></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.5 28.8"><path d="M21.7 28.8H3.3c-1 0-1.8-.4-2.4-1.1-.6-.6-1-1.6-.8-2.5l1.2-22C1.3 1.4 2.8 0 4.5 0H23c1 0 1.8.4 2.4 1.1.6.6 1 1.6.8 2.5l-1.2 22c0 1.7-1.5 3.2-3.3 3.2z" fill="#FFF"></path><path d="M5.2 27H.8L2.2 2.6l.2-1.4.8-.4h3.4L5.2 27zM27.6 26l-4.2 1h-4.3L20.7.9H25L27.6 26z" fill="#E52E2A"></path><path d="M21.8 28.8H3.3c-1 0-1.8-.4-2.4-1.1-.6-.6-1-1.6-.8-2.5l1.2-22C1.4 1.4 2.8 0 4.5 0H23c1 0 1.8.4 2.4 1.1.6.6 1 1.6.8 2.5l-1.2 22c0 1.7-1.4 3.2-3.2 3.2zM4.5 1.7c-.9 0-1.5.6-1.5 1.5l-1.2 22c0 .4.1.9.4 1.1.2.4.7.5 1.1.5h18.5c.8 0 1.4-.6 1.4-1.5l1.2-22c0-.4-.1-.9-.4-1.1-.2-.4-.7-.5-1.1-.5H4.5z"></path><path d="M13.6 6.4c-2.8 0-4.9-2.2-4.9-4.9h1.8c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1h1.8c0 2.7-2.1 4.9-4.9 4.9zM21 27l.2 1.8h.6c.2 0 .4 0 .6-.1 1.1-.2 3.2-.7 4.5-1.1 1.4-.5 1.6-1.8 1.5-2.4L26.2 2.7l-.6.3 1.1 22.5c.1.5-.3.7-.5.7L21 27z"></path></svg></li>
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
