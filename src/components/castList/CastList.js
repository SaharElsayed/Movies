import React from "react";
import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './CastList.scss';

const CastList = () => {
  const settings = {
    dots: false,
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // swipeToSlide: true,
    // speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

  };

  // nextArrow: <FontAwesomeIcon icon={faChevronRight} size='sm' />,
  // prevArrow: <FontAwesomeIcon icon={faChevronLeft} size='sm' />,

  return (
    <Slider className="cast" {...settings}>
      <div className="cast__artist d-flex justify-content-center">
        <img src='/assets/svgs/person.svg' alt="logo" />
      </div>
      <div className="cast__artist d-flex justify-content-center">
        <img src='/assets/svgs/person.svg' alt="logo" />
      </div>
      <div className="cast__artist d-flex justify-content-center">
        <img src='/assets/svgs/person.svg' alt="logo" />
      </div>
      <div className="cast__artist d-flex justify-content-center">
        <img src='/assets/svgs/person.svg' alt="logo" />
      </div>
      <div className="cast__artist d-flex justify-content-center">
        <img src='/assets/svgs/person.svg' alt="logo" />
      </div>
      <div className="cast__artist d-flex justify-content-center">
        <img src='/assets/svgs/person.svg' alt="logo" />
      </div>
    </Slider>
  );
}


export default CastList;