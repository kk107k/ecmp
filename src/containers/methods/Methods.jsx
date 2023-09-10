import React from 'react'
import './methods.css'
import { Method } from '../../components'
import burj from '../../assets/burj al arab.png'
import pic1 from '../../assets/method pic1.png'
import pic2 from '../../assets/method pic2.png'
import pic3 from '../../assets/method pic3.png'

const Methods = () => {
  const methodData = [
    {
      img: pic1,
      title: 'Customised solutions – not textbook answers',
      text: 'Every assignment we undertake starts with you and hence every solution reflects that unique approach',
    },
    {
      img: pic2,
      title: 'Assignments with agreed timescales and targets',
      text: 'We mobilise the right resources at the right time to work for you and exceed your expectations',

    },
    {
      img: pic3,
      title: 'Enhancing our solutions with out-of-the-box thinking',
      text: 'Reaching out beyond your business, country, region can access new ideas, partners and approaches. We bridge that gap in our solution builds for you',
    },
  ]

  return (
    <div className='method__container color_bg-lightblue'>
      <div className='method__container_contents'>
      <div className='method__container-left'>
      </div>

      <div className='method__container-right'>
        <div className='method__container-right_content'>
          <div className='method__container-right_heading'>
            <h2>Our Methods</h2>
            <h1>Delivering End-to-End Solutions For You</h1>
            <p>Our Teamwork across multiple areas of expertise  brings innovative and new ideas within your reach. Let us help you propel your business to new heights through :</p>
          
          </div>
          <div className='method__container-right_methods'>
            {methodData.map((item, index) => (
              <Method img={item.img} title={item.title} text={item.text} key={item.title + index}/>
              ))}
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Methods