import React from 'react';
import './CardSingle.scss';

const CardImage = React.lazy(() => import('../cardImage/CardImage'));
const Rating = React.lazy(() => import('./../rating/Rating'));

const CardSingle = () => {
  return (
    <div className="row card-single">

      <div className="col-md-5 p-4 card-single__img">
        <CardImage src='https://image.tmdb.org/t/p/w780/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' />
      </div>

      <div className="col-md-7 p-4 card-single__content">
        <h1>Joker</h1>
        <h2>PUT ON A HAPPY FACE.</h2>
        <div className="d-flex justify-content-between">
          <Rating initialRating={8.6} showAverage />
          <h3>
            English / 122 MIN. / 2019
          </h3>
        </div>
      </div>

    </div>
  )
}

export default CardSingle;