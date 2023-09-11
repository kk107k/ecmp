import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about__container' >
   <div className='about__container'>
      <div className='about__container-content'>
        <h2>Explore Our Company</h2>
        <h1>Implementing Effective Business Strategies for Companies</h1>
        <p>Understanding your business needs both now and for the future is crucial for effective solutions. As your partner we take that extra step because we are here for the long term.</p>
        <Link to='/about'>About us</Link>
    </div>
        </div>
   
    </div>
  )
}

export default About