import React from 'react';
// Import Swiper React components
import mountain from '../../assets/mountains.png';
import desert from '../../assets/desert_pic.png';
import museam from '../../assets/museam.png';
// Import Swiper styles

import './sliderImage.css';
import { Link } from 'react-router-dom';

// import required modules

export default function SliderImage() {
  return (
    <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="0"
    loop="true">
    <swiper-slide><img src={mountain} alt="" />
    <div class="slider-image__container">
      <div>
        <h1>Emerging Capital Management Partners</h1>
      </div>
      <div>
        <p>Welcome, we have the solutions for you and your businesses</p>
      </div>
      <div className='slider-image_button'>
        <Link to={'/about'}>About us</Link>
      </div>
      </div></swiper-slide>
    <swiper-slide><img src={desert} alt="" />
    <div class="slider-image__container">
      <div>
        <h1>Services We Offer</h1>
      </div>
      <div>
        <p>Get in touch with us today and learn how <b>EMCMP</b> can help your future success</p>
      </div>
      <div className='slider-image_button'>
        <Link to={'/contact'}>Contact us</Link>
      </div>
      </div></swiper-slide>
    <swiper-slide><img src={museam} alt="" />
    <div class="slider-image__container">
      <div>
        <h1>Delivering End-to-End Solutions for You</h1>
      </div>
      <div>
        <p><b>EMCMP</b> has Industry expertise which is right for you</p>
      </div>
      <div className='slider-image_button'>
        <Link to={'/Corporate-Advisory'}>Services</Link>
      </div>
      </div></swiper-slide>
  </swiper-container>

  );
}
