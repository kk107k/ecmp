import React from 'react'
import { Footer} from './containers'
import {Navbar} from './components'
import {Home, AboutPage, IndustriesPage, NewsPage, TeamsPage, ContactPage, CorporateAdvisory, CorporateFinance, ESG, RiskAdvisory, Strategy ,Technology ,TransactionManagement, News1, FaisalGaladari, FarrukhSiddiqui, KhamisMohamed, AhmedSaeed, JeremyShaw, GeorgeAbraham, ASPillai, RupaShyamraj, YousifAlSuwaidi, MonaZeineldin,ZahidRashid, KajChristenson, GarethWatts, BadrSoueidan} from './pages'
import './App.css'
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div className='App'>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="other">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecmp/" element={<Home />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Corporate-Advisory" element={<CorporateAdvisory />} />
        <Route path="/Corporate-Finance" element={<CorporateFinance />} />
        <Route path="/Risk-Advisory" element={<RiskAdvisory />} />
        <Route path="/Strategic-CEO-and-CFO-Services" element={<Strategy />} />
        <Route path="/Transation-Management-And-M&A" element={<TransactionManagement />} />
        <Route path="/Esg-services" element={<ESG />} />
        <Route path="/Technology" element={<Technology />} />

        {/* News pages go down here */}
        <Route path="/news/2022/10/31" element={<News1 />} />

        {/* Team member pages go down here */}
        <Route path="/faisal-galadari" element={<FaisalGaladari />} />
        <Route path="/farrukh-siddiqui" element={<FarrukhSiddiqui />} />
        <Route path="/khamis-mohamed" element={<KhamisMohamed />} />
        <Route path="/ahmed-saeed" element={<AhmedSaeed />} />
        <Route path="/jeremy-shaw" element={<JeremyShaw />} />
        <Route path="/george-abraham" element={<GeorgeAbraham />} />
        <Route path="/A-S-pillai" element={<ASPillai />} />
        <Route path="/rupa-shyamraj" element={<RupaShyamraj />} />
        <Route path="/yousif-al-suwaidi" element={<YousifAlSuwaidi />} />
        <Route path="/mona-zeineldin" element={<MonaZeineldin />} />
        <Route path="/zahid-rashid" element={<ZahidRashid />} />
        <Route path="/kaj-christenson" element={<KajChristenson />} />
        <Route path="/gareth-watts" element={<GarethWatts />} />
        <Route path="/badr-soueidan" element={<BadrSoueidan />} />

      </Routes>
      <Footer />
    </div>
    </div>
  )
}

export default App