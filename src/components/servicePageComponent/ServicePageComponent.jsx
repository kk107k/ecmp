import React from 'react'
import './servicePageComponent.css'

const ServicePageComponent = ({heading,text,text2,listText,list,image}) => {
  return (
    <div className='service-page-component__container'>
      <h1>{heading}</h1>
      <p>{text}</p>
      <p>{text2}</p>
      <p>{listText}</p>
      <p>{list}</p>
      <img src={image} />
    </div>
  )
}

export default ServicePageComponent