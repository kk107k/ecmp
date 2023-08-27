import React from 'react'
import './teamMemberPageComponent.css'
import {ServiceNavbar} from '../index'

const TeamMemberPageComponent = ({title,img,text,text2}) => {
  return (
    <div className='team-member-page-component__container'>
        <div className='team-member-page-component__container-content'>
            <div className='team-member-page-component__container-content__title'>
                <h1>{title}</h1>
                </div>
                <div className='team-member-page-component__container-content__content'>
                    <img src={img} />
                    <p>{text}</p>
                    </div>
            </div>
            
            <div className='team-member-page-component__container-servicebar'>
        <ServiceNavbar />
        </div>
    </div>
  )
}

export default TeamMemberPageComponent