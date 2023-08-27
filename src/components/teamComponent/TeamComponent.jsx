import React from 'react'
import './teamComponent.css'
import { Link } from 'react-router-dom'

const TeamComponent = ({img,text, link}) => {
  return (
    <div className='team-component__container'>
        <Link to={link}>
        <div className='team-component__container-img'>
            <img src={img} alt='team' />
        </div>
        <div className='team-component__container-text'>
            <p>{text}</p>
        </div>
        </Link>
    </div>
  )
}

export default TeamComponent