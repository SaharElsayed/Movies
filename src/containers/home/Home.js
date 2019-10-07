import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import MovieCard from '../../components/movieCard/MovieCard';
import PrimaryButton from '../../components/button/Button';
import MenueList from '../../components/menueList/MenueList';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <h2>HOME</h2>
          {/* <CardDeck>
            <MovieCard title='Movie 1' img={'https://image.tmdb.org/t/p/w342/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg'} initialRating={3} size='lg' />
            <MovieCard title='Movie 2' img={'https://image.tmdb.org/t/p/w342/lcq8dVxeeOqHvvgcte707K0KVx5.jpg'} initialRating={2.5} size='lg' />
            <MovieCard title='Movie 3' img={'https://image.tmdb.org/t/p/w342/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'} initialRating={5} size='lg' />
            <MovieCard title='Movie 4' img={'https://image.tmdb.org/t/p/w342/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg'} initialRating={1} size='lg' />
          </CardDeck> */}

          <PrimaryButton
            text='page 2'
            className='btn-primary'
            icon={faArrowLeft}
            order='0'
            size='lg'
            dir='r'
          />

          <PrimaryButton
            text='page 3'
            className='btn-outline-primary'
            icon={faArrowRight}
            order='1'
            size='lg'
            dir='l'
          />


          <MenueList title='discover' />
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;