import React from 'react';
import Stars from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

const Rating = ({ initialRating, size, showAverage }) => {

  return (
    <div>
      <Stars
        className="star pr-3"
        emptySymbol={<FontAwesomeIcon icon={emptyStar} size={size} className='icon' />}
        fullSymbol={<FontAwesomeIcon icon={faStar} size={size} className='icon' />}
        initialRating={initialRating / 2}
        readonly
      />
      {
        showAverage &&
        <span className="font-weight-bold text-primary">{initialRating}</span>
      }
    </div>
  )
}

export default Rating;