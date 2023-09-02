import React from 'react'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../components'
import image from '../../assets/technology img.png'

const Technology = () => {
  return (
    <div className='service-page__container color_bg-lightblue'>
    <HeaderImage title="Technology" />
    <div className='service-page__container-content'>
      <div className='service-page__container-left'>
    <ServiceNavbar />
    <QuickContactComponent />
  
      </div>
      <div className='sevice-page__container-right'>
    <ServicePageComponent 
    heading={'Digital Innovation'} 
    text={'We support you and your businesses to digitalize their various processes, thereby helping you achieve efficiency and transparency on your journey for sustainable growth. We apply advanced technologies and innovation to create a winning customer experience that helps you stay ahead of the curve. This is an environment of continual digital transformation cutting across the entire enterprise and all aspects of business.'}
    list={
    <ul>
      <li>ERP (Enterprise Resource Planning)</li>
      <li>CRM (Customer Relationship Management)</li>
      <li>Customer Engagement Platform</li>
      <li>Team Engagement Platform</li>
      <li>E-Commerce</li>
      <li>Mobile Application</li>
      <li>Website</li>
    </ul>
  
    }
    image={image} />    
      </div>
    </div>
    
  </div>
  )
  }

export default Technology