import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleMovieRequest, fetchCastRequest } from '../../redux/actions/index';
import './MovieSingle.scss';

const CardSingle = React.lazy(() => import('../../components/cardSingle/CardSingle'));

class MovieSingle extends React.Component {

  componentDidMount() {
    const { id } = this.props.computedMatch.params;
    this.props.fetchSingleMovieRequest(id, {
      append_to_response: 'videos'
    });
    this.props.fetchCastRequest(id);
  }

  render() {
    const { movie, cast } = this.props.singleMovie;
    return (
      <CardSingle movie={movie} cast={cast} />
    )
  }
}

const mapStateToProps = state => {
  return { ...state };
}

export default connect(mapStateToProps, { fetchSingleMovieRequest, fetchCastRequest })(MovieSingle);