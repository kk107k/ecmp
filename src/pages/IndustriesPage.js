import React from 'react'
import { HeaderImage  } from '../components'
import { IndustriesPageHeading, IndustriesPageBody1, IndustriesPageBody2, IndustriesPageTabs} from '../containers'

const IndustriesPage = () => {
  return (
    <div>
        <HeaderImage title="Industries We Serve"/>
        <IndustriesPageHeading />
        <IndustriesPageBody1 />
        <IndustriesPageBody2 />
        <IndustriesPageTabs />
    </div>
  )
}

export default IndustriesPage