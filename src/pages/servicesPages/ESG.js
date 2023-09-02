import React from 'react'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../components'
import image from '../../assets/esg_services img.png'

const ESG = () => {
  return (
    <div className='service-page__container color_bg-lightblue'>
    <HeaderImage title="ESG Services" />
    <div className='service-page__container-content'>
      <div className='service-page__container-left'>
    <ServiceNavbar />
    <QuickContactComponent />
  
      </div>
      <div className='sevice-page__container-right'>
    <ServicePageComponent 
    heading={'ESG Integration & Sustainable Finance Advisory'} 
    text={'All companies are under increasing pressure to focus on sustainable development and long-term value creation in addition to generating profits for shareholders. The correlation between corporate sustainability initiatives and performance is high with clear benefits for you and your business. We can fully support you on this journey and all our solutions are tailor-made to serve you and to achieve economic growth. We can,'}
    list={
      <ul>
      <li>Provide ESG transition and integration advisory services, sustainability reporting, and sustainable finance advisory services.</li>
      <li>Help you set your ESG objectives, key milestones, and medium to long-term plan to transition into an ESG-compliant company.</li>
      <li>Assist you in developing sustainability reporting and provide you with the tools to self-assess.</li>
      <li>Provide you with the training needed to transition your corporate culture into a more ESG-friendly approach.</li>
      <li>Support your efforts to raise sustainable and/or green finance depending upon your company requirements.</li>
    </ul>    
    }
    image={image} />    
      </div>
    </div>
    
  </div>
  )
  }

export default ESG