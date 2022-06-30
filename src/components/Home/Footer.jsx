import React from 'react'
import {IoLogoInstagram} from 'react-icons/io'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import './Footer.css';


export default function Footer() {
  return (
    <>
    <div className='ftr '>
   
    <div className="footer-page text-aln-lft">
      <p>Calorie Statement</p>
      <p>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request in-store and on kfc.com. Prices,</p>
      <br />
      <p>participation, and product availability may vary.</p>
      <br />
      
      <p>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Sierra Mist are registered trademarks of PepsiCo, Inc.</p>
      <p>Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</p>
    </div>
{/* // item apply display property  */}
    <div className='foot-container'>
      <div>
        <p>KFC Food</p>
        <p>Menu</p>
        <p>Full Nutrition Guide</p>
        <p>Nutrition Calculator</p>
        <p>Food Allergies </p>
        <p>Sensitivities</p>
      </div>

      <div>
        <p>Company</p>
        <p>About KFC</p>
        <p>How We Make Chiken</p>
        <p>KFC Foundation</p>
        <p>Company Responsibility</p>
        <p>Franchise a KFC</p>
        <p>Responsibile Discount</p>
        <p>KFC Newsroom</p>
      </div>

      <div>
        <p>Carriers</p>
        <p>Restaurant Careers</p>
        <p>Coporate CAreers</p>
        <p>Culture</p>
        <p>Growth</p>
      </div>

      <div>
        <p>Resources</p>
        <p>FAQs</p>
        <p>Contact Us</p>
        <p>KFC App</p>
      </div>

      <div>
        <p>Find a KFC</p>
        <p>Find A KFC</p>
      </div>

    </div>

    <div>
      <p>Privacy Policy |
Updated 01/2022 | Terms of Use | 
Our Cookies and Ads | 
Do Not Sell My Personal Information | 
Accessibility Statement</p>
<p>Copyright © KFC Corporation 2022 All Rights Reserved</p>

<div>
  <IoLogoInstagram/>
  <RiFacebookCircleLine/>
  <TiSocialTwitterCircular/>

</div>
    </div>
    </div>
      
    </>
  )
}
