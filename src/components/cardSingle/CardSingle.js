import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import './CardSingle.scss';

const CardImage = React.lazy(() => import('./../cardImage/CardImage'));
const Rating = React.lazy(() => import('./../rating/Rating'));
const CastList = React.lazy(() => import('./../castList/CastList'));

const CardSingle = ({ movie, cast }) => {
  console.log(movie);
  console.log(cast);


  return (
    <div className="card-single row justify-content-between align-items-start">

      <div className="card-single__img">
        <CardImage src={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : `/assets/svgs/nothing.svg`} />
      </div>

      <div className="card-single__content">
        <div className="card-single__title mb-5">
          <h1>{movie.original_title.toUpperCase()}</h1>
          <h2>{movie.tagline.toUpperCase()}</h2>
        </div>

        <div className="d-flex justify-content-between card-single__rate mb-5">
          <Rating size='lg' initialRating={movie.vote_average} showAverage />
          <h3>
            English / 122 MIN. / 2019
          </h3>
        </div>

        <div className="mb-5">
          <h3>THE GENRES</h3>
          <div className="card-single__genres d-flex">
            <div className="text-light font-weight-bold pr-3">
              <FontAwesomeIcon
                icon={faDotCircle}
                size='sm'
                className="mr-1"
              />
              <span>CRIME</span>
            </div>
            <div className="text-light font-weight-bold pr-3">
              <FontAwesomeIcon
                icon={faDotCircle}
                size='sm'
                className="mr-1"
              />
              <span>DRAMA</span>
            </div><div className="text-light font-weight-bold pr-3">
              <FontAwesomeIcon
                icon={faDotCircle}
                size='sm'
                className="mr-1"
              />
              <span>CRIME</span>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="mb-3">THE SYNOPSIS</h3>
          <p>During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.</p>
        </div>

        <div className="mb-5">
          <h3 className="mb-3">THE CAST</h3>
          <CastList />
        </div>

      </div>

    </div>
  )
}

export default CardSingle;