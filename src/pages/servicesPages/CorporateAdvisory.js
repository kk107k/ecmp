import React from 'react'
import './servicePage.css'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../components'
import image from '../../assets/Corporate_advisory img.png'
const CorporateAdvisory = () => {
  return (
    <div className='service-page__container color_bg-lightblue'>
        <HeaderImage title="Corporate Advisory" />
        <div className='service-page__container-content'>
          <div className='service-page__container-left'>
        <ServiceNavbar />
        <QuickContactComponent />

          </div>
          <div className='sevice-page__container-right'>
        <ServicePageComponent 
        heading={'Corporate Advisory'} 
        text={'You’ve worked hard to build your business but it doesn’t mean everything is as good as it could be. Perhaps you want to explore new markets, optimise your borrowings and Balance Sheet or undertake a full financial restructuring? Now could be the optimal time to consider that. Our expert teams can help you and walk you through some of the options available. Get in touch to see how.'}
        listText={'With our able Corporate Advisory team, we offer the following services:'}
        list={
        <ul>
            <li>Board Advisory</li>
            <li>Corporate Reorganization</li>
            <li>Succession Planning</li>
            <li>Management Consulting</li>
            <li>Capital Planning</li>
            <li>IPO Process</li>
            <li>Divestiture</li>
            <li>Strategic Corporate Planning</li>
            <li>Simplify Legacy Systems</li>
        </ul>}
        image={image} />    
          </div>
        </div>
        
    </div>
  )
}

export default CorporateAdvisory