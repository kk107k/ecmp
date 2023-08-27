import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import jeremyShaw from '../../assets/jeremy shaw team page.png'

const JeremyShaw = () => {
  return (
    <div>
      <HeaderImage title={'Team'}/>
      <TeamMemberPageComponent title={'Jeremy Shaw'} img={jeremyShaw} text={'Jeremy is an original founding partner of the business after more than 30 years experience across the World with respected Financial Institutions such as JPMorgan, Citi and Bank of New York Mellon. Jeremy originally qualified as a Chartered Accountant before a successful career in Banking. At JPMorgan he was the Global Head of Export Finance & also the EMEA Trade & Loan Products Head successfully growing the business. He has been a frequent speaker and contributor to many industry conferences spanning the Globe with a keen focus on Emerging Markets and open access to Capital Markets. '}/>
    </div>
  )
}

export default JeremyShaw