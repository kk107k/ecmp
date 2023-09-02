import React from 'react'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../components'
import image from '../../assets/strategic img.png'


const Strategy = () => {
  return (
    <div className='service-page__container color_bg-lightblue'>
    <HeaderImage title="Strategic CEO & CFO Services" />
    <div className='service-page__container-content'>
      <div className='service-page__container-left'>
    <ServiceNavbar />
    <QuickContactComponent />
  
      </div>
      <div className='sevice-page__container-right'>
    <ServicePageComponent 
    heading={'Strategic CEO & CFO Services'} 
    text={'Having the best people to manage your business is clearly your priority, but what happens if a vacancy appears which is unplanned or performance is not as expected? We have a pool of talented, Senior Executives from around the World who can add value to any business either on a short term interim basis or longer term retainer basis.'}
    text2={'Our CEO services can fill that “Top Spot” while you search for the permanent individual to lead your business and provide a care-taking role in the interim.   Our virtual CFO services provide you access to Internationally experienced finance professionals to help you and your CEO not only manage the business efficiently but more importantly, provide that strategic support and vision to the next stage. '}
    listText={'Our Virtual CEO & CFO services team can help you with:'}
    list={
      <ul>
  <li>Strategic Planning – Design & Execution</li>
  <li>Stakeholder Management</li>
  <li>Cash Flow Management</li>
  <li>Budgeting & Performance Management</li>
  <li>Banking Relationship Management</li>
</ul>
    }
    image={image} />    
      </div>
    </div>
    
  </div>
  )
  }

export default Strategy