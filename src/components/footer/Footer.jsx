import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/emcp logo w writing.png'
import location from '../../assets/location.png'
import phone from '../../assets/phone call.png'
import mail from '../../assets/mail.png'
import linkedin from '../../assets/linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
const arrow = <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />;



const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__container-content'>
        <div className='footer__container-content-content'>
        <div className='footer__container-content-information'>
          <div className='footer__container-content-information-logo'>
          <img src={logo} id='logo' />
          </div>
            <div className='footer__container-content-information-location'>
                <a href='https://www.google.com/maps/dir//Al+Safa+Buildings+-+Sheikh+Zayed+Rd+-+Dubai+-+United+Arab+Emirates/@25.1776728,55.2106686,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f69e8650a6b71:0x3e8f3a65ac153a10!2m2!1d55.2456883!2d25.1775992?entry=ttu'>
                <img src={location} alt="" />
                <p>
                    Office 123, 1st Floor,
                    Mardoof Building, Al Safa 1,
                    Sheikh Zayed Road,
                    Dubai,
                    United Arab Emirates
                    </p>
                    </a>
              </div>
              <div className='footer__container-content-information-phone'>
                <a href='tel:+971-4-564%206090%20%20%20'>
                  <img src={phone} alt="" />
                  <p>+971-4-564 6090</p>
                  </a>
              </div>
              <div className='footer__container-content-information-email'>
                <a href='mailto:inquiry@emcmp.com'>
                  <img src={mail} alt="" />
                  <p>inquiry@emcmp.com</p>
                  </a>
              </div>
              <div className='footer__container-content-information-linkedin'>
              <a href='https://www.linkedin.com/company/emcmpuae/' id='linkedin'>
              <img src={linkedin} id='linkedin' />
              </a>
              </div>
        </div>
        <div className='footer__container-content-services'>
          <h1>Our Services</h1>
          <Link to='/corporate-advisory'>{arrow} <p>Corporate Advisory</p></Link>
          <Link to='/corporate-finance'>{arrow} <p>Corporate Finance</p></Link>
          <Link to='/risk-advisory'>{arrow} <p>Risk Advisory</p></Link>
          <Link to='/Strategic-CEO-and-CFO-Services'>{arrow} <p>Strategic CEO & CFO Services</p></Link>
          <Link to='/Transation-Management-And-M-And-A'>{arrow} <p>Transaction Management and M & A</p></Link>
          <Link to='/ESG-Services'>{arrow} <p>ESG services</p></Link>
          <Link to='/Technology'>{arrow} <p>Technology</p></Link>
          </div>
        <div className='footer__container-content-links'>
          <h1>Quick Links</h1>
          <Link to='/'>{arrow} <p>Home</p></Link>
          <Link to='/about'>{arrow} <p>About</p></Link>
          <Link to='/team'>{arrow} <p>Teams</p></Link>
          <Link to='/contact'>{arrow} <p>Contact Us</p></Link>
        </div>
        <div className='footer__container-content-newsletter'>
          <h1>Newsletter</h1>
          <form>
          <input placeholder='Name'></input>
          <input placeholder='Email'></input>
          <div className='footer__container-content-newsletter-button'>
          <button type='submit'>Submit</button>
          </div>
          </form>
          </div>
        </div>
        </div>
        <div className='footer__container-bottom'>
        EMCMP © ALL RIGHTS RESERVED
        </div>
    </div>
  )
}

export default Footer