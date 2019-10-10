import React, { Suspense } from 'react';
import { Card as ItemCard } from 'react-bootstrap';
import './Card.scss';

const Rating = React.lazy(() => import('../rating/Rating'))

const Card = (props) => {
  return (
    <React.Fragment>
      <ItemCard className='movieCard text-center'>
        <ItemCard.Img className='movieCard__img' variant="top" src={props.img} />
        <ItemCard.Body className="movieCard__body">
          <h2 className="movieCard__title h2-light">{props.title}</h2>
          <Suspense fallback={<div>...Loading</div>}>
            <Rating initialRating={props.initialRating} />
          </Suspense>
        </ItemCard.Body>
      </ItemCard>
    </React.Fragment>
  )
}

export default Card;