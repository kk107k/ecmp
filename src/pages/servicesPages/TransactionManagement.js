import React from 'react'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../components'
import image from '../../assets/transaction img.png'

const TransactionManagement = () => {
  return (
    <div className='service-page__container color_bg-lightblue'>
    <HeaderImage title="Transaction Management and M & A" />
    <div className='service-page__container-content'>
      <div className='service-page__container-left'>
    <ServiceNavbar />
    <QuickContactComponent />
  
      </div>
      <div className='sevice-page__container-right'>
    <ServicePageComponent 
    heading={'Transaction Management and M & A'} 
    text={'Managing your business day to day, larger contracts, new clients, new markets all require support and perhaps innovative solutions and approaches to make them more successful.  Our pool of talented professionals with hands-on experience in handling multiple transactions in the country and region, can bring you the much needed foresight and wisdom to guide you on your vision on Mergers & Acquisitions.'}
    listText={'Our team of senior experts in this field are ready to guide you on:'}
    list={
      <ul>
      <li>IPO Process</li>
      <li>Deal Structuring</li>
      <li>Fair Market Valuations</li>
      <li>Commercial Due Diligence</li>
      <li>Working Capital Improvement</li>
      <li>Trade Finance Solutions</li>
      <li>Inventory Management</li>
      <li>ECA & Multilateral Support</li>
      <li>Receivership / Liquidation Management</li>
      <li>Strategic Partnerships / Joint Ventures</li>
    </ul>
    
    }
    image={image} />    
      </div>
    </div>
    
  </div>
  )
  }


export default TransactionManagement