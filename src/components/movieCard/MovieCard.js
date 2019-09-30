import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = (props) => {
  return (
    <React.Fragment>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            <h2 className="h2-light">{props.title}</h2>
          </Card.Title>
          <p>rating</p>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default MovieCard;