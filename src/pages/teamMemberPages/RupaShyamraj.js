import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import RupaShyamrajImage from '../../assets/rupa shyamraj team page.png'

const RupaShyamraj = () => {
  return (
    <div>
      <HeaderImage title={'Team'}/>
      <TeamMemberPageComponent title={'Rupa Shyamraj'} img={RupaShyamrajImage} text={'An accomplished Corporate Credit specialist with significant hands-on experience in project evaluation, loan syndications, corporate debt restructuring, trade finance and wholesale banking. She has over 30 years of experience in the banking industry in senior executive positions, of which fifteen years in the UAE.  Was the Asst. General Manager with the State Bank of India before moving to First Gulf Bank (now FAB) in Dubai and later Emirates NBD.  Prior to joining this team, was the Senior Vice President, Credit -Wholesale Banking at FAB (previously FGB) and Head of Portfolio Management-Corporate Banking at ENBD. '}/>
    </div>
  )
}

export default RupaShyamraj
