import React from 'react'
import './teamPageBody2.css'
import { TeamComponent } from '../../../../components'
import jeremy from '../../../../assets/jeremy shaw.png'
import george from '../../../../assets/george abraham.png'
import pillai from '../../../../assets/a s pillai.png'
import rupa from '../../../../assets/rupa shyamraj.png'
import yousif from '../../../../assets/yousif al suwaidi.png'
import mona from '../../../../assets/mona zeineldin.png'
import zahid from '../../../../assets/zahid rashid.png'
import kaj from '../../../../assets/kaj christenson.png'
import gareth from '../../../../assets/gareth watts.png'
import badr from '../../../../assets/badr soueidan.png'

const TeamPageBody2 = () => {
  return (
    <div className='team-page-body-two__container'>
      <div className='team-page-body2__title'>
        <h1>Execution Team :</h1>
        </div>
      <div className='team-page-body2__content'>
        <TeamComponent img={jeremy} text={"Jeremy Shaw FCA"} link={"/"}/>
        <TeamComponent img={george} text={"George Abraham"} link={"/news"}/>
        <TeamComponent img={pillai} text={"A S Pillai"} link={"/"}/>
        <TeamComponent img={rupa} text={"Rupa Shyamraj"} link={"/news"}/>
        <TeamComponent img={yousif} text={"Yousif Al Suwaidi"} link={"/"}/>
        <TeamComponent img={mona} text={"Mona Zeineldin"} link={"/news"}/>
        <TeamComponent img={zahid} text={"Zahid Rashid"} link={"/"}/>
        <TeamComponent img={kaj} text={"Kaj Christenson"} link={"/news"}/>
        <TeamComponent img={gareth} text={"Gareth Watts"} link={"/"}/>
        <TeamComponent img={badr} text={"Badr Soueidan"} link={"/news"}/>
        </div>
    </div>
  )
}

export default TeamPageBody2