import React from 'react'
import { HeaderImage, NewsPageComponent } from '../../components'
import news1 from '../../assets/news 1.png'

const edition31102022 = () => {
  return (
    <div>
        <HeaderImage title={"News Tag"}/>
        <NewsPageComponent img={news1} title={"News Tag"} text={"In November 2022 we moved to our new, modern and efficient office location, conveniently just off Sheikh Zayed Road offering easy access to all our clients within the UAE. The office is spaciously equipped with the latest technology and is the perfect setting for formal and informal discussions. Come and join us for a coffee !"}/>

    </div>
  )
}

export default edition31102022