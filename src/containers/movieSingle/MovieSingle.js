import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import * as LazyComponent from './../../utils/LazyLoaded';
import Loader from './../../components/loader/Loader';

class MovieSingle extends React.Component {
  componentDidMount() {
    const { computedMatch: { params: { id } } } = this.props;
    this.fetchSingle(id);
  }

  componentDidUpdate(prevProps) {
    const { computedMatch: { params: { id: nextId } } } = this.props;
    const { computedMatch: { params: { id } } } = prevProps;
    if (nextId !== id) {
      this.fetchSingle(nextId)
    }
  }

  fetchSingle = id => {
    const { fetchSingleMovieRequest, fetchCastRequest, fetchRecommendedRequest } = this.props;
    fetchSingleMovieRequest(id, {
      append_to_response: 'videos'
    });
    fetchCastRequest(id);
    fetchRecommendedRequest(id, {
      page: 1
    })
  }

  render() {
    const { movie, cast } = this.props;
    return (
      <React.Fragment>
        <Suspense fallback={<Loader />}>
          <LazyComponent.TabTitle title={`${movie.original_title} - Movie Library`} />
          <LazyComponent.CardSingle movie={movie} cast={cast} />
          <LazyComponent.MoviesList
            pageTitle="recommended"
            recommended
            emptyTitle='Sorry!'
            emptyStatement='There are no recommended movies...'
            emptySrc='/assets/svgs/empty.svg'
          />
        </Suspense>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  fetchSingleMovieRequest: actions.fetchSingleMovieRequest,
  fetchCastRequest: actions.fetchCastRequest,
  fetchRecommendedRequest: actions.fetchRecommendedRequest,
  fetchActiveTab: actions.fetchActiveTab
};

const mapStateToProps = (state) => ({
  movie: state.singleMovie.movie,
  cast: state.singleMovie.cast
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSingle);