import React from 'react'
import { HeaderImage  } from '../components'
import { AboutUsPageHeading, AboutUsPageBody1, AboutUsPageBody2, AboutUsPageBody3 } from '../containers'

const AboutPage = () => {
  return (
    <div>
      <HeaderImage title="About Our Company"/>
      <AboutUsPageHeading />
      <AboutUsPageBody1 />
      <AboutUsPageBody2 />
      <AboutUsPageBody3 />
    </div>
  )
}

export default AboutPage