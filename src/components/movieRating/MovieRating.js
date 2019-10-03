import React from 'react';
import Stars from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import './MovieRating.scss';

const MovieRating = ({ initialRating }) => {
  return (
    <Stars
      className="star"
      emptySymbol={<FontAwesomeIcon icon={emptyStar} size="lg" className='icon' />}
      fullSymbol={<FontAwesomeIcon icon={faStar} size="lg" className='icon' />}
      initialRating={initialRating}
      readonly
    />
  )
}

export default MovieRating;