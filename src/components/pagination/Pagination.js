import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import history from '../../app/history';
import * as actions from '../../redux/actions/index';
import * as LazyComponent from './../../utils/LazyLoaded';
import './Pagination.scss';

class Pagination extends React.Component {
  handlePagination = (page) => {
    const {
      fetchMoviesRequest, fetchRecommendedRequest,
      activeTab: { key, id },
      searchKeyword: { search },
      sort: { sortingKey }
    } = this.props;

    switch (true) {
      case history.location.pathname.includes('/movie'):
        const MovieId = history.location.pathname.replace('/movie/', '');
        history.push({ search: `?page=${page}` });
        fetchRecommendedRequest(MovieId, { page });
        break;
      case history.location.pathname.includes('/artist'):
        const artistId = history.location.pathname.replace('/artist/', '');
        fetchMoviesRequest(artistId, {
          page,
          sort_by: sortingKey ? sortingKey : '',
          with_cast: artistId
        });
        history.push({ search: `?page=${page}` });
        break;
      default:
        fetchMoviesRequest(key, {
          page,
          with_genres: key ? '' : id,
          query: search ? search : '',
          sort_by: sortingKey ? sortingKey : ''
        });
        history.push({ search: `?page=${page}` });
    }
  }

  render() {
    const { list: { page, total_pages } } = this.props;
    return (
      <div className={`row pagination ${page === 1 ? 'justify-content-end' : 'justify-content-between'}`}>
        {
          page > 1 &&
          <LazyComponent.Button
            text={`page ${page - 1}`}
            className='btn'
            icon={faArrowLeft}
            order='0'
            size='lg'
            dir='r'
            action={() => this.handlePagination(page - 1)}
          />
        }
        {
          page < total_pages &&
          <LazyComponent.Button
            text={`page ${page + 1}`}
            className='btn'
            icon={faArrowRight}
            order='1'
            size='lg'
            dir='l'
            action={() => this.handlePagination(page + 1)}
          />
        }
      </div>
    );
  }
};

const mapDispatchToProps = {
  fetchRecommendedRequest: actions.fetchRecommendedRequest,
  fetchMoviesRequest: actions.fetchMoviesRequest
};

const mapStateToProps = state => {
  return { ...state }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);