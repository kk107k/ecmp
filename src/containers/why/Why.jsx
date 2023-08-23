import React from 'react'
import './why.css'
import { WhyComponent } from '../../components'
import pic1 from '../../assets/why pic1.png'
import pic2 from '../../assets/why pic2.png'
import pic3 from '../../assets/why pic3.png'
import pic4 from '../../assets/why pic4.png'

const whyData = [
  {
    img: pic1,
    title: 'Innovative Thoughts',
    text: 'Creativity is in our DNA, lets approach the problem from a new perspective',
  },
  {
    img: pic2,
    title: 'Solution Provider',
    text: 'Solutions which actually work? Yes, that’s correct, we work hard to bring to you real improvements',

  },
  {
  img: pic3,
  title: 'Execution Leaders',
  text: 'We have an experienced Team but we know you also want one senior point of contact – You have it!',
  },
  {
    img: pic4,
    title: 'Action Plans',
    text: 'We will develop a clear step by step plan to show you how we will reach your optimum solution',

  }

]

const Why = () => {
  return (
    <div className='why__container color_bg-blue'>
      <div className='why__container__heading'>
      <h1>Why Choose Us</h1>
      <h2>We’re a Premium Corporate Finance Boutique</h2>
      <p>It’s not only our expertise, it’s how we manage the entire process from front to back as a cohesive Team working together towards your success</p>
      </div>
      <div className='why__container__component'>
      {whyData.map((item, index) => (  
      <WhyComponent 
      img={item.img} 
      title={item.title} 
      text={item.text} 
      button={item.button} 
      key={item.title + index}/>
      ))}
      </div>



    </div>
  )
}

export default Why