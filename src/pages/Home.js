import React from 'react'
import {About, About2, Clientele, Connect, Footer, Methods, Services, Why, ImageSlider, slidesData,} from '../containers'
import { Navbar } from '../components'
const Home = () => {
  return (
    <div>
    <ImageSlider slides={slidesData} parentWidth={2000} />
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