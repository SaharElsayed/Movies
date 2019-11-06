import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleMovieRequest, fetchCastRequest, fetchRecommendedRequest, fetchActiveTab } from '../../redux/actions/index';

const CardSingle = React.lazy(() => import('../../components/cardSingle/CardSingle'));
const MovieList = React.lazy(() => import('../moviesList/MoviesList'));

class MovieSingle extends React.Component {

  componentDidMount() {
    const { id } = this.props.computedMatch.params;
    this.fetchSingle(id);
    this.props.fetchActiveTab({id:0});
  }

  componentDidUpdate(prevProps) {
    if (this.props.computedMatch.params.id !== prevProps.computedMatch.params.id) {
      this.fetchSingle(this.props.computedMatch.params.id)
    }
  }

  fetchSingle = (id) => {
    this.props.fetchSingleMovieRequest(id, {
      append_to_response: 'videos'
    });
    this.props.fetchCastRequest(id);
    this.props.fetchRecommendedRequest(id, {
      page: 1
    })
  }

  render() {
    const { singleMovie:{movie, cast}} = this.props;
    return (
      <React.Fragment>
        <CardSingle movie={movie} cast={cast} />
        <MovieList pageTitle="recommended" recommended emptyStatement='There are no recommended movies...' />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { ...state };
}

export default connect(mapStateToProps, { fetchSingleMovieRequest, fetchCastRequest, fetchRecommendedRequest, fetchActiveTab })(MovieSingle);