import React from 'react'
import {About, About2, Clientele, Connect, Footer, Methods, Services, Why, ImageSlider, slidesData,} from '../containers'
const Home = () => {
  return (
    <div><ImageSlider slides={slidesData} parentWidth={2000} />
    <Services /> {/* needs work */}
    <About />
    <About2 />
    <Why />
    <Methods /> {/* needs work */}
    <Clientele />
    <Connect /></div>
  )
}

export default Home