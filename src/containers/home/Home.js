import React from 'react';
import { CardDeck } from 'react-bootstrap';
import Card from '../../components/card/Card';
import { connect } from 'react-redux';
import { fetchList } from '../../redux/actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.props.fetchList();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Popular</h1>
        <CardDeck>
          <Card title='Movie 1' img={'https://image.tmdb.org/t/p/w342/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg'} initialRating={3} size='lg' />
          <Card title='Movie 2' img={'https://image.tmdb.org/t/p/w342/lcq8dVxeeOqHvvgcte707K0KVx5.jpg'} initialRating={2.5} size='lg' />
          <Card title='Movie 3' img={'https://image.tmdb.org/t/p/w342/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'} initialRating={5} size='lg' />
          <Card title='Movie 4' img={'https://image.tmdb.org/t/p/w342/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg'} initialRating={1} size='lg' />
        </CardDeck>

        {/* <PrimaryButton
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

        <Search size='lg' /> */}

      </React.Fragment>
    );
  }
}


const mapStateToprops = state => {
  console.log(state);

  return state;
}

export default connect(mapStateToprops, { fetchList })(Home);
