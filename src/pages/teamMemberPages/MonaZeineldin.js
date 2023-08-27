import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import MonaZeineldinImage from '../../assets/mona zeineldin team page.png'

const MonaZeineldin = () => {
  return (
    <div>
      <HeaderImage title="Team"/>
      <TeamMemberPageComponent title={'Mona Zeineldin'} img={MonaZeineldinImage} text={'A seasoned commercial and investment banker with over 25 years experience within UAE, GCC and MENA. Mrs. Mona has worked with International as well as regional banks such as UNB, Barclays, and Citibank at senior management roles covering corporate banking, Financial Institutions, and DCM. She played an active role in structuring some complex syndicated loans as well as the debt restructuring of some of the largest corporates in the region. Mrs. Mona is also a part time lecturer in Banking, Corporate finance, Risk management, ESG & Sustainability, and Sustainable Finance. Mrs. Mona is an International Sustainable Finance advisor, having passed the IASE board examination for ISF, she also holds a MSc in Investment and Banking from the University of Reading, MBA in International Business from Maastricht School of Management, and BA in Economics from the AUC. She is also the Chairwoman of the UAE chapter for Development Finance at G100'}/>
    </div>

  )
}

export default MonaZeineldin