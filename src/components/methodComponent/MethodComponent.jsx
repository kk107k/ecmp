import React from 'react'
import './methodComponent.css'

const MethodComponent = ({img, title, text}) => {
  return (
    <div className='method__component-container color_bg-lightblue'>
        <div className='method__component-container-contents'>
            <div className='method__component-container-contents_left'>
                <img src={img} alt="image"/>
                </div>

            <div className='method__component-container-contents_right'>
                <div className='method__component-container-contents_right_contents'>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    </div>
                </div>

            </div>
        
    
    </div>
  )
}

export default MethodComponent