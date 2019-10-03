import React, { Suspense } from 'react';
import { Card } from 'react-bootstrap';
import './MovieCard.scss';

const MovieRating = React.lazy(() => import('../movieRating/MovieRating'))

const MovieCard = (props) => {
  return (
    <React.Fragment>
      <Card className='movieCard text-center'>
        <Card.Img className='movieCard__img' variant="top" src={props.img} />
        <Card.Body className="movieCard__body">
          <h2 className="movieCard__title h2-light">{props.title}</h2>
          <Suspense fallback={<div>...Loading</div>}>
            <MovieRating initialRating={props.initialRating} />
          </Suspense>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default MovieCard;