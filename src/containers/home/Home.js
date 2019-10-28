import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { fetchMoviesRequest } from '../../redux/actions/index';
import Loader from './../../components/loader/Loader';

const MoviesList = React.lazy(() => import('./../moviesList/MoviesList'));
const Pagination = React.lazy(() => import('./../../components/pagination/Pagination'));

class Home extends React.Component {

  componentDidMount() {
    const { fetchMoviesRequest, activeTab: { key } } = this.props;
    fetchMoviesRequest(key, { page: 1 });
  }

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<Loader />}>
          <MoviesList />
          <Pagination page={this.props.list.page} />
        </Suspense>
      </React.Fragment>
    );
  }
}

const mapStateToprops = state => {
  return { ...state };
}

export default connect(mapStateToprops, { fetchMoviesRequest })(Home);
