import React from 'react'
import './serviceNavbar.css'
import { Link } from 'react-router-dom'

const ServiceNavbar = () => {
  return (
    <div className='service-navbar__container'>
        <ul>
          <Link to={'/Corporate-Advisory'}><li>Corporate Support</li></Link>
          <Link to={'/Corporate-Finance'}><li>Corprate Finance</li></Link>
          <Link to={'/Risk-Advisory'}><li>Risk Advisory</li></Link>
          <Link to={'/Strategic-CEO-and-CFO-Services'}><li>Strategic CFO Services</li></Link>
          <Link to={'/Transation-Management-And-M&A'}><li>Transaction and M & A</li></Link>
          <Link to={'/ESG-Services'}><li>ESG Services</li></Link>
          <Link to={'/Technology'}><li>Technology</li></Link>

        </ul>
    </div>
  )
}

export default ServiceNavbar