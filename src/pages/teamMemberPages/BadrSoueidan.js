import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import badrSoueidan from '../../assets/badr soueidan team page.png'

const BadrSoueidan = () => {
  return (
    <div>
      <HeaderImage src={badrSoueidan} alt="Badr Soueidan"/>
      <TeamMemberPageComponent title="Badr Soueidan" img={badrSoueidan} text="A passionate marketer with broad experience in Marketing and Corporate Communications including brand management, PR, media relations, sponsorship and event management, CSR, Digital Marketing and Social Media.

Badr spent over two decades in a variety of challenging roles in the Banking and Advertising industries. He has led the Marketing department at Commercial Bank of Dubai and Mashreq Bank in UAE, and Arab National Bank and Bank Al-Jazira in Saudi Arabia. Badr holds a BA in Public Administration from the American University of Beirut."/>
    </div>
  )
}

export default BadrSoueidan