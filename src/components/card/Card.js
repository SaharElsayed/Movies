import React, { Suspense } from 'react';
import { Card as ItemCard } from 'react-bootstrap';
import Loader from '../loader/Loader';
import './Card.scss';
import * as LazyComponent from './../../utils/LazyLoaded';

const Card = (props) => {
  return (
    <React.Fragment>
      <ItemCard className='movieCard text-center'>
        <Suspense fallback={<Loader />}>
          <LazyComponent.CardImage src={props.img} />
        </Suspense>
        <ItemCard.Body className="movieCard__body">
          <h2 className="movieCard__title h2-light">{props.title}</h2>
          <Suspense fallback={<Loader />}>
            <LazyComponent.Rating initialRating={props.rating} />
          </Suspense>
        </ItemCard.Body>
      </ItemCard>
    </React.Fragment>
  )
}

export default Card;