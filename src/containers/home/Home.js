import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { fetchListRequest } from '../../redux/actions/index';

const Card = React.lazy(() => import('../../components/card/Card'))
class Home extends React.Component {
  componentDidMount() {
    this.props.fetchListRequest();
  }

  render() {
    const { list } = this.props;
    return (
      <React.Fragment>
        <h1>Popular</h1>
        <Row className="card-wrapper">
          {
            list &&
            list.results.map((item, i) => {
              return (
                <Suspense fallback={<div key={i}>...Loading</div>}>
                  <Card
                    key={i}
                    title={item.title}
                    id={item.id}
                    img={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                    initialRating={item.vote_average}
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
  return { ...state.list };
}

export default connect(mapStateToprops, { fetchListRequest })(Home);
