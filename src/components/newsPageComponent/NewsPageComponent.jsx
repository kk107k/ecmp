import React from 'react'
import './newsPageComponent.css'

const NewsPageComponent = ({img, title, text}) => {
  return (
    <div className='newsPage__container'>
      
        <div className="newsPage__container-content">
            <img src={img} />
            <div className="newsPage__container-title">
            <h1>{title}</h1>
            <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsPageComponent