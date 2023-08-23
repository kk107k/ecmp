import React from 'react';
import './headerImage.css';
import image from '../../assets/header picture.png';

const HeaderImage = ({ title }) => {
  return (
    <div className='headerImage__container'>
      <div className='headerImage__container-content'>
        <h1 className='image-title'>{title}</h1>
        <img src={image} alt='Header' />
      </div>
    </div>
  );
}

export default HeaderImage;
