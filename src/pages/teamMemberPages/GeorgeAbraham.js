import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import georgeAbraham from '../../assets/george abraham team page.png'
const GeorgeAbraham = () => {
  return (
    <div>
      <HeaderImage title={'Team'} />
      <TeamMemberPageComponent title={'George Abraham'} img={georgeAbraham} text={'George is a highly experienced Banker with over forty years of experience, including the last thirty within the UAE working with the largest UAE Banks in Wholesale Banking . He has personally managed some of the largest Government, Public Sector, MNC, Corporate and High Net Worth clients within the UAE. Leading the Wholesale Banking unit at one of the largest UAE Banks he was responsible for a ten-fold increase in Net Income over a period of five years post the Financial Crisis of 2008. George also developed a financing package for the Diamond industry in the UAE and thereby enhanced the attraction of Dubai as a hub for the industry. He has an excellent understanding of the UAE and the wider GCC market and understands how to assist Corporate clients in navigating the risks of operating in the region and mitigating the financial risks through optimization of their funding. '}/>
    </div>
  )
}

export default GeorgeAbraham
