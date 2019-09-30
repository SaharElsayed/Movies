import React from 'react';
import MovieCard from '../../components/movieCard/MovieCard';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <h2>HOME</h2>
          <Row>
            <Col>
              <MovieCard title='Movie 1' />
            </Col>
            <Col>
              <MovieCard title='Movie 2' />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;