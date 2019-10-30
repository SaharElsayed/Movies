import React from "react";
import Slider from "react-slick";
import Loader from './../loader/Loader';
import { ImgBaseURL } from '../../utils/Constants';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './CastList.scss';

const CastList = ({ cast }) => {
  if (!cast) {
    return <Loader />;
  }
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

  };

  // nextArrow: <FontAwesomeIcon icon={faChevronRight} size='sm' />,
  // prevArrow: <FontAwesomeIcon icon={faChevronLeft} size='sm' />,

  return (
    <Slider className="cast" {...settings}>
      {cast &&
        cast.map(artist => {
          return (
            <div className="cast__artist d-flex justify-content-center" key={artist.cast_id}>
              <img src={artist.profile_path ? `${ImgBaseURL}${artist.profile_path}` : '/assets/svgs/person.svg'} alt="logo" />
            </div>
          )
        })
      }
    </Slider>
  );
}

export default CastList;