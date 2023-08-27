import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import farrukhsiddiqui from '../../assets/farrukh siddiqui team page.png'

const FarrukhSiddiqui = () => {
  return (
    <div>
      <HeaderImage title="Team" />
      <TeamMemberPageComponent title={'Farrukh Siddiqui'} img={farrukhsiddiqui} text={'Farrukh has over 30 years experience across the Middle East and Emerging Markets at Senior Manager level across Corporate Banking, Treasury Services and Trade Finance with leading organisations including FAB, JPMorgan and Falcon Group.  Farrukh is extremely well known across the entire region after building successful international franchises.  His deep industry skills and market knowledge coupled with exceptional client contacts make Farrukh a very valuable colleague and a key founding partner.'} />
    </div>
  )
}

export default FarrukhSiddiqui