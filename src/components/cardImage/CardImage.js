import React from 'react';
import './CardImage.scss';

const CardImage = props => {
  return (
    <img src={props.src} alt="img" className='card-img' />
  )
}

export default CardImage;