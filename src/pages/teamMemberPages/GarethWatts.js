import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import GarethWattsImage from '../../assets/gareth watts team page.png'
const GarethWatts = () => {
  return (
    <div>
      <HeaderImage title="Team"/>
      <TeamMemberPageComponent title={'Gareth Watts'} img={GarethWattsImage} text={'Gareth is one of the strongest Trade practitioners globally with a long career in Operations, Client Experience and Product Management over 27 years at JPMorgan. Gareth also worked at BofA and RBS as EMEA and then Global Product lead providing innovative client focussed solutions. His reputation for professionalism and leadership is recognised within the Industry at policy level having been engaged with the ICC and BAFT on a number of Trade working groups and with the IFS and IFSA on the CDCS practitioner qualification.  We are very fortunate to have Gareth on our team.'}/>
    </div>
  )
}

export default GarethWatts
