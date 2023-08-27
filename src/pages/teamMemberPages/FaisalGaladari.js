import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import faisalgaladari from '../../assets/faisal galadari team page.png'

const FaisalGaladari = () => {
  return (
    <div>
      <HeaderImage title="Team" />
      <TeamMemberPageComponent title={'Faisal Galadari'} img={faisalgaladari} text={'Faisal Galadari is a highly experienced Banker, most recently as CEO of Al Masraf, Arab Bank For Investment & Foreign Trade, Abu Dhabi, UAE. He has over 40 years senior management experience with leading financial institutions covering commercial and consumer banking throughout the region. Currently he serves on the Board of Noor Capital P.J.S.C. Abu Dhabi, Ajman Bank P.J.S.C., Vault Pay and various business ventures. As you would expect, Faisal is an astute business professional with a deep understanding of client needs and how to solve for impactful solutions. We are very fortunate to have Faisal as our Chairman.'} />
    </div>
  )
}

export default FaisalGaladari