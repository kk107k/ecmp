import React from 'react'
import './newsComponent.css'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'



const doubleArrow = <FontAwesomeIcon icon={faAnglesRight} />;


const NewsComponent = ({link, img, title, text}) => {
  return (
  
    <Link to={link}>
    <div className='news__container'>
      <div className="news__container-image">
      <img  src={img}/>
      </div>
      <div className="news__container-contents">
        <div className="news__container-title">
          <h1>{title}</h1>
          <p>{text}</p>
          <p id='read-more-button'>READ MORE {doubleArrow}</p>
          </div>

        </div>
    </div>
    </Link>
  )
}

export default NewsComponent