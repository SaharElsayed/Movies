import React, { Suspense } from 'react';
import { faLink, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import history from '../../app/history';
import { ImgBaseURL } from '../../utils/Constants';
import Loader from './../loader/Loader';
import './ArtistCard.scss';

const CardImage = React.lazy(() => import('./../cardImage/CardImage'));
const Button = React.lazy(() => import('./../button/Button'));

const ArtistCard = ({ artist }) => {
  return (
    (artist) &&
    <div className="artist-single row justify-content-center align-items-start">
      <div className="artist-single__img">
        <Suspense fallback={<Loader />}>
          <CardImage src={artist.profile_path ? `${ImgBaseURL}${artist.profile_path}` : `/assets/svgs/person.svg`} />
        </Suspense>
      </div>

      <div className="artist-single__content">
        <div className="artist-single__title mb-5">
          <h1>{artist.name}</h1>
          <h2>{artist.birthday}{artist.deathday ? ` - ${artist.deathday}` : ''}</h2>
        </div>

        <div className="mb-5">
          <h3>The biography</h3>
          <p>{artist.biography ? artist.biography : 'There is no biography available...'}</p>
        </div>

        <div className="buttons-wrapper d-flex justify-content-between">
          <div className='buttons-wrapper__leftBtns d-flex justify-content-between'>
            {artist.homepage &&
              <Button
                text='Website'
                icon={faLink}
                className="btn-outline-primary"
                order='1'
                size='lg'
                dir='l'
                action={() => window.open(artist.homepage, '_blank')}
              />
            }

            {artist.imdb_id &&
              <Button
                text='IMDB'
                icon={faImdb}
                className="btn-outline-primary"
                order='1'
                size='lg'
                dir='l'
                action={() => window.open(`https://www.imdb.com/name/${artist.imdb_id}`, '_blank')}
              />
            }
          </div>
          <Button
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

export default ArtistCard;