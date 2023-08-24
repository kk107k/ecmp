import React from 'react'

import { Footer  } from './containers'
import {Navbar} from './components'
import {Home, AboutPage, IndustriesPage, NewsPage, TeamsPage, ContactPage, CorporateAdvisory, CorporateFinance, ESG, RiskAdvisory, Strategy ,Technology ,TransactionManagement, News1} from './pages'
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
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/corporate-advisory" element={<CorporateAdvisory />} />
        <Route path="/corporate-finance" element={<CorporateFinance />} />
        <Route path="/risk-advisory" element={<RiskAdvisory />} />
        <Route path="/Strategic-CEO-and-CFO-Services" element={<Strategy />} />
        <Route path="/Transation-Management-And-M-And-A" element={<TransactionManagement />} />
        <Route path="/esg-services" element={<ESG />} />
        <Route path="/technology" element={<Technology />} />

        {/* News pages go down here */}
        <Route path="/news/2022/10/31" element={<News1 />} />

      </Routes>
      <Footer />
    </div>
    </div>
  )
}

export default App