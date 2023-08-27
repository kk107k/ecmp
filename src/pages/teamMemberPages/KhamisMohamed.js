import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import khamisMohamed from '../../assets/khamis mohamed team page.png'

const KhamisMohamed = () => {
  return (
    <div>
      <HeaderImage title={'team'}/>
      <TeamMemberPageComponent title={'Khamis Mohamed Buharoon Al Shamsi'} img={khamisMohamed} text={'Khamis has over 36 years of experience in banking with the most recent 14 years at ADIB as Board Member, Vice Chairman and acting CEO for two years. Prior to this Khamis has held senior management positions at Commercial Bank International and National Bank of Abu Dhabi. Outside of Banking Khamis has most recently been Chairman of the Board of Directors at Burooj Real Estate. He has contributed to the establishment of several investment companies such as Arqaam Capital Investment in the DIFC, UBL and served as a Board Member in Tharawat Investment House, Bahrain, Naeem Holdings in Egypt and Chairman of Etihad Capital in the UAE. Khamis is a Certified Public Accountant and Auditor serving as the Head of the Banks Inspection Team, Assistant Director of Internal Audit and Head of the Financial & Administrative Affairs Department at the UAE Central Bank for 11 years. Khamis has a BA in Business & Accounting'}/>
    </div>
  )
}

export default KhamisMohamed