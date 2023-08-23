import React from 'react'
import './service.css'
const Service = ({img, title, text}) => {
  return (
    <div className='service__services-container'>
      <div className='service__services-image'>
      <img src={img} alt="" onError={(e) => console.error(e)} />
        </div>
        <div />
        <div className='service__services-title'>
          <h1>{title}</h1>
        </div>
        <div />
        <div className='service__services-text'>
          <p>{text}</p>
          </div>
      </div>
  )
}

export default Service