import React from 'react'
import { HeaderImage, TeamComponent } from '../components'
import { TeamPageHeading, TeamPageBody1, TeamPageBody2 } from '../containers'

const TeamPage = () => {
  return (
    <div className='team-page__container color_bg-lightgrey'>
        <HeaderImage title="Our Team"/>
        <TeamPageHeading />
        <TeamPageBody1 />
        <TeamPageBody2 />
       
    </div>
  )
}

export default TeamPage