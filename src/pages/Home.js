import React from 'react'
import {About, About2, Clientele, Connect, Methods, Services, Why, SliderImage} from '../containers'

const Home = () => {
  return (
    <div>
    <SliderImage />
    <Services /> 
    <About />
    <About2 />
    <Why />
    <Methods /> 
    <Clientele />
    <Connect />
    </div>
  )
}

export default Home