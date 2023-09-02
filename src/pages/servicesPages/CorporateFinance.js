import React from 'react'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../components'
import image from '../../assets/Corporate_finance img.png'


const CorporateFinance = () => {
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
  heading={'Corporate Finance'} 
  text={'Have you had a financial health check on your business? You know your business but how does it look to a potential Investor, Client, Lender or Strategic Partner? We can help you present your business in the best positive light while also positioning you to support growth and expansion. Leverage your corporate strength and maximise your potential.'}
  listText={'Our Corporate Finance Advisory team, are ready to offer the following services:'}
  list={
    <ul>
    <li>Financial Re-engineering</li>
    <li>Debt Advisory & Restructuring</li>
    <li>Fund Raising</li>
    <li>Alternative Sources of Financing</li>
    <li>Investment Management</li>
    <li>Private Placements</li>
  </ul>
  }
  image={image} />    
    </div>
  </div>
  
</div>
)
}

export default CorporateFinance