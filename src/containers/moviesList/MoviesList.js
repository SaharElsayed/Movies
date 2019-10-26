import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import './MoviesList.scss';

const Card = React.lazy(() => import('../../components/card/Card'));

class MoviesList extends React.Component {

  render() {
    const { list: { results }, activeTab: { title } } = this.props;
    return (
      <React.Fragment>
        <h1 className="h1-light">{title.toUpperCase()}</h1>
        <h2>MOVIES</h2>
        <Row className="card-wrapper">
          {
            results &&
            results.map((item, i) => {
              return (
                <Suspense key={i} fallback={<div>...Loading</div>}>
                  <Card
                    key={i}
                    title={item.title}
                    id={item.id}
                    img={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                    initialRating={item.vote_average / 2}
                    size='lg'
                  />
                </Suspense>
              )
            })
          }
        </Row>
      </React.Fragment>
    );
  }
}


const mapStateToprops = state => {
  return { ...state };
}

export default connect(mapStateToprops)(MoviesList);