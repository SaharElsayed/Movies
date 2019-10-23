import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { fetchDiscoverMoviesRequest } from '../../redux/actions/index';

const MoviesList = React.lazy(() => import('./../moviesList/MoviesList'));
const Pagination = React.lazy(() => import('./../../components/pagination/Pagination'));
class Home extends React.Component {

  componentDidMount() {
    const { activeTab: { id, title } } = this.props;
    this.props.fetchDiscoverMoviesRequest(id, title);
  }

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<div>...Loading</div>}>
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

export default connect(mapStateToprops, { fetchDiscoverMoviesRequest })(Home);
