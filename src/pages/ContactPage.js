import React from 'react'
import { HeaderImage  } from '../components'
import { ContactPageForm, ContactPageInfo } from '../containers'

const ContactPage = () => {



  return (
    
    <div className='contact-page_container'>
        <HeaderImage title="Contact Us" />
        <ContactPageInfo />
        <ContactPageForm />
        <iframe width="100%" height="350" style={{ border: 'none' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2198.9374849193323!2d55.244045934166756!3d25.176980921216906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69e8650a6b71%3A0x3e8f3a65ac153a10!2sAl%20Safa%20Buildings%20-%20Sheikh%20Zayed%20Rd%20-%20Dubai!5e0!3m2!1sen!2sae!4v1692972273989!5m2!1sen!2sae" ></iframe>
    </div>
  )
}

export default ContactPage