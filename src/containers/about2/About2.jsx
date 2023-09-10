import React from 'react'
import './about2.css'
import pic1 from '../../assets/about2 pic1.png'
import pic2 from '../../assets/about2 pic2.png'
import pic3 from '../../assets/about2 pic3.png'

const About2 = () => {
  return (
    <div className='about2__container'>
      <div className='about2__container-content'>
      <div className='about2__container-top-text'>
        <div className='about2__container-left-text'>
          <h2>Our Company</h2>
          <h1>Providing What You Need To Manage & Grow Your Business Successfully</h1>

          </div>
        <div className='about2__container-right-text'>
            <p>Welcome to <b>Emerging Capital</b>, a Boutique Corporate Finance House that helps businesses like yours achieve unique goals. Our expert professionals will partner with your business to deliver tailor-made practical solutions, fast. We work with Global companies, Governments and Government Agencies, Banks and of course large local companies, many of whom are controlled by well respected family offices. We have many years experience of working across Emerging Markets and the Middle East region, providing solutions which only an independent boutique like <b>EMCMP</b> can truly provide. </p>
          </div>
      </div>

      <div className='about2__container-bottom-images'>

        <div className='about2__container-left-image'>
          <h2 id='pic1h2'>Work Atmosphere</h2>
          <img src={pic1} alt='pic1' id='pic1'/>

        </div>
        <div className='about2__container-center-image'>
          <h2 id='pic2h2'>Strategy Implementation</h2>
        <img src={pic2} alt='pic2' id='pic2'/>
        </div>
        <div className='about2__container-right-image'>

          <h2 id='pic3h2'>Teamwork Culture</h2>
           <img src={pic3} alt='pic3' id='pic3'/>
       
        </div>
      </div>
      </div>
    </div>
  )
}

export default About2