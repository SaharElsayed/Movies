import React, { useState } from 'react';
import './CardImage.scss';
import Loader from '../loader/Loader';

const CardImage = props => {
  const [imgLoader, setImgLoader] = useState(true);
  const handleLoader = () => {
    setImgLoader(false);
  }

  return (
    <React.Fragment>
      <img src={props.src} alt="img" className={`card-img ${imgLoader ? 'd-none' : ''}`} onLoad={handleLoader} />
      { imgLoader ? <Loader imgSize /> : null }
    </React.Fragment>
  )
}

export default CardImage;