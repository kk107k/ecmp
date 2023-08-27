import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import ASPillaiImage from '../../assets/a s pillai team page.png'

const ASPillai = () => {
  return (
    <div>
      <HeaderImage title="Team"/>
      <TeamMemberPageComponent title={'A S Pillai'} img={ASPillaiImage} text={'A S Pillai is an accredited Chartered Accountant with around 40 years of senior executive experience gained in Banking and Healthcare.  Having worked in UAE, Qatar, Africa and India at the CEO/ CFO/ Board Advisory roles, his core competencies are in Strategic Planning,  IPO Advisory, Debt Restructuring, Balance Sheet Management, Financial Due Diligence, Stakeholder management and Virtual CFO Services'}/>
    </div>
  )
}

export default ASPillai
