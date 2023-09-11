import React from 'react'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../components'
import image from '../../assets/risk_advisory img.png'


const RiskAdvisory = () => {
  return (
    <div className='service-page__container color_bg-lightblue'>
    <HeaderImage title="Risk Advisory" />
    <div className='service-page__container-content'>
      <div className='service-page__container-left'>
    <ServiceNavbar />
    <QuickContactComponent />
  
      </div>
      <div className='sevice-page__container-right'>
    <ServicePageComponent 
    heading={'Risk Advisory'} 
    text={'When did you last have a full risk assessment on your business? A comprehensive risk assessment is not a “one-off” exercise, it is a continual process to help you manage your business and plan for the unthinkable, however remote that may be. The pandemic, conflicts in countries crucial to supply chains all place new and untested risks on a business. You won’t have ALL the answers but we have the tools and the processes to help you manage through it.'}
    text2={'We will ensure that your most basic support mechanisms are covered such as contingency sites, key supplier reliance, key man insurance, IT support, Financial diversification etc. '}
    listText={'Our Risk Advisory team can help you with:'}
    list={
      <ul>
      <li>Enterprise-wide Risk Assessment</li>
      <li>Operational Risk Review</li>
      <li>Regulatory & Compliance Assessment </li>
    </ul>
    }
    image={image} />    
      </div>
    </div>
    
  </div>
  )
  }
  

export default RiskAdvisory