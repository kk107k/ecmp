import React from 'react'
import { HeaderImage, NewsComponent } from '../components'
import news1 from '../assets/news 1.png'

const NewsPage = () => {

    const newsData = [
        {
          link: '2022/10/31',
          img: news1,
          title: 'News Tag',
          text: 'In November 2022 we moved to our new, modern and efficient office location, conveniently just off Sheikh Zayed Road offering easy access to all our clients within the UAE. The office is spaciously equipped with the latest technology and is the perfect setting for formal and informal discussions. Come and join us for a coffee !'
        },
      
        { 
          img: news1,
          title: 'News Tag',
          text: 'fefe'},
        { 
          link: 'google.com',
          img: news1,
          title: 'News Tag',
          text: 'fefe'},
        ]
    
    const containerStyles = {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',

    }
    const containerContentStyles = {
      display: 'flex',
      marginTop: '40px',
      marginBottom: '50px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    };


    
  return (
    <div>
        <HeaderImage title="News"/>
        <div style={containerStyles}>
        <div style={containerContentStyles}>
        {newsData.map((item, index) => (
        <NewsComponent link={item.link} img={item.img} title={item.title} text={item.text} key={item.title + index}/> ))}
        </div>
        </div>
    </div>
  )
}

export default NewsPage