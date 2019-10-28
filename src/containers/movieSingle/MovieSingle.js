import React from 'react';
import './MovieSingle.scss';

const CardSingle = React.lazy(() => import('../../components/cardSingle/CardSingle'));

class MovieSingle extends React.Component {

  render() {
    return (
      <CardSingle />
    )
  }
}

export default MovieSingle;