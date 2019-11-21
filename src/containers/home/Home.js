import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import Loader from './../../components/loader/Loader';
import * as actions from '../../redux/actions/index';
import * as LazyComponent from './../../utils/LazyLoaded';

class Home extends React.Component {
  componentDidMount() {
    const { fetchMoviesRequest, activeTab: { key, id }, sortingKey } = this.props;
    fetchMoviesRequest(key, {
      page: 1,
      with_genres: key ? '' : id,
      sort_by: sortingKey
    });
  }

  render() {
    const { activeTab: { title } } = this.props;    
    return (
      <React.Fragment>
        <Suspense fallback={<Loader />}>
          <LazyComponent.TabTitle title={`${title} Movies`} />
          <LazyComponent.MoviesList />
        </Suspense>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  fetchMoviesRequest: actions.fetchMoviesRequest,
  fetchActiveTab: actions.fetchActiveTab
};

const mapStateToprops = state => ({
  activeTab: state.activeTab,
  sortingKey: state.sort.sortingKey
})

export default connect(mapStateToprops, mapDispatchToProps)(Home);