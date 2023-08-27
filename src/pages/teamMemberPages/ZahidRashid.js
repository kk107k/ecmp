import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import zahidRashid from '../../assets/zahid rashid team page.png'

const ZahidRashid = () => {
  return (
    <div>
      <HeaderImage src={zahidRashid} alt="Zahid Rashid"/>
      <TeamMemberPageComponent title={'Zahid Rashid'} img={zahidRashid} text={'Zahid has over 30 years ‘experience in Banking within the GCC most recently as CRO of a UAE based bank. Zahid has been the most senior risk officer at every bank during the last 20 years and has a thorough understanding of the local market in the GCC. Throughout his career he has been involved in bank mergers and bank conversions across traditional and Islamic entities. He has risk management certification from some of the Worlds leading academic institutions. It goes without saying that Zahid is fully experienced in the GCC market.'}/>
    </div>
  )
}

export default ZahidRashid