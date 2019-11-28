import React, { Suspense } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faLink, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import history from '../../app/history';
import { ImgBaseURL } from '../../utils/Constants';
import Loader from './../loader/Loader';
import * as LazyComponent from './../../utils/LazyLoaded';
import nothing from './../../assets/svgs/nothing.svg'
import './CardSingle.scss';

class CardSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  renderInfo = (languages, time, date) => {
    const info = [];
    if (languages && languages.length !== 0) {
      info.push(languages[0].name);
    }
    info.push(time, date);

    return info
      .filter(el => el !== null)
      .map(el => (typeof el === 'number' ? `${el} min.` : el))
      .map((el, i, array) => (i !== array.length - 1 ? `${el} / ` : el));
  }

  splitYear = (date) => {
    if (!date) {
      return;
    }
    const [year] = date.split('-');
    return year;
  }

  renderGenres = (genres) => {
    if (genres) {
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
  }

  renderTrailer = (videos, isOpen, callBack) => {
    if (videos.length === 0) {
      return;
    }

    const { key } = videos.find(
      video => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return (
      <React.Fragment>
        <LazyComponent.VideoModal
          channel="youtube"
          videoId={key}
          action={callBack}
          isOpen={isOpen}
        />
      </React.Fragment>
    );
  }

  ChangeModalState = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { movie, cast } = this.props;
    const { isOpen } = this.state;

    return (
      (movie && cast) &&
      <div className="card-single row justify-content-between align-items-start">
        <div className="card-single__img">
          <Suspense fallback={<Loader />}>
            <LazyComponent.CardImage src={movie.poster_path ? `${ImgBaseURL}${movie.poster_path}` : nothing} />
          </Suspense>
        </div>

        <div className="card-single__content">
          <div className="card-single__title mb-5">
            <h1>{movie.original_title}</h1>
            <h2>{movie.tagline}</h2>
          </div>

          <div className="d-flex justify-content-between card-single__rate mb-5">
            <LazyComponent.Rating size='lg' initialRating={movie.vote_average} showAverage />
            <h3>
              {this.renderInfo(
                movie.spoken_languages,
                movie.runtime,
                this.splitYear(movie.release_date)
              )}
            </h3>
          </div>

          <div className="mb-5">
            <h3>THE GENRES</h3>
            <div className="card-single__genres d-flex">
              {this.renderGenres(movie.genres)}
            </div>
          </div>

          <div className="mb-5">
            <h3 className="mb-3">THE SYNOPSIS</h3>
            <p>{movie.overview ? movie.overview : 'There is no synopsis available...'}</p>
          </div>

          <div className="mb-5">
            <h3 className="mb-3">THE CAST</h3>
            <LazyComponent.CastList cast={cast} />
          </div>

          <div className="buttons-wrapper d-flex justify-content-between">
            <div className='buttons-wrapper__leftBtns d-flex justify-content-between'>

              {movie.homepage &&
                <LazyComponent.Button
                  text='Website'
                  icon={faLink}
                  className="btn-outline-primary"
                  order='1'
                  size='lg'
                  dir='l'
                  action={() => window.open(movie.homepage, '_blank')}
                />
              }

              {movie.imdb_id &&
                <LazyComponent.Button
                  text='IMDB'
                  icon={faImdb}
                  className="btn-outline-primary"
                  order='1'
                  size='lg'
                  dir='l'
                  action={() => window.open(`https://www.imdb.com/title/${movie.imdb_id}`, '_blank')}
                />
              }

              {
                movie.videos &&
                this.renderTrailer(movie.videos.results, isOpen, this.ChangeModalState)
              }

            </div>

            <LazyComponent.Button
              text='Back'
              icon={faArrowLeft}
              order='0'
              size='lg'
              dir='r'
              action={history.goBack}
            />
          </div>

        </div>

      </div>
    )
  }
}

export default CardSingle;