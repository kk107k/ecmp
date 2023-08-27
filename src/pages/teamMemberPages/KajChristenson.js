import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import KajChristensonImage from '../../assets/kaj christenson team page.png'

const KajChristenson = () => {
  return (
    <div>
      <HeaderImage title="Team"/>
      <TeamMemberPageComponent title={'Kaj Christenson'} img={KajChristensonImage} text={'Kaj is a Structured Finance professional with a strong background in Corporate Banking, Export Finance, Corporate Restructuring and Capital Markets. With an economics background plus over 30 years experience across the Globe Kaj has seen most scenarios.  Kaj has a deep knowledge of Export Credit Financing, Borrowing Base Lending, Workout restructuring and Pre Export Finance. Kaj enjoys Emerging Markets especially the MENA region and has spent most of his career at JPMorgan.'}/>
    </div>
  )
}

export default KajChristenson