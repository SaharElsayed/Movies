import React, { Suspense } from 'react';
import { Card as ItemCard } from 'react-bootstrap';
import Loader from '../loader/Loader';
import './Card.scss';

const Rating = React.lazy(() => import('../rating/Rating'));
const CardImage = React.lazy(() => import('../cardImage/CardImage'));

const Card = (props) => {
  return (
    <React.Fragment>
      <ItemCard className='movieCard text-center'>
        <Suspense fallback={<Loader />}>
          <CardImage src={props.img} />
        </Suspense>
        <ItemCard.Body className="movieCard__body">
          <h2 className="movieCard__title h2-light">{props.title}</h2>
          <Rating initialRating={props.rating} />
        </ItemCard.Body>
      </ItemCard>
    </React.Fragment>
  )
}

export default Card;