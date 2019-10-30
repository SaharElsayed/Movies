import React, { Suspense } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faLink, faPlay, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

import { ImgBaseURL } from '../../utils/Constants';
import Loader from './../loader/Loader';
import './CardSingle.scss';

const CardImage = React.lazy(() => import('./../cardImage/CardImage'));
const Rating = React.lazy(() => import('./../rating/Rating'));
const CastList = React.lazy(() => import('./../castList/CastList'));
const Button = React.lazy(() => import('./../button/Button'));

// Render info of movie
const renderInfo = (languages, time, data) => {
  const info = [];
  if (languages && languages.length !== 0) {
    info.push(languages[0].name);
  }
  info.push(time, data);
  return info
    .filter(el => el !== null)
    .map(el => (typeof el === 'number' ? `${el} min.` : el))
    .map((el, i, array) => (i !== array.length - 1 ? `${el} / ` : el));
}

// Function to get the year only from the date
const splitYear = (date) => {
  if (!date) {
    return;
  }
  const [year] = date.split('-');
  return year;
}

// Render Genres with links
const renderGenres = (genres) => {
  return genres.map((genre, i) => (
    <div className="text-light font-weight-bold pr-3" key={i}>
      <FontAwesomeIcon
        icon={faDotCircle}
        size='1x'
        className="mr-1"
      />
      <span>{genre.name}</span>
    </div>
  ));
}

const CardSingle = ({ movie, cast }) => {
  return (
    (movie && cast) &&
    <div className="card-single row justify-content-between align-items-start">

      <div className="card-single__img">
        <Suspense fallback={<Loader />}>
          <CardImage src={movie.poster_path ? `${ImgBaseURL}${movie.poster_path}` : `/assets/svgs/nothing.svg`} />
        </Suspense>
      </div>

      <div className="card-single__content">
        <div className="card-single__title mb-5">
          <h1>{movie.original_title}</h1>
          <h2>{movie.tagline}</h2>
        </div>

        <div className="d-flex justify-content-between card-single__rate mb-5">
          <Rating size='lg' initialRating={movie.vote_average} showAverage />
          <h3>
            {renderInfo(
              movie.spoken_languages,
              movie.runtime,
              splitYear(movie.release_date)
            )}
          </h3>
        </div>

        <div className="mb-5">
          <h3>THE GENRES</h3>
          <div className="card-single__genres d-flex">
            {renderGenres(movie.genres)}
          </div>
        </div>

        <div className="mb-5">
          <h3 className="mb-3">THE SYNOPSIS</h3>
          <p>{movie.overview ? movie.overview : 'There is no synopsis available...'}</p>
        </div>

        <div className="mb-5">
          <h3 className="mb-3">THE CAST</h3>
          <CastList cast={cast} />
        </div>

        <div className="buttons-wrapper d-flex justify-content-between">
          <div className='buttons-wrapper__leftBtns d-flex justify-content-between'>
            <Button
              text='Website'
              icon={faLink}
              className="btn-outline-primary"
              order='1'
              size='lg'
              dir='l'
            />
            <Button
              text='IMDB'
              icon={faImdb}
              className="btn-outline-primary"
              order='1'
              size='lg'
              dir='l'
            />
            <Button
              text='Trailer'
              icon={faPlay}
              className="btn-outline-primary"
              order='1'
              size='lg'
              dir='l'
            />
          </div>
          <Button
            text='Back'
            icon={faArrowLeft}
            order='0'
            size='lg'
            dir='r'
          />
        </div>

      </div>

    </div>
  )
}

export default CardSingle;