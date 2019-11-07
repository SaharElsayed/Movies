import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { fetchMoviesRequest, fetchActiveTab } from '../../redux/actions/index';
import Loader from './../../components/loader/Loader';

const MoviesList = React.lazy(() => import('./../moviesList/MoviesList'));

class Home extends React.Component {

  componentDidMount() {
    const { fetchMoviesRequest, fetchActiveTab, activeTab: { key, title, id } } = this.props;
    fetchMoviesRequest(key, { page: 1 });
    // fetchActiveTab({ id: id === 0 ? 1 : id, title, key });
  }

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<Loader />}>
          <MoviesList />
        </Suspense>
      </React.Fragment>
    );
  }
}

const mapStateToprops = state => {
  return { ...state };
}

export default connect(mapStateToprops, { fetchMoviesRequest, fetchActiveTab })(Home);
