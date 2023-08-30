import React from 'react'
import './serviceNavbar.css'
import { Link } from 'react-router-dom'

const ServiceNavbar = () => {
  return (
    <div className='service-navbar__container'>
        <ul>
            <li><Link to={'/Corporate-Advisory'}>Corporate Support</Link></li>
            <li><Link to={'/Corporate-Finance'}>Corprate Finance</Link></li>
            <li><Link to={'/Risk-Advisory'}>Risk Advisory</Link></li>
            <li><Link to={'/Strategic-CFO-Services'}>Strategic CFO Services</Link></li>
            <li><Link to={'/Transaction-and-M&A'}>Transaction and M & A</Link></li>
            <li><Link to={'/Technology'}>Technology</Link></li>
            <li><Link to={'/ESG-Services'}>ESG Services</Link></li>
        </ul>
    </div>
  )
}

export default ServiceNavbar