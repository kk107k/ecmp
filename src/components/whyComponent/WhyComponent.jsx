import React from 'react'
import './whyComponent.css'
import arrow from '../../assets/arrow.png'
import { Link } from 'react-router-dom'

const why = ({img, title, text, button}) => {
  return (
    <div className='why__container-component color_bg-why'>
        <div className='why__container-component__heading-container'>
          <div className='why__container-component__heading'>
            <img src={img}></img>
            <h3>{title}</h3>
            </div>
            <div className='why__container-component__heading__line'>
              <hr></hr>
            </div>
            
        </div>
        
        <div className='why__container-component__text'>
        <p>{text}</p>
        </div>
        <hr></hr>
        <div className='why__container-component__button-container'>
        <div className='why__container-component__button'>
        <Link to='/about'>
          <p>
          Read More 
          </p>
          <img src={arrow}></img>
        </Link>
        
        </div>
        </div>
        
    </div>
  )
}

export default why