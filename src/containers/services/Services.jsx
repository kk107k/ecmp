import React from 'react'
import './services.css'
import corporate from '../../assets/Corporate_advisory.png'
import finance from '../../assets/Corporate_finance.png'
import risk from '../../assets/risk_advisory.png'
import ceo from '../../assets/S_ceo_n_cfo_services.png'
import mnatrans from '../../assets/m_n_a_n_transactional.png'
import technology from'../../assets/technology.png'
import esg from '../../assets/esg_services.png'
const Services = () => {
  const servicesData = [
    {
      img: corporate,
      title: 'Corporate Advisory',
      text: 'Comprehensive Corporate-Wide Support'
    },
    {
      img: finance,
      title: 'Corporate Finance',
      text: 'Financial Solutions Driving Performance'
    },
    {
      img: risk,
      title: 'Risk Advisory',
      text: 'Enterprise-wide Risk Assessment'
    },
    {
      img: ceo,
      title: 'Strategic CEO & CFO Services',
      text: 'Virtual CEO & CFO Services'
    },
    {
      img: mnatrans,
      title: 'M&A and Transactional',
      text: 'Strategic & Working Capital Solutions'
    },
    {
      img: technology,
      title: 'Technology',
      text: 'Digital Innovation'
    },
    {
      img: esg,
      title: 'ESG Services',
      text: 'Corporate-wide Reviews & Solutions'
    },

  ]
  return (
    <div className='services__container color_bg-lightblue'>
      <div className='services__container-text'> 
        <h1>Services We Offer</h1>
        <p>Helping You to Succeed</p>
        <p>You have a great business, but have you thought about how you could do things slightly differently and optimize even more of what you have? Backed by a team of experienced professionals, we aim to meet the needs of all industrial segments and larger sized clients – from privately owned family offices to large international firms – and deliver lasting changes with measurable growth. Please get in touch with us today to learn how <b>EMCMP</b> can help your future success.</p>
      </div>
      <div className='services__container-cards'>
  {servicesData.map((service, index) => (
    <div className='services__container-cards-box'>
    <a href='' key={service.title + index}>
      <div className='services__container-cards-items'>
        {service.img && (
          <div className='services__container-cards-items-img'>
            <img src={service.img} alt={service.title} />
          </div>
        )}
        <div className='services_container-cards-items-text'> 
        <h1>{service.title}</h1>
        <p>{service.text}</p>
        </div>

      </div>
    </a>
    </div>
  ))}
</div>
          <div />
          <div />
    </div>
  )
}

export default Services