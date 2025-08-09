import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='container'>
      <div className='footer-content'>
        <div className='foot-content'>
          <div>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Store Policy</a></li>
            <li><a href="#">Payment Methods</a></li>
          </div>
          <div>
            <li><a href="#">Contact</a></li>
            <li><p>+91 9876543210</p></li>
            <li><a href="#">info@mysite.com</a></li>
          </div>
          <div>
            <li><a href="#">facebook</a></li>
            <li><a href="#">instagram</a></li>
            <li><a href="#">pinterest</a></li>
          </div>
        </div>
        <div>
          <p>Join our mailing list and never miss an update</p>
          <div className='query'>
            <input type="email" name="email" placeholder='Email*' />
            <button type="submit">Subscribe Now</button><br/>
          </div>
          <small>Enter an email address like example@mysite.com.</small>
        </div>
      </div>
    </div>
  )
}

export default Footer
