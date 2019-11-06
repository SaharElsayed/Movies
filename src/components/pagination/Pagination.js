import React from 'react';
import Button from '../button/Button';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchMoviesRequest, fetchRecommendedRequest } from '../../redux/actions/index';
import history from '../../app/history';
import './Pagination.scss';

class Pagination extends React.Component {
  handlePagination = (page) => {    
    const { fetchMoviesRequest, fetchRecommendedRequest, activeTab: { key, id }, searchKeyword: { search }, sort: { sortingKey } } = this.props;
    switch (true) {
      case history.location.pathname.includes('/Movie'):
        const MovieId = history.location.pathname.replace('/Movie/', '');
        fetchRecommendedRequest(MovieId, { page });
        break;
      case history.location.pathname.includes('/Artist'):
        const artistId = history.location.pathname.replace('/Artist/', '');
        fetchMoviesRequest(artistId, {
          page,
          sort_by: sortingKey ? sortingKey : '',
          with_cast: artistId
        });
        break;
      default:
        fetchMoviesRequest(key, {
          page,
          with_genres: key ? '' : id,
          query: search ? search : '',
          sort_by: sortingKey ? sortingKey : ''
        });
    }
  }

  render() {
    const { list: { page, total_pages } } = this.props;
    return (
      <div className={`row pagination ${page === 1 ? 'justify-content-end' : 'justify-content-between'}`}>
        {
          page > 1 &&
          <Button
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
          <Button
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

const mapStateToProps = state => {
  return { ...state }
}
export default connect(mapStateToProps, { fetchMoviesRequest, fetchRecommendedRequest })(Pagination);