import React from 'react'
import { TeamMemberPageComponent, HeaderImage} from '../../components'
import yousifAlSuwaidi from '../../assets/yousif al suwaidi team page.png'

const YousifAlSuwaidi = () => {
  return (
    <div>
      <HeaderImage title={'Team'}/>
      <TeamMemberPageComponent title={'Yousif Al Suwaidi'} img={yousifAlSuwaidi} text={'Yousif has more than 20 years of experience in banking and financial services. He brings in-depth knowledge of retail banking, wealth management, commercial assets, trade and working capital. He has worked with clients across a range of industries including manufacturing, contracting, real estate and retail. He has managed and grew multiple product portfolios by driving acquisitions of Banking products across assets and liabilities. Yousif has held various senior management positions with international and regional banks. He earned a bachelor degree from Lebanese American University. A UAE national, he is fluent in Arabic, English, Hindi and Urdu.'}/>
    </div>
  )
}

export default YousifAlSuwaidi