import React from 'react';
import Stars from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

const MovieRating = ({ initialRating, size }) => {
  return (
    <Stars
      className="star"
      emptySymbol={<FontAwesomeIcon icon={emptyStar} size={size} className='icon' />}
      fullSymbol={<FontAwesomeIcon icon={faStar} size={size} className='icon' />}
      initialRating={initialRating}
      readonly
    />
  )
}

export default MovieRating;